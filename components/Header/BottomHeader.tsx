import Image from "next/image";
import Link from "next/link";
import solexlogo from "../../public/solexlogo.png"

export default function BottomHeader() {
    return (
        <div className=" w-full bg-white h-20 absolute top-10 left-0">
            <div className=" header h-full w-full flex justify-between items-center pr-5 pl-5">
                <Image height={57} src={solexlogo} alt="logo" />
                <div className=" flex gap-5 text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/properties">Properties</Link>
                    <Link href="/whoweare">Who we are</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}