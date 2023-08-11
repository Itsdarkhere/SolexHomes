import Map from "@/components/Map";
import { Text } from "@radix-ui/themes";


export default function Contact() {
    return (
        <div className="">
            <div className=" h-14 bg-neutral-100 w-full left-0 top-0 flex justify-center ">
                <div className="header flex flex-row justify-between items-center">
                    <p className=" text-xl font-semibold">Contact</p>
                    <p className=" text-sm">Home / Contact</p>
                </div>
            </div>
            <div className=" w-full h-96">
                <Map />
            </div>
            <div className=" main flex flex-row pt-7 pb-7">
                <div className=" flex flex-col w-3/5">
                    <Text size="5" weight="bold">Contact us</Text>
                </div>
                <div className=" flex flex-col w-2/5">
                    <Text size="5" weight="bold">Visit us</Text>
                    <Text size="3" weight="bold">Solex Homes</Text>
                </div>
            </div>
        </div>
    )
}