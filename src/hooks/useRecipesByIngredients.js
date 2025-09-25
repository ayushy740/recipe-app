import { useEffect, useMemo, useState } from "react"

const API_BASE = "https://www.themealdb.com/api/json/v1/1"

export function useRecipesByIngredients(initialQuery = "") {
  const [query, setQuery] = useState(initialQuery)
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const normalizedQuery = useMemo(() => {
    return query
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .join(",")
  }, [query])

  useEffect(() => {
    if (!normalizedQuery) {
      setRecipes([])
      setError("")
      return
    }
    let isCancelled = false
    async function fetchRecipes() {
      try {
        setIsLoading(true)
        setError("")
        const ingredients = normalizedQuery.split(",")
        const fetches = ingredients.map((ing) =>
          fetch(`${API_BASE}/filter.php?i=${encodeURIComponent(ing)}`).then((r) => r.json())
        )
        const results = await Promise.all(fetches)
        const mealsLists = results.map((res) => res.meals || [])

        const idToMeal = new Map()
        if (mealsLists.length === 0) {
          setRecipes([])
        } else if (mealsLists.length === 1) {
          for (const meal of mealsLists[0]) idToMeal.set(meal.idMeal, meal)
          setRecipes(Array.from(idToMeal.values()))
        } else {
          let intersection = mealsLists[0].map((m) => m.idMeal)
          for (let i = 1; i < mealsLists.length; i++) {
            const setIds = new Set(mealsLists[i].map((m) => m.idMeal))
            intersection = intersection.filter((id) => setIds.has(id))
          }
          for (const meal of mealsLists[0]) idToMeal.set(meal.idMeal, meal)
          setRecipes(intersection.map((id) => idToMeal.get(id)).filter(Boolean))
        }
      } catch (e) {
        setError("Something went wrong. Please try again.")
        setRecipes([])
      } finally {
        if (!isCancelled) setIsLoading(false)
      }
    }
    fetchRecipes()
    return () => {
      isCancelled = true
    }
  }, [normalizedQuery])

  return { query, setQuery, recipes, isLoading, error }
}
