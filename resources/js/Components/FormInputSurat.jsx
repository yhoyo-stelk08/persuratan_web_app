import {
    Button,
    Datepicker,
    Label,
    Select,
    TextInput,
    Textarea,
} from "flowbite-react";
import { FaFileCirclePlus } from "react-icons/fa6";

export default function FormInputSurat() {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
                    <form>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <Label
                                    htmlFor="nomor_naskah"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nomor Naskah
                                </Label>
                                <TextInput
                                    name="nomor_naskah"
                                    id="nomor_naskah"
                                    placeholder="Nomor Naskah"
                                    required=""
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="tanggal_naskah"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Tanggal Naskah
                                </Label>
                                <Datepicker
                                    id="tanggal_naskah"
                                    name="tanggal_naskah"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <Label
                                    htmlFor="kode_klasifikasi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Kode Klasifikasi
                                </Label>
                                <TextInput
                                    name="kode_klasifikasi"
                                    id="kode_klasifikasi"
                                    placeholder="Kode Klasifikasi"
                                    required=""
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <Label
                                    htmlFor="kode_unit"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Kode Unit
                                </Label>
                                <TextInput
                                    name="kode_unit"
                                    id="kode_unit"
                                    placeholder="Kode Unit"
                                    required=""
                                    disabled
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label
                                    htmlFor="hal"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Perihal
                                </Label>
                                <Textarea
                                    name="hal"
                                    id="hal"
                                    placeholder="Perihal"
                                    rows={4}
                                    required
                                    className="resize-none"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="sifat_arsip"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Sifat Arsip
                                </Label>
                                <Select
                                    id="sifat_arsip"
                                    name="sifat_arsip"
                                    required
                                >
                                    <option value="">Pilih Kategori</option>
                                    <option value="BIASA">Biasa</option>
                                    <option value="TERBATAS">Terbatas</option>
                                    <option value="RAHASIA">Rahasia</option>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="tingkat_perkembangan"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Tingkat Perkembangan
                                </Label>
                                <Select
                                    id="tingkat_perkembangan"
                                    name="tingkat_perkembangan"
                                    required
                                >
                                    <option value="">Pilih Kategori</option>
                                    <option value="Asli">Asli</option>
                                    <option value="Copy">Copy</option>
                                </Select>
                            </div>
                            <div className="sm:col-span-2">
                                <Label
                                    htmlFor="lokasi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Lokasi
                                </Label>
                                <TextInput
                                    name="lokasi"
                                    id="lokasi"
                                    placeholder="Lokasi"
                                    required=""
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label
                                    htmlFor="uraian_info_berkas"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Uraian Informasi Berkas
                                </Label>
                                <Textarea
                                    id="uraian_info_berkas"
                                    name="uraian_info_berkas"
                                    rows={4}
                                    className="resize-none"
                                    placeholder="Urian Infomasi Berkas"
                                    disabled
                                ></Textarea>
                            </div>
                            <div className="w-full">
                                <Label
                                    htmlFor="masa_aktif"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Masa Aktif
                                </Label>
                                <TextInput
                                    type="number"
                                    name="masa_aktif"
                                    id="masa_aktif"
                                    placeholder="Masa Aktif"
                                    required=""
                                    defaultValue={1}
                                />
                            </div>
                            <div className="w-full">
                                <Label
                                    htmlFor="masa_inaktif"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Masa Inaktif
                                </Label>
                                <TextInput
                                    type="number"
                                    name="masa_inaktif"
                                    id="masa_inaktif"
                                    placeholder="Masa Inaktif"
                                    required=""
                                    defaultValue={1}
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="keterangan"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Keterangan
                                </Label>
                                <Select
                                    id="keterangan"
                                    name="keterangan"
                                    required
                                >
                                    <option value="">Pilih Kategori</option>
                                    <option value="Musnah">Musnah</option>
                                    <option value="Permanen">Permanen</option>
                                </Select>
                            </div>
                            <div className="w-full">
                                <Label
                                    htmlFor="jumlah_folder"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Jumlah Folder
                                </Label>
                                <TextInput
                                    type="number"
                                    name="jumlah_folder"
                                    id="jumlah_folder"
                                    placeholder="Jumlah Folder"
                                    required=""
                                    defaultValue={1}
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end items-center my-2 mx-auto py-4 ">
                            <Button type="submit" color="blue">
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
