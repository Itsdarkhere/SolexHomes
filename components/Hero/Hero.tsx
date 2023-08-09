'use client'
import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import { DropdownMenu } from "@radix-ui/themes";


export default function Hero() {

    return (
        <div className=" w-full h-96 flex flex-row justify-center align-middle">
            <Image className=" w-2/3" src={heroImage} alt="hero" />
            <div className=" h-full w-1/3 bg-green-400 p-2">
                <form action="/send-data" method="post" className=" gap-3 flex flex-col">
                    <div className=" w-full flex flex-row gap-2.5">
                        <input className=" w-1/2" type="text" placeholder="Reference" name="name" id="name" />
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <button className=" bg-white w-1/2">Dropdown</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Item</DropdownMenu.Item>
                                <DropdownMenu.Item>Dos</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <button className=" bg-white w-full">Area</button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Item>Dos</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                    <div className=" flex flex-row gap-2">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <button className=" bg-white w-1/2">Property type</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Item</DropdownMenu.Item>
                                <DropdownMenu.Item>Dos</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <button className=" bg-white w-1/2">Bedrooms</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Item</DropdownMenu.Item>
                                <DropdownMenu.Item>Dos</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input className=" w-1/2" type="text" placeholder="Price From" name="from" id="from" />
                        <input className=" w-1/2" type="text" placeholder="Price To" name="to" id="to" />
                    </div>
                    <button className=" w-full h-10 bg-red-300">Search</button>
                </form>
            </div>
        </div>
    )
}