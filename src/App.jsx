import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import LoadingSkeleton from "./components/LoadingSkeleton"
import EmptyState from "./components/EmptyState"
import RecipesGrid from "./components/RecipesGrid"


import { useRecipesByIngredients } from "./hooks/useRecipesByIngredients"

export default function App() {
  const { query, setQuery, recipes, isLoading, error } = useRecipesByIngredients("")

  return (
    <div className="min-h-full">
      <Header />
      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={() => {}}
        isLoading={isLoading}
      />
      

      {isLoading && <LoadingSkeleton />}
      {!isLoading && error && <EmptyState title="We hit a snag" message={error} />}
      {!isLoading && !error && !query && (
        <EmptyState
          title="Search by ingredients"
          message="Try something like ‘chicken, rice’ or ‘tomato, basil’."
        />
      )}
      {!isLoading && !error && query && recipes.length === 0 && (
        <EmptyState
          title="No recipes found"
          message="We couldn’t find meals with those ingredients. Try fewer or different items."
        />
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipesGrid recipes={recipes} />
      )}
    </div>
  )
}
