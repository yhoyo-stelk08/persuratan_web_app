import FormInputUpdateSurat from "@/Components/FormInputUpdateSurat";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function EditSuratMasuk({ auth, data_surat }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Surat Masuk
                </h2>
            }
        >
            <Head title="Update Surat Masuk" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <FormInputUpdateSurat
                                submitRoute={"surat-masuk.update"}
                                data_surat={data_surat}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
