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

export default function FormInputUpdateSurat({ data_surat }) {
    const { data } = useForm({
        tanggal_naskah:
            data_surat?.data?.tanggal_naskah || formatDate(new Date()),
        nomor_naskah: data_surat?.data?.nomor_naskah || "",
        hal: data_surat?.data?.hal || "",
        asal_naskah: data_surat?.data?.asal_naskah || "",
        sifat_arsip: data_surat?.data?.sifat_arsip || "",
        kode_klasifikasi: data_surat?.data?.kode_klasifikasi || "",
        kode_unit: data_surat?.data?.kode_unit || "",
        uraian_info_berkas: data_surat?.data?.uraian_info_berkas || "",
        tingkat_perkembangan: data_surat?.data?.tingkat_perkembangan || "",
        jumlah_halaman_surat: data_surat?.data?.jumlah_halaman_surat || 0,
        lokasi: data_surat?.data?.lokasi || "",
        masa_aktif: data_surat?.data?.masa_aktif || 0,
        masa_inaktif: data_surat?.data?.masa_inaktif || 0,
        keterangan: data_surat?.data?.keterangan || "",
        jumlah_folder: data_surat?.data?.jumlah_folder || 0,
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
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="tanggal_naskah"
                                    name="tanggal_naskah"
                                    label="Tanggal Naskah"
                                    formInputType="InputText"
                                    value={data.tanggal_naskah}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="kode_klasifikasi"
                                    name="kode_klasifikasi"
                                    label="Kode Klasifikasi"
                                    formInputType="InputText"
                                    value={data.kode_klasifikasi}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="kode_unit"
                                    name="kode_unit"
                                    label="Kode Unit"
                                    formInputType="InputText"
                                    value={data.kode_unit}
                                    disabled
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
                                    disabled
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="hal"
                                    name="hal"
                                    label="Perihal"
                                    formInputType="InputText"
                                    value={data.hal}
                                    disabled
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
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="sifat_arsip"
                                    name="sifat_arsip"
                                    label="Sifat Arsip"
                                    formInputType="InputText"
                                    value={data.sifat_arsip}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="tingkat_perkembangan"
                                    name="tingkat_perkembangan"
                                    label="Tingkat Perkembangan"
                                    formInputType="InputText"
                                    value={data.tingkat_perkembangan}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="lokasi"
                                    name="lokasi"
                                    label="Lokasi"
                                    formInputType="InputText"
                                    value={data.lokasi}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="jumlah_halaman_surat"
                                    name="jumlah_halaman_surat"
                                    label="Jumlah Halaman Surat"
                                    formInputType="InputText"
                                    value={data.jumlah_halaman_surat}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="masa_aktif"
                                    name="masa_aktif"
                                    label="Masa Aktif"
                                    formInputType="InputText"
                                    value={data.masa_aktif}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="masa_inaktif"
                                    name="masa_inaktif"
                                    label="Masa Inaktif"
                                    formInputType="InputText"
                                    value={data.masa_inaktif}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="keterangan"
                                    name="keterangan"
                                    label="Keterangan"
                                    formInputType="InputText"
                                    value={data.keterangan}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="jumlah_folder"
                                    name="jumlah_folder"
                                    label="Jumlah Folder"
                                    formInputType="InputText"
                                    value={data.jumlah_folder}
                                    disabled
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
