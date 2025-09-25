export default function Header() {
  return (
    <header className="container-px py-10 text-center bg-gradient-to-b from-yellow-200 to-white">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 ">
        <span role="img" aria-label="Cooking">🍳</span> Recipe Ideas
      </h1>
      <p className="mt-3 text-neutral-800 max-w-2xl mx-auto " >
        Find meals fast by ingredients. Separate multiple items with commas.
      </p>
    </header>
  )
}
