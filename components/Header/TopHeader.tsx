
export default function TopHeader() {
    return (
        <div className=" text-red-200 bg-zinc-50 h-10 w-full absolute top-0 left-0">
            <div className=" header w-full h-full flex flex-row justify-between align-middle pr-5 pl-5">
                <div className=" flex flex-row gap-4 items-center justify-center text-xs text-black">
                    <p>+34 694 413 269</p>
                    <p>solexhomes@gmail.com</p>
                </div>
                <div className=" flex flex-row items-center gap-2 text-xs text-black">
                    <p>X</p>
                    <p>X</p>
                    <p>X</p>
                    <p>X</p>
                    <p>X</p>
                </div>
            </div>
        </div>
    )
}