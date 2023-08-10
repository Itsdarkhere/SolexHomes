import Link from "next/link";

export default function BottomHeader() {
    return (
        <div className=" w-full bg-white h-20 absolute top-10 left-0">
            <div className=" header h-full w-full flex justify-between items-center pr-5 pl-5">
                <div>
                    <h2>SOLEXHOMES</h2>
                </div>
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