import { Card, Heading, Inset, Text } from "@radix-ui/themes";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";

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
                        <div className=" flex flex-row gap-4 w-full bg-zinc-50 h-9 justify-start items-center pl-5">
                            <p>x</p>
                            <p>x</p>
                            <p>x</p>
                            <p>x</p>
                            <p>x</p>
                        </div>
                    </div>
                </div>
            </Inset>
        </Card>
    )
}