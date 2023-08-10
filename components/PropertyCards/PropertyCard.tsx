import { Card, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";          
import heroImage from "../../public/hero.jpg";

export default function PropertyCard() {

    return (
        <Card variant="classic">
            <Heading size="4" as="h5">Compact studio flat close to beach</Heading>
            <div className=" flex pt-2 flex-row gap-4 pb-3">
                <Image className=" w-1/2 h-full rounded-md" src={heroImage} alt="house" />
                <div className=" flex flex-col gap-2 w-1/2 overflow-hidden h-full">
                    <Text weight="regular" size="2" className="overflow-hidden h-20">
                        Nice renovated soutwest oriented studio for sale at arroy de ma 
                        liel. Walking distance to beach - åaöpma park and arrou center where 
                        you find all ameneities....
                    </Text>
                    <Text weight="bold" size="6">110.000 €</Text>
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