export default function EmptyState({ title, message }) {
  return (
    <div className="container-px">
      <div className="text-center bg-white rounded-2xl shadow-card p-10">
        <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
        <p className="mt-2 text-neutral-600">{message}</p>
      </div>
    </div>
  )
}
