import { Link, router } from "@inertiajs/react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

export default function TableSurat({
    sort_by,
    sort_direction,
    data_surat,
    onSorting,
    columnHeader,
    deleteRoute,
    editRoute,
}) {
    // console.log(data_surat.data);
    const hapusSurat = (suratId) => {
        if (confirm("Are you sure you want to delete this record?")) {
            router.delete(route(deleteRoute, suratId), {
                preserveScroll: true,
            });
        }
    };

    const handleSort = (column) => {
        onSorting(column);
    };

    return (
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg relative">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        {columnHeader.map((column) => {
                            const columnKey = column
                                .toLowerCase()
                                .replace(/ /g, "_");
                            return (
                                <th
                                    key={column}
                                    onClick={() => handleSort(columnKey)}
                                    scope="col"
                                    className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer whitespace-nowrap ${
                                        sort_by === columnKey ? "underline" : ""
                                    }`}
                                >
                                    <div className="flex items-center">
                                        {column}
                                        {sort_by === columnKey && (
                                            <span className="ml-1">
                                                {sort_direction === "asc" ? (
                                                    <RxCaretUp />
                                                ) : sort_direction ===
                                                  "desc" ? (
                                                    <RxCaretDown />
                                                ) : null}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            );
                        })}

                        <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        />
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {data_surat.data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {data.tanggal_naskah}
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {data.nomor_naskah}
                                </td>
                                <td className="whitespace-pre-wrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {data.hal}
                                </td>
                                <td className="whitespace-pre-wrap text-ellipsis py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {data.asal_naskah}
                                </td>
                                <td className="whitespace-pre-wrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {data.uraian_info_berkas}
                                </td>

                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <Link
                                        href={route(editRoute, [data.id])}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="ml-2 text-indigo-600 hover:text-indigo-900"
                                        onClick={() => hapusSurat(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
