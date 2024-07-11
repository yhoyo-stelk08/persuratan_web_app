import InputField from "@/Components/FormInputField/InputField";
import { useForm } from "@inertiajs/react";
import { Button } from "flowbite-react";
import { FaFileCirclePlus } from "react-icons/fa6";

export default function FormInputSurat({ submitRoute }) {
    const { data, setData, post, errors, clearErrors, processing } = useForm({
        tanggal_naskah: "",
        nomor_naskah: "",
        hal: "",
        asal_naskah: "",
        sifat_arsip: "",
        kode_klasifikasi: "",
        kode_unit: "",
        uraian_info_berkas: "",
        tingkat_perkembangan: "",
        jumlah_halaman_surat: 1,
        lokasi: "",
        masa_aktif: 1,
        masa_inaktif: 1,
        keterangan: "",
        jumlah_folder: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route(submitRoute));
    };

    const handleChange = (e, { id }) => {
        clearErrors(id);
        const value = e.target.value;
        setData(id, value || "");
    };

    const handleDateChange = (date) => {
        setData("tanggal_naskah", date);
    };

    // console.log("tanggal naskah: ", data.tanggal_naskah);

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
                                    disabled
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
                                    disabled
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <InputField
                                    id="hal"
                                    name="hal"
                                    label="Perihal"
                                    errorMsg={errors.hal}
                                    required
                                    formInputType="InputTextArea"
                                    onChange={handleChange}
                                    value={data.hal}
                                    rows={4}
                                    className="resize-none"
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
                                        { label: "Asli", value: "Asli" },
                                        { label: "Copy", value: "Copy" },
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
                            <Button
                                type="submit"
                                color="blue"
                                isProcessing={processing}
                            >
                                <FaFileCirclePlus className="mr-2 h-5 w-5" />
                                Register Surat
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
