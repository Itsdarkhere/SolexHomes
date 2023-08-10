import { Box, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import Link from "next/link";


export default function Footer() {
    
    return (
        <Section pb="5" className=" footer pt-5 flex flex-col text-black">
            <Box className=" flex flex-row border-b-gray-500 pb-4 border-b">
                <Box className=" w-1/3 flex flex-col">
                    <Heading size="6" as="h2" className=" pb-4">Contact</Heading>
                    <Text className=" text-xs">Calle jecinto Benavente</Text>
                    <Text className=" text-xs">29601 Marbella</Text>
                    <Text className=" text-xs">Malaga</Text>
                </Box>
                <Image className=" w-1/3" src={heroImage} alt="logo" />
                <Box className=" w-1/3 flex flex-col items-end">
                    <Heading size="6" as="h2" className=" pb-4">FOLLOW US</Heading>
                    <Box className=" flex flex-col">
                        <Text className=" text-xs">X</Text>
                        <Text className=" text-xs">X</Text>
                        <Text className=" text-xs">X</Text>
                        <Text className=" text-xs">X</Text>
                    </Box>
                </Box>
            </Box>
            <Box className=" flex flex-row justify-between gap-4 pt-4">
                <Text className=" text-xs">Copyright @ 2023. All rights reserved.</Text>
                <Box className="flex flex-row gap-2 text-xs">
                    <Link href="/legal">Legal Info</Link>
                    <Link href="/Privacy">Privacy Policy</Link>
                    <Link href="/cookies">Cookies Policy</Link>
                </Box>
            </Box>
        </Section>
    )
}