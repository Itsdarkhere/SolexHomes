import { Heading } from "@radix-ui/themes";
import heroImage from "../public/hero.jpg";
import Image from "next/image";
import solex from "../public/solex.png"

export default function HolidayRentals() {

    return (
        <div className=" h-auto main w-full pt-8 pb-8">
            <Heading as='h2' size='7'>
                Holiday Rentals
            </Heading>
            <Image className=" pt-4 rounded-md" src={solex} alt="Rentals page" />
        </div>
    )
}