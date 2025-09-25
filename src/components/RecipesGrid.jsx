import RecipeCard from "./RecipeCard"

export default function RecipesGrid({ recipes =[] }) {
  return (
    <div className="container-px pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((meal) => (
          <a
            key={meal.idMeal}
            href={`https://www.themealdb.com/meal.php?c=${meal.idMeal}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RecipeCard meal={meal} />
          </a>
        ))}
      </div>
    </div>
  )
}
