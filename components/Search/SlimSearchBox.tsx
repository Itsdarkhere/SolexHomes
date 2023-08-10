'use client'
import { Button, Box, Flex } from "@radix-ui/themes";
import CustomSelect from "../CustomSelect";

export default function SlimSearchBox() {

    return (
        <div className=" border">
            <div className=" bg-neutral-200">
                <p className=" p-3">Search</p>
            </div>
            <form className=" flex flex-col gap-2 p-3">
                <input className=" bg-neutral-100 pl-1 border" type="text" placeholder="Reference" />
                <CustomSelect classes=" w-full" />
                <CustomSelect classes=" w-full" />
                <CustomSelect classes=" w-full" />
                <Flex>
                    <Box className=" w-1/2">
                        <CustomSelect classes=" w-full" />
                    </Box>
                    <Box className=" w-1/2">
                        <CustomSelect classes=" w-full" />
                    </Box>
                </Flex>
                <p>Area (m2)</p>
                <div className=" flex flex-row gap-2">
                    <input className=" rounded-sm bg-neutral-100 pl-1 border w-1/2" type="text" placeholder="From" />
                    <input className=" rounded-sm bg-neutral-100 pl-1 border w-1/2" type="text" placeholder="To" />
                </div>
                <p>Price</p>
                <div className=" flex flex-row gap-2 pb-2">
                    <input className=" rounded-sm bg-neutral-100 pl-1 border w-1/2" type="text" placeholder="From" />
                    <input className=" rounded-sm bg-neutral-100 pl-1 border w-1/2" type="text" placeholder="To" />
                </div>
                <Button size="4" radius="small">Search</Button>
            </form>
        </div>
    )
}