import { Card, Heading, Inset, Text, Box } from "@radix-ui/themes";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";
import house from "../../public/house.svg"
import bed from "../../public/bed.svg"
import bath from "../../public/bathroom.svg"

export default function FeaturedCard() {

    return (
        <Card variant="classic">
            <Inset side="all" pr="0">
                <div className=" w-full h-full flex flex-row">
                    <Image className=" w-1/3 h-full" src={heroImage} alt="house" />
                    <div className=" w-2/3 flex flex-col justify-between">
                        <div className=" pl-5 pt-5 pr-5 flex flex-col">
                            <Heading size="4" as="h5">Compact studio flat close to beach</Heading>
                            <Text weight="regular" size="2" className=" pt-2">
                                Nice renovated soutwest oriented studio for sale at arroy de ma 
                                liel. Walking distance to beach - åaöpma park and arrou center where 
                                you find all ameneities....
                            </Text>
                            <Text weight="bold" size="6" className=" pt-4">110.000 €</Text>
                        </div>
                        <div className=" h-10 flex flex-row mt-4 bg-gray-100">
                            <Box className=" flex flex-row justify-center items-center w-1/3 pr-4 pl-4">
                                <Image height={18} src={house} alt="house" />
                                <Text weight="bold" size="1" className=" pl-1">220 m2</Text>
                            </Box>
                            <Box className=" flex flex-row w-1/6 justify-center items-center pr-4 pl-4">
                                <Image width={16} src={bed} alt="bedroom" />
                                <Text weight="bold" size="1" className=" pl-2">4</Text>
                            </Box>
                            <Box className=" flex flex-row w-1/6 justify-center items-center pr-4 pl-4">
                                <Image height={16} src={bath} alt="bathroom" />
                                <Text weight="bold" size="1" className=" pl-2">3</Text>
                            </Box>
                        </div>
                    </div>
                </div>
            </Inset>
        </Card>
    )
}