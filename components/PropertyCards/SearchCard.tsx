import { Box, Card, Inset, Text } from "@radix-ui/themes";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";
import house from "../../public/house.svg"
import bed from "../../public/bed.svg"


export default function SearchCard() {

    return (
        <Card variant="classic">
            <Image src={heroImage} alt="hero" className=" rounded" />
            <div className=" flex flex-col pt-4 pb-2">
                <div className=" h-32 flex flex-col">
                    <Text size="4" weight="bold" className=" pb-1">Sea front 4 bedrooms</Text>
                    <Text size="1">
                        Very spacious sea front property in center of Fuengirola. 
                        Magnificent apartment on the beachfront with frontal sea views, 
                        sixth floor, located on the Paseo Marítimo, right in the center of Fuengirola
                    </Text>
                </div>
                <div className=" flex flex-row justify-between items-center w-full">
                    <Text size="4" weight="bold">589.000 €</Text>
                    <Text size="1">Ref: 110</Text>
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
                </div>
            </Inset>
        </Card>
    )
}