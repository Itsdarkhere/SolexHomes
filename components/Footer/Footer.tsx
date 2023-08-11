import { Box, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import solexlogo from "../../public/solexlogo2.png";
import Link from "next/link";
import location from "../../public/location.svg";
import phone from "../../public/phone.svg";
import mail from "../../public/mail.svg";
import fb from "../../public/fb.svg"
import youtube from "../../public/youtube.svg"
import gram from "../../public/gram.svg"
import whatsapp from "../../public/whatsapp.svg"

export default function Footer() {
    
    return (
        <Section pb="5" className=" footer pt-5 flex flex-col text-black">
            <Box className=" flex flex-row border-b-gray-500 pb-4 border-b">
                <Box className=" w-1/3 flex flex-col">
                    <Heading size="6" as="h2" className=" pb-4">Contact</Heading>
                    <Box className=" flex flex-row items-start">
                        <Image width={8} src={location} alt="location" className=" pt-1" />
                        <Text className=" text-xs pl-1">
                            Calle Jacinto Benavente, <br/> Nº 429640 Fuengirola (Málaga)
                        </Text>
                    </Box>
                    <Box className=" flex flex-row">
                        <Image width={10} src={phone} alt="phone" />
                        <Text className=" text-xs pl-1">+34  694 413 269</Text>
                    </Box>
                    <Box className=" flex flex-row">
                        <Image width={14} src={mail} alt="email" />
                        <Text className=" text-xs pl-1">solexhomes@gmail.com</Text>
                    </Box>
                </Box>
                <Box className=" w-1/3">
                    <Image style={{maxWidth: 390, maxHeight: 200}} src={solexlogo} alt="logo" />
                </Box>
                <Box className=" w-1/3 flex flex-col items-end">
                    <Heading size="6" as="h2" className=" pb-4">FOLLOW US</Heading>
                    <Box className=" flex flex-row gap-3">
                        <Image height={24} src={whatsapp} alt="whatsapp" />
                        <Image height={24} src={fb} alt="facebook" />
                        <Image height={24} src={gram} alt="instagram" />
                        <Image height={24} src={youtube} alt="youtube" />
                    </Box>
                </Box>
            </Box>
            <Box className=" flex flex-row justify-between gap-4 pt-4">
                <Text className=" text-xs">Copyright @ 2023. All rights reserved.</Text>
                <Box className="flex flex-row gap-1 text-xs text-orange-300 underline">
                    <Link href="/legal">Legal Info</Link>
                    <Link href="/privacy" className=" border-l pl-1 border-black">Privacy Policy</Link>
                    <Link href="/cookies" className=" border-l pl-1 border-black">Cookies Policy</Link>
                </Box>
            </Box>
        </Section>
    )
}