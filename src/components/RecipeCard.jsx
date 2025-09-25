export default function RecipeCard({ meal }) {
  return (
    <article className="group rounded-2xl bg-white shadow-card overflow-hidden hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
      <div className="aspect-video overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2">{meal.strMeal}</h3>
        <p className="mt-1 text-sm text-neutral-600">{meal.strCategory || "Recipe"}</p>
      </div>
    </article>
  )
}
