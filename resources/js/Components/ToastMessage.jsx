import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ToastMessage() {
    const page = usePage();

    useEffect(() => {
        if (page.props?.message && page.props.message.length !== 0) {
            toast(page.props.message.body, {
                position: "top-right",
                type: page.props.message.type,
                duration: 2000,
            });
        }
    }, [page.props.message]);

    return (
        <>
            <Toaster />
        </>
    );
}
