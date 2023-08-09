import { Box, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import Link from "next/link";


export default function Footer() {
    
    return (
        <Section className=" p-5 flex flex-col">
            <Box className=" flex flex-row border-b-gray-500 pb-4 border-b">
                <Box className=" w-1/3 flex flex-col">
                    <Heading size="8" as="h2">Contact</Heading>
                    <Text>Calle jecinto Benavente</Text>
                    <Text>29601 Marbella</Text>
                    <Text>Malaga</Text>
                </Box>
                <Image className=" w-1/3" src={heroImage} alt="logo" />
                <Box className=" w-1/3 flex flex-col items-end">
                    <Heading size="8" as="h2">FOLLOW US</Heading>
                    <Box>
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                    </Box>
                </Box>
            </Box>
            <Box className=" flex flex-row gap-4 pt-4">
                <Text>Copyright @ 2023. All rights reserved.</Text>
                <Box className="flex flex-row gap-2">
                    <Link href="/legal">Legal Info</Link>
                    <Link href="/Privacy">Privacy Policy</Link>
                    <Link href="/cookies">Cookies Policy</Link>
                </Box>
            </Box>
        </Section>
    )
}