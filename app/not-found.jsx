export default function NotFound() {
  return (
    <div className="text-center max-w-md px-4">
      <p className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-blue-400 mb-4">
        that's a 404.
      </p>

      <p className="text-lg leading-relaxed font-medium text-gray-800 dark:text-gray-200 mb-2">
        Page not found
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The page you're looking for has either been removed or doesn't exist.
      </p>
    </div>
  );
}