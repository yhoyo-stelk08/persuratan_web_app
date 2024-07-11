import InputField from "@/Components/FormInputField/InputField";
import { Link, useForm } from "@inertiajs/react";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { FaUndo } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export default function FormInputUpdateSurat({ submitRoute, data_surat }) {
    const { data, setData, post, put, errors, clearErrors, processing } =
        useForm({
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
            jumlah_halaman_surat: data_surat?.data?.jumlah_halaman_surat || 1,
            lokasi: data_surat?.data?.lokasi || "",
            masa_aktif: data_surat?.data?.masa_aktif || 1,
            masa_inaktif: data_surat?.data?.masa_inaktif || 1,
            keterangan: data_surat?.data?.keterangan || "",
            jumlah_folder: data_surat?.data?.jumlah_folder || 1,
        });

    // automatically filled the kode_klasifikasi and kode_unit field
    useEffect(() => {
        const parts = data.nomor_naskah.split("/");
        if (parts.length >= 2) {
            const kode_klasifikasi = parts[0];
            const kode_unit = parts[1];
            setData((prevData) => ({
                ...prevData,
                kode_klasifikasi: kode_klasifikasi,
                kode_unit: kode_unit,
            }));
        }
    }, [data.nomor_naskah]);

    // automatically filled the uraian_info_berkas field
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            uraian_info_berkas: `${data.asal_naskah} Nomor: ${data.nomor_naskah} ${data.hal}`,
        }));
    }, [data.nomor_naskah, data.asal_naskah, data.hal]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data_surat) {
            const updateParams =
                submitRoute.split(".")[0] === "surat-masuk"
                    ? "surat_masuk"
                    : "surat_keluar";
            put(route(submitRoute, { [updateParams]: data_surat.data.id }));
        } else {
            post(route(submitRoute));
        }
    };

    const handleChange = (e, { id }) => {
        clearErrors(id);
        const value = e.target.value;
        setData(id, value || "");
    };

    const handleDateChange = (date) => {
        setData("tanggal_naskah", formatDate(date));
    };

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <InputField
                                    id="nomor_naskah"
                                    name="nomor_naskah"
                                    label="Nomor Naskah"
                                    errorMsg={errors.nomor_naskah}
                                    formInputType="InputText"
                                    onChange={handleChange}
                                    value={data.nomor_naskah}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="tanggal_naskah"
                                    name="tanggal_naskah"
                                    label="Tanggal Naskah"
                                    formInputType="InputDate"
                                    onChange={handleDateChange}
                                    value={data.tanggal_naskah}
                                    errorMsg={errors.tanggal_naskah}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="kode_klasifikasi"
                                    name="kode_klasifikasi"
                                    label="Kode Klasifikasi"
                                    errorMsg={errors.kode_klasifikasi}
                                    formInputType="InputText"
                                    onChange={handleChange}
                                    value={data.kode_klasifikasi}
                                    readOnly
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="kode_unit"
                                    name="kode_unit"
                                    label="Kode Unit"
                                    errorMsg={errors.kode_unit}
                                    formInputType="InputText"
                                    onChange={handleChange}
                                    value={data.kode_unit}
                                    readOnly
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="asal_naskah"
                                    name="asal_naskah"
                                    label="Asal Naskah"
                                    errorMsg={errors.asal_naskah}
                                    formInputType="InputTextArea"
                                    onChange={handleChange}
                                    value={data.asal_naskah}
                                    rows={4}
                                    className="resize-none"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="hal"
                                    name="hal"
                                    label="Perihal"
                                    errorMsg={errors.hal}
                                    formInputType="InputText"
                                    onChange={handleChange}
                                    value={data.hal}
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="uraian_info_berkas"
                                    name="uraian_info_berkas"
                                    label="Uraian Informasi Berkas"
                                    errorMsg={errors.uraian_info_berkas}
                                    required
                                    formInputType="InputTextArea"
                                    onChange={handleChange}
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
                                    errorMsg={errors.sifat_arsip}
                                    formInputType="InputSelect"
                                    onChange={handleChange}
                                    value={data.sifat_arsip}
                                    required
                                    options={[
                                        { label: "Biasa", value: "BIASA" },
                                        {
                                            label: "Terbatas",
                                            value: "TERBATAS",
                                        },
                                        { label: "Rahasia", value: "RAHASIA" },
                                    ]}
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="tingkat_perkembangan"
                                    name="tingkat_perkembangan"
                                    label="Tingkat Perkembangan"
                                    errorMsg={errors.tingkat_perkembangan}
                                    formInputType="InputSelect"
                                    onChange={handleChange}
                                    value={data.tingkat_perkembangan}
                                    required
                                    options={[
                                        { label: "Asli", value: "Asli" },
                                        { label: "Copy", value: "Copy" },
                                    ]}
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="lokasi"
                                    name="lokasi"
                                    label="Lokasi"
                                    errorMsg={errors.lokasi}
                                    formInputType="InputText"
                                    onChange={handleChange}
                                    value={data.lokasi}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="jumlah_halaman_surat"
                                    name="jumlah_halaman_surat"
                                    label="Jumlah Halaman Surat"
                                    errorMsg={errors.jumlah_halaman_surat}
                                    formInputType="InputNumber"
                                    onChange={handleChange}
                                    value={data.jumlah_halaman_surat}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="masa_aktif"
                                    name="masa_aktif"
                                    label="Masa Aktif"
                                    errorMsg={errors.masa_aktif}
                                    formInputType="InputNumber"
                                    onChange={handleChange}
                                    value={data.masa_aktif}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="masa_inaktif"
                                    name="masa_inaktif"
                                    label="Masa Inaktif"
                                    errorMsg={errors.masa_inaktif}
                                    formInputType="InputNumber"
                                    onChange={handleChange}
                                    value={data.masa_inaktif}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="keterangan"
                                    name="keterangan"
                                    label="Keterangan"
                                    errorMsg={errors.keterangan}
                                    formInputType="InputSelect"
                                    onChange={handleChange}
                                    value={data.keterangan}
                                    required
                                    options={[
                                        { label: "Musnah", value: "Musnah" },
                                        {
                                            label: "Permanen",
                                            value: "Permanen",
                                        },
                                    ]}
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    id="jumlah_folder"
                                    name="jumlah_folder"
                                    label="Jumlah Folder"
                                    errorMsg={errors.jumlah_folder}
                                    formInputType="InputNumber"
                                    onChange={handleChange}
                                    value={data.jumlah_folder}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end items-center my-2 mx-auto py-4 ">
                            <Link
                                className="flex mr-4 py-2 px-6 border border-blue-500 rounded-lg hover:bg-blue-600 hover:text-white text-sm"
                                href={route("surat-masuk.index")}
                            >
                                <FaUndo className="mr-2 h-5 w-5" />
                                Cancel
                            </Link>
                            <Button
                                type="submit"
                                color="blue"
                                isProcessing={processing}
                            >
                                <FaFileCirclePlus className="mr-2 h-5 w-5" />
                                {data_surat ? "Update Surat" : "Register"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
