import InputField from "@/Components/FormInputField/InputField";
import { Link, useForm } from "@inertiajs/react";
import { FaUndo } from "react-icons/fa";

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export default function FormInputUpdateSurat({ surat_masuk }) {
    const { data } = useForm({
        tanggal_naskah:
            surat_masuk?.data?.tanggal_naskah || formatDate(new Date()),
        nomor_naskah: surat_masuk?.data?.nomor_naskah || "",
        hal: surat_masuk?.data?.hal || "",
        asal_naskah: surat_masuk?.data?.asal_naskah || "",
        sifat_arsip: surat_masuk?.data?.sifat_arsip || "",
        kode_klasifikasi: surat_masuk?.data?.kode_klasifikasi || "",
        kode_unit: surat_masuk?.data?.kode_unit || "",
        uraian_info_berkas: surat_masuk?.data?.uraian_info_berkas || "",
        tingkat_perkembangan: surat_masuk?.data?.tingkat_perkembangan || "",
        jumlah_halaman_surat: surat_masuk?.data?.jumlah_halaman_surat || 0,
        lokasi: surat_masuk?.data?.lokasi || "",
        masa_aktif: surat_masuk?.data?.masa_aktif || 0,
        masa_inaktif: surat_masuk?.data?.masa_inaktif || 0,
        keterangan: surat_masuk?.data?.keterangan || "",
        jumlah_folder: surat_masuk?.data?.jumlah_folder || 0,
    });

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
                    <form>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <InputField
                                    id="nomor_naskah"
                                    name="nomor_naskah"
                                    label="Nomor Naskah"
                                    formInputType="InputText"
                                    value={data.nomor_naskah}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="tanggal_naskah"
                                    name="tanggal_naskah"
                                    label="Tanggal Naskah"
                                    formInputType="InputText"
                                    value={data.tanggal_naskah}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="kode_klasifikasi"
                                    name="kode_klasifikasi"
                                    label="Kode Klasifikasi"
                                    formInputType="InputText"
                                    value={data.kode_klasifikasi}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="kode_unit"
                                    name="kode_unit"
                                    label="Kode Unit"
                                    formInputType="InputText"
                                    value={data.kode_unit}
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="asal_naskah"
                                    name="asal_naskah"
                                    label="Asal Naskah"
                                    formInputType="InputTextArea"
                                    value={data.asal_naskah}
                                    rows={4}
                                    className="resize-none"
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="hal"
                                    name="hal"
                                    label="Perihal"
                                    formInputType="InputText"
                                    value={data.hal}
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="uraian_info_berkas"
                                    name="uraian_info_berkas"
                                    label="Uraian Informasi Berkas"
                                    formInputType="InputTextArea"
                                    value={data.uraian_info_berkas}
                                    rows={4}
                                    className="resize-none"
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="sifat_arsip"
                                    name="sifat_arsip"
                                    label="Sifat Arsip"
                                    formInputType="InputText"
                                    value={data.sifat_arsip}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="tingkat_perkembangan"
                                    name="tingkat_perkembangan"
                                    label="Tingkat Perkembangan"
                                    formInputType="InputText"
                                    value={data.tingkat_perkembangan}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="lokasi"
                                    name="lokasi"
                                    label="Lokasi"
                                    formInputType="InputText"
                                    value={data.lokasi}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="jumlah_halaman_surat"
                                    name="jumlah_halaman_surat"
                                    label="Jumlah Halaman Surat"
                                    formInputType="InputText"
                                    value={data.jumlah_halaman_surat}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="masa_aktif"
                                    name="masa_aktif"
                                    label="Masa Aktif"
                                    formInputType="InputText"
                                    value={data.masa_aktif}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="masa_inaktif"
                                    name="masa_inaktif"
                                    label="Masa Inaktif"
                                    formInputType="InputText"
                                    value={data.masa_inaktif}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="keterangan"
                                    name="keterangan"
                                    label="Keterangan"
                                    formInputType="InputText"
                                    value={data.keterangan}
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="jumlah_folder"
                                    name="jumlah_folder"
                                    label="Jumlah Folder"
                                    formInputType="InputText"
                                    value={data.jumlah_folder}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end items-center my-2 mx-auto py-4 ">
                            <Link
                                className="flex mr-4 py-2 px-6 border border-blue-500 rounded-lg hover:bg-blue-600 hover:text-white text-sm"
                                href="#"
                                onClick={() => history.back()}
                                // href={route("surat-masuk.index")}
                            >
                                <FaUndo className="mr-2 h-5 w-5" />
                                Kembali
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
