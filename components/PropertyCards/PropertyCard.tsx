import { Card, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";          
import heroImage from "../../public/hero.jpg";

export default function PropertyCard() {

    return (
        <Card variant="classic">
            <Heading size="3" as="h5">Compact studio flat close to beach</Heading>
            <div className=" flex pt-2 flex-row gap-2">
                <Image className=" w-1/2 h-full" src={heroImage} alt="house" />
                <div className=" flex flex-col gap-2">
                    <Text weight="regular" size="4">
                        Nice renovated soutwest oriented studio for sale at arroy de ma 
                        liel. Walking distance to beach - åaöpma park and arrou center where 
                        you find all ameneities....
                    </Text>
                    <Text weight="bold" size="7">110.000 €</Text>
                </div>
            </div>
            <div className=" flex flex-row gap-2">
                <p>x</p>
                <p>x</p>
                <p>x</p>
            </div>
        </Card>
    )
}