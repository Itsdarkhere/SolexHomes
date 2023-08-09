import { Heading } from "@radix-ui/themes";
import heroImage from "../public/hero.jpg";
import Image from "next/image";

export default function HolidayRentals() {

    return (
        <div className=" h-auto w-full p-5">
            <Heading as='h2' size='8'>
                Holiday Rentals
            </Heading>
            <Image className=" pt-5" src={heroImage} alt="Rentals page" />
        </div>
    )
}