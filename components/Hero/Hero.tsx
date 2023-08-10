'use client'
import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import { Button, Select, Heading, Section, Flex, Box } from "@radix-ui/themes";


export default function Hero() {

    return (
        <Section pt="0" pb="0" style={{height: '476px'}} className=" w-full flex flex-row justify-center align-middle">
            <Image className=" w-2/3" src={heroImage} alt="hero" />
            <div className=" h-full w-1/3 bg-neutral-900 p-5 flex flex-col justify-start pt-5 pb-5">
                <Heading size="7" as="h3" className="text-white">Search Properties</Heading>
                <form action="/send-data" method="post" className=" gap-3 pt-5 pb-6 flex flex-col">
                    <div className=" w-full flex flex-row gap-2.5">
                        <input className=" w-1/2 pl-2 h-10 rounded-sm" type="text" placeholder="Reference" name="name" id="name" />
                        <Select.Root size="3">
                            <Select.Trigger className=" w-1/2" radius="small" placeholder="Offer" />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Fruits</Select.Label>
                                    <Select.Item value="orange">Orange</Select.Item>
                                    <Select.Item value="apple">Apple</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </div>
                    <Select.Root size="3">
                        <Select.Trigger radius="small" placeholder="Area" />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>Fruits</Select.Label>
                                <Select.Item value="orange">Orange</Select.Item>
                                <Select.Item value="apple">Apple</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Flex gap="2">
                        <Box className=" w-1/2">
                            <Select.Root size="3">
                                <Select.Trigger className=" w-full" radius="small" placeholder="Property Type" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Fruits</Select.Label>
                                        <Select.Item value="orange">Orange</Select.Item>
                                        <Select.Item value="apple">Apple</Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        </Box>
                        <Box className=" w-1/2">
                            <Select.Root size="3">
                                <Select.Trigger className=" w-full" radius="small" placeholder="Bedrooms" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Fruits</Select.Label>
                                        <Select.Item value="orange">Orange</Select.Item>
                                        <Select.Item value="apple">Apple</Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        </Box>
                    </Flex>
                    <div className="flex flex-row gap-2">
                        <input className=" w-1/2 h-10 pl-2 rounded-sm" type="text" placeholder="Price From" name="from" id="from" />
                        <input className=" w-1/2 h-10 pl-2 rounded-sm" type="text" placeholder="Price To" name="to" id="to" />
                    </div>
                </form>
                <Button size="4" radius="small">
                    Search
                </Button>
            </div>
        </Section>
    )
}