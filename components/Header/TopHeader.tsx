import { Box } from "@radix-ui/themes"
import Image from "next/image"
import phone from "../../public/phone.svg"
import mail from "../../public/mail.svg"
import youtube from "../../public/youtube.svg"
import gram from "../../public/gram.svg"
import fb from "../../public/fb.svg"
import whatsapp from "../../public/whatsapp.svg"

export default function TopHeader() {
    return (
        <div className=" text-red-200 bg-zinc-50 h-10 w-full absolute top-0 left-0">
            <div className=" header w-full h-full flex flex-row justify-between align-middle pr-5 pl-5">
                <div className=" flex flex-row gap-2 items-center justify-center text-xs text-black">
                    <Box className=" flex flex-row items-center gap-1">
                        <Image height={10} src={phone} alt="phone" />
                        <p>+34 694 413 269</p>
                    </Box>
                    <Box className=" border-l border-black pl-2 flex flex-row items-center gap-1">
                        <Image height={16} src={mail} alt="mail" />
                        <p>solexhomes@gmail.com</p>
                    </Box>
                </div>
                <div className=" gap-5 flex flex-row items-center gap-2 text-xs text-black">
                    <Image height={18} src={whatsapp} alt="whatsapp" />
                    <Image height={18} src={fb} alt="facebook" />
                    <Image height={18} src={gram} alt="instagram" />
                    <Image height={18} src={youtube} alt="youtube" />
                </div>
            </div>
        </div>
    )
}