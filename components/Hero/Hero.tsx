'use client'
import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import { Button, DropdownMenu, Heading, Section } from "@radix-ui/themes";


export default function Hero() {

    return (
        <Section pt="0" pb="0" style={{height: '476px'}} className=" w-full flex flex-row justify-center align-middle">
            <Image className=" w-2/3" src={heroImage} alt="hero" />
            <div className=" h-full w-1/3 bg-neutral-900 p-5 flex flex-col justify-between pt-5 pb-5">
                <Heading size="6" as="h3" className="text-white">Search for properties</Heading>
                <form action="/send-data" method="post" className=" gap-3 pt-5 flex flex-col">
                    <div className=" w-full flex flex-row gap-2.5">
                        <input className=" w-1/2 pl-2 h-10" type="text" placeholder="Reference" name="name" id="name" />
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <button className=" bg-white w-1/2 h-10">Dropdown</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Item</DropdownMenu.Item>
                                <DropdownMenu.Item>Dos</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <button className=" bg-white w-full h-10">Area</button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Item>Dos</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                    <div className=" flex flex-row gap-2">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <button className=" bg-white w-1/2 h-10">Property type</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Item</DropdownMenu.Item>
                                <DropdownMenu.Item>Dos</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <button className=" bg-white w-1/2 h-10">Bedrooms</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Item</DropdownMenu.Item>
                                <DropdownMenu.Item>Dos</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input className=" w-1/2 h-10 pl-2" type="text" placeholder="Price From" name="from" id="from" />
                        <input className=" w-1/2 h-10 pl-2" type="text" placeholder="Price To" name="to" id="to" />
                    </div>
                </form>
                <Button size="4" radius="small">
                    Search
                </Button>
            </div>
        </Section>
    )
}