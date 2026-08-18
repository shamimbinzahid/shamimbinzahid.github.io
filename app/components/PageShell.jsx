export function PageShell({
  children,
  outerClassName = "",
  mainClassName = "",
  articleClassName = "",
}) {
  return (
    <div
      className={`transition-all duration-300  relative rotating-gradient min-h-[100dvh] flex flex-col select-none dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-teal-950/30 dark:to-black ${outerClassName}`}
    >
      <main
        className={`px-4 sm:px-6 py-6 sm:py-12 flex-grow flex flex-col items-center justify-center ${mainClassName}`}
      >
        <article className={`flex flex-col ${articleClassName}`}>
          {children}
        </article>
      </main>
    </div>
  );
}