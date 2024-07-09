import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function DaftarSurat({ auth, data_surat }) {
    console.log(data_surat);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Surat
                </h2>
            }
        >
            <Head title="Daftar Surat" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Daftar Surat</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
