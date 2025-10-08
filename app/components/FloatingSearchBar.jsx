import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

export const FloatingSearchBar = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = content.paragraphs
      .map((paragraph, index) => ({
        paragraph,
        index,
        matches: paragraph.toLowerCase().includes(searchTerm.toLowerCase())
          ? paragraph.toLowerCase().split(searchTerm.toLowerCase()).length - 1
          : 0,
      }))
      .filter((result) => result.matches > 0)
      .sort((a, b) => b.matches - a.matches);

    setSearchResults(results);
  }, [searchTerm, content.paragraphs]);

  const highlightText = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const scrollToParagraph = (index) => {
    const element = document.getElementById(`paragraph-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 ark:bg-white text-white ark:text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        aria-label="Open search"
      >
        <Search size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white ark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 ark:border-gray-700">
              <div className="flex items-center gap-3">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-color-main placeholder-gray-500"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="text-gray-400 hover:text-gray-600 ark:hover:text-gray-300"
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="p-4">
                  <p className="text-sm text-gray-700 ark:text-gray-300 mb-3">
                    Found {searchResults.length} result
                    {searchResults.length !== 1 ? "s" : ""}
                  </p>
                  {searchResults.map((result) => (
                    <div
                      key={result.index}
                      className="mb-3 p-3 bg-gray-50 ark:bg-gray-800 rounded cursor-pointer hover:bg-gray-100 ark:hover:bg-gray-700 transition-colors"
                      onClick={() => scrollToParagraph(result.index)}
                    >
                      <p
                        className="text-sm text-color-main"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(result.paragraph, searchTerm),
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : searchTerm.trim() !== "" ? (
                <div className="p-4 text-center text-gray-500 ark:text-gray-400">
                  No results found for "{searchTerm}"
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500 ark:text-gray-400">
                  Start typing to search...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
