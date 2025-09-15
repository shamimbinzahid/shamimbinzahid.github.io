export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">nigg...</p>
        <div className="mt-4 h-1 w-48 mx-auto bg-gray-200 overflow-hidden">
          <div className="animate-pulse h-full bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
}