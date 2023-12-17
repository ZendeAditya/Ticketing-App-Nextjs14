"use client";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
const DeleteBlock = ({ id }) => {
    const router = useRouter();
    const delelteTicket = async () => {
        const res = await fetch(`http://127.0.0.1:3000/api/Tickets/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            router.refresh()
        }
    }
    return (
        <>
            <div className="text-red-600 hover:cursor-pointer hover:text-red-200 font-bold" onClick={delelteTicket}>
                <RxCross1 size={30} />
            </div>
        </>
    )
}

export default DeleteBlock;