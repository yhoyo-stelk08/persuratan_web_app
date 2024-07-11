import Pagination from "@/Components/Pagination";
import TableSurat from "@/Components/TableSurat";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebounce } from "use-debounce";

export default function SuratMasukIndex({
    auth,
    search,
    data_surat,
    sort_by,
    sort_direction,
}) {
    // console.log(data_surat);
    const [searchTerm, setSearchTerm] = useState(search || "");
    const isInitialRender = useRef(true);
    const [pageNumber, setPageNumber] = useState("");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
    const previousSearchTerm = useRef(searchTerm);
    const [sortBy, setSortBy] = useState(sort_by || ""); // "" for not sorted, "asc" for ascending, "desc" for descending
    const [sortDirection, setSortDirection] = useState(sort_direction || ""); // "" for not sorted, "asc" for ascending, "desc" for descending

    const columnHeader = [
        "Tanggal Naskah",
        "Nomor Naskah",
        "Perihal",
        "Asal Naskah",
        "Uraian Informasi Berkas",
    ];

    const handleChange = (e) => {
        const { value: _searchTerm } = e.target;
        setSearchTerm(_searchTerm);
    };

    const updatedPageNumber = (link) => {
        setPageNumber(link.url.split("=")[1]);
    };

    // function to handle sorting of column
    const handleSort = (column) => {
        // Normalize column names
        if (column === "uraian_informasi_berkas") {
            column = "uraian_info_berkas";
        }

        if (column === "perihal") {
            column = "hal";
        }

        if (sortBy === column) {
            // Cycle through the three states
            if (sortDirection === "asc") {
                setSortDirection("desc");
            } else if (sortDirection === "desc") {
                setSortBy("");
                setSortDirection("");
            } else {
                setSortDirection("asc");
            }
        } else {
            setSortBy(column);
            setSortDirection("asc");
        }
    };

    // building url based on the change of searchTerm
    const dataSuratURL = useMemo(() => {
        const url = new URL(route("surat-masuk.index"));

        if (pageNumber) url.searchParams.set("page", pageNumber);
        if (debouncedSearchTerm) {
            url.searchParams.set("search", debouncedSearchTerm);
            if (debouncedSearchTerm !== previousSearchTerm.current) {
                setPageNumber("1");
                previousSearchTerm.current = debouncedSearchTerm;
            }
        }
        if (sortBy) {
            url.searchParams.set("sort_by", sortBy);
            if (sortDirection) {
                url.searchParams.set("sort_direction", sortDirection);
            }
        }
        return url;
    }, [
        debouncedSearchTerm,
        pageNumber,
        previousSearchTerm,
        sortBy,
        sortDirection,
    ]);

    useEffect(() => {
        // prevent the infinite loop caused by visiting dataSuratURL
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        // visit the data surat url whenever it changed
        router.visit(dataSuratURL, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    }, [dataSuratURL]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Surat Masuk
                </h2>
            }
        >
            <Head title="Surat Masuk" />

            <div className="bg-gray-100 py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">
                                    Surat Masuk
                                </h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    Daftar Surat Masuk.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start sm:flex-row mt-6">
                            <div className="relative text-sm text-gray-800 col-span-3">
                                <div className="absolute pl-2 left-0 top-0 bottom-0 flex items-center pointer-events-none text-gray-500">
                                    <FaMagnifyingGlass />
                                </div>
                                <input
                                    onChange={handleChange}
                                    value={searchTerm}
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Search roles data..."
                                    id="search"
                                    className="block rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div>
                                        <Pagination
                                            meta={data_surat.meta}
                                            onUpdatePageNumber={
                                                updatedPageNumber
                                            }
                                        />
                                    </div>
                                    <TableSurat
                                        data_surat={data_surat}
                                        sort_by={sortBy}
                                        sort_direction={sortDirection}
                                        onSorting={handleSort}
                                        columnHeader={columnHeader}
                                    />
                                    <div>
                                        <Pagination
                                            meta={data_surat.meta}
                                            onUpdatePageNumber={
                                                updatedPageNumber
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
