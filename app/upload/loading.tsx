export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-lg mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-xl border-0 p-6">
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse max-w-xs"></div>
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-md"></div>

            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse max-w-xs mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse max-w-sm mx-auto"></div>
              </div>
            </div>

            <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
