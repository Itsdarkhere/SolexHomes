import Link from "next/link";

export default function BottomHeader() {
    return (
        <div className=" w-full bg-red-300 h-14 absolute top-10 left-0">
            <div className=" h-full w-full p-5 flex justify-between align-middle">
                <div>
                    <h2>SOLEXHOMES</h2>
                </div>
                <div className=" flex gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/properties">Properties</Link>
                    <Link href="/whoweare">Who we are</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}