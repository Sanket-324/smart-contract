export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-lg mx-auto"></div>
        </div>

        {/* Overall Score Skeleton */}
        <div className="bg-white rounded-xl shadow-xl border-0 p-6 mb-8">
          <div className="text-center space-y-4">
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse max-w-xs mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-sm mx-auto"></div>
            <div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-xs mx-auto"></div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <div className="h-10 bg-gray-200 rounded-md animate-pulse flex-1"></div>
            <div className="h-10 bg-gray-200 rounded-md animate-pulse flex-1"></div>
            <div className="h-10 bg-gray-200 rounded-md animate-pulse flex-1"></div>
          </div>

          {/* Charts Skeleton */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg border-0 p-6">
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-xs"></div>
              <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg border-0 p-6">
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-xs"></div>
              <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* Vulnerability Cards Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg border-0 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-48"></div>
                  </div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-2xl"></div>
                <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
