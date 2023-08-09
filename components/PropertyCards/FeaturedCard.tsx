import { Card, Heading, Text } from "@radix-ui/themes";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";

export default function FeaturedCard() {

    return (
        <Card variant="classic">
            <div className=" flex flex-row gap-2">
                <Image className=" w-1/3 h-full" src={heroImage} alt="house" />
                <div className=" flex flex-col gap-2">
                    <Heading size="4" as="h5">Compact studio flat close to beach</Heading>
                    <Text weight="regular" size="4">
                        Nice renovated soutwest oriented studio for sale at arroy de ma 
                        liel. Walking distance to beach - åaöpma park and arrou center where 
                        you find all ameneities....
                    </Text>
                    <Text weight="bold" size="7">110.000 €</Text>
                    <div className=" flex flex-row gap-4 w-full bg-gray-200 justify-center">
                        <p>x</p>
                        <p>x</p>
                        <p>x</p>
                        <p>x</p>
                        <p>x</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}