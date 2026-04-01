export default function Loading() {
  return (
    <div className="max-w-xl mx-auto px-6 py-8 animate-pulse">
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-[14px] mb-6" />
      <div className="h-6 bg-gray-100 rounded w-1/2 mb-3" />
      <div className="h-8 bg-gray-100 rounded w-1/4 mb-3" />
      <div className="h-4 bg-gray-100 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 rounded w-3/4" />
    </div>
  )
}