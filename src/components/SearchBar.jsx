export default function SearchBar({ value, onChange, onSubmit, isLoading }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.()
      }}
      className="container-px -mt-2 mb-8"
      role="search"
      aria-label="Search recipes by ingredients"
    >
      <div className="mx-auto max-w-3xl flex items-stretch gap-2">
        <input
          type="text"
          inputMode="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. chicken, rice, lemon"
          className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 placeholder:text-neutral-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl bg-brand-600 text-white px-5 py-3 font-semibold shadow hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-60 disabled:cursor-not-allowed transition-transform duration-200 active:scale-[0.98]"
        >
          {isLoading ? "Searching…" : "Search"}
        </button>
      </div>
    </form>
  )
}
