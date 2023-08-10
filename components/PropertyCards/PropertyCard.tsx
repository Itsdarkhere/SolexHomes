import { Card, Heading, Inset, Text, Box } from "@radix-ui/themes";
import Image from "next/image";          
import heroImage from "../../public/hero.jpg";
import house from "../../public/house.svg"
import bath from "../../public/bathroom.svg"
import bed from "../../public/bed.svg"

export default function PropertyCard() {

    return (
        <Card variant="classic">
            <Heading size="4" as="h5">Compact studio flat close to beach</Heading>
            <div className=" flex pt-2 flex-row gap-4 pb-3">
                <Image className=" w-1/2 h-full rounded-md" src={heroImage} alt="house" />
                <div style={{ height: '100%', width: '50%'}}>
                    <p className=" text-sm">
                        Nice renovated soutwest oriented studio for sale at arroy de ma 
                        liel. Walking distance to beach - åaöpma park and arrou center where 
                        you find all ameneities....
                    </p>
                    <p className=" text-xl font-semibold">110.000 €</p>
                </div>
            </div>
            <Inset>
                <div className=" h-10 flex flex-row mt-4 bg-gray-100">
                    <Box className=" flex flex-row items-center pr-4 pl-4">
                        <Image height={18} src={house} alt="house" />
                        <Text weight="bold" size="1" className=" pl-1">220 m2</Text>
                    </Box>
                    <Box className=" flex flex-row items-center pr-4 pl-4">
                        <Image width={16} src={bed} alt="bedroom" />
                        <Text weight="bold" size="1" className=" pl-2">4</Text>
                    </Box>
                    <Box className=" flex flex-row items-center pr-4 pl-4">
                        <Image height={16} src={bath} alt="bathroom" />
                        <Text weight="bold" size="1" className=" pl-2">3</Text>
                    </Box>
                </div>
            </Inset>
        </Card>
    )
}