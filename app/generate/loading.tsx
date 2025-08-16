export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-lg mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section Skeleton */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-xl border-0 p-6">
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded-lg animate-pulse max-w-xs"></div>
                <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-md"></div>
                <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Templates Skeleton */}
            <div className="bg-white rounded-xl shadow-xl border-0 p-6">
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-xs"></div>
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-6 max-w-sm"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-5 bg-gray-200 rounded-lg animate-pulse w-32"></div>
                      <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse max-w-md"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Output Section Skeleton */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-xl border-0 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-2 w-40"></div>
                  <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-56"></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse max-w-xs mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
