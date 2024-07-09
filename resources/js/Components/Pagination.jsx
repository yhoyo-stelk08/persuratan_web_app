import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Pagination({ meta, onUpdatePageNumber }) {
    // console.log(meta);

    const updatedPageNumber = (link) => {
        onUpdatePageNumber(link);
    };

    const renderPageNumber = () => {
        const pages = [];
        const totalPages = meta.last_page;
        const currentPage = meta.current_page;
        const delta = 2; // Number of pages to show before and after the current page

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                pages.push(i);
            } else if (
                i === currentPage - delta - 1 ||
                i === currentPage + delta + 1
            ) {
                pages.push("...");
            }
        }

        return pages.map((page, index) => {
            if (page === "...") {
                return (
                    <span
                        key={index}
                        className="relative inline-flex items-center px-4 py-2 border bg-white border-gray-300 text-gray-500 text-sm font-medium"
                    >
                        ...
                    </span>
                );
            }

            const link = meta.links.find((l) => l.label == page);
            return (
                <button
                    key={index}
                    disabled={link?.active || !link?.url}
                    onClick={() => updatedPageNumber(link)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        link.active
                            ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    }`}
                >
                    {page}
                </button>
            );
        });
    };
    const previousLink = meta.links.find((l) => l.label === "&laquo; Previous");
    const nextLink = meta.links.find((l) => l.label === "Next &raquo;");

    return (
        <div className="max-w-7xl mx-auto py-6">
            <div className="max-w-none mx-auto">
                <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                        <div className="flex-1 flex justify-between sm:hidden" />
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing
                                    <span className="font-medium mx-1">
                                        {meta.from}
                                    </span>
                                    to
                                    <span className="font-medium mx-1">
                                        {meta.to}
                                    </span>
                                    of
                                    <span className="font-medium mx-1">
                                        {meta.total}
                                    </span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav
                                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                    aria-label="Pagination"
                                >
                                    {previousLink?.url && (
                                        <button
                                            onClick={() =>
                                                updatedPageNumber(previousLink)
                                            }
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                            <span>
                                                <MdNavigateBefore />
                                            </span>
                                            Previous
                                        </button>
                                    )}
                                    {renderPageNumber()}
                                    {nextLink?.url && (
                                        <button
                                            onClick={() =>
                                                updatedPageNumber(nextLink)
                                            }
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                            Next{" "}
                                            <span>
                                                <MdNavigateNext />
                                            </span>
                                        </button>
                                    )}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
