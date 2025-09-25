export default function LoadingSkeleton() {
  const cards = Array.from({ length: 8 })
  return (
    <div className="container-px">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white shadow-card overflow-hidden"
            aria-hidden="true"
          >
            <div className="h-40 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-[shimmer_1.5s_infinite] bg-[length:1000px_100%]"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
              <div className="h-3 w-1/2 bg-neutral-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
