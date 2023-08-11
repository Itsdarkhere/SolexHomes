import CustomSelect from "@/components/CustomSelect";
import FollowUsBox from "@/components/FollowUsBox";
import SearchCard from "@/components/PropertyCards/SearchCard";
import SlimSearchBox from "@/components/Search/SlimSearchBox";
import { Grid } from "@radix-ui/themes";

export default function Properties() {
    return (
        <div className="">
            <div className=" h-14 bg-neutral-100 w-full left-0 top-0 flex justify-center ">
                <div className="header flex flex-row justify-between items-center">
                    <p className=" text-xl font-semibold">Properties on the Costa del Sol</p>
                    <p className=" text-sm">Browsing: 1-10 of 10</p>
                </div>
            </div>
            <div className="main flex flex-row pt-7 pb-7">
                <div className=" w-3/4 flex flex-col pr-3 pl-3">
                    <div className=" mb-3 pb-3 flex border-b flex-row justify-between">
                        <div>
                            <p className=" text-xl font-semibold">Search performed:</p>
                            <p className=" text-xs">Malaga, Sale</p>
                        </div>
                        <div className=" flex flex-row gap-2">
                            <p className=" flex items-center text-xs">Sort by:</p>
                            <CustomSelect classes="" />
                        </div>
                    </div>
                    <Grid columns="2" gap="5" className=" border-b-2 pb-4">
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                    </Grid>
                </div>
                <div className=" w-1/4 flex flex-col pr-3 pl-3 gap-3">
                    <SlimSearchBox />
                    <div>Facebookbox</div>
                    <FollowUsBox />
                </div>
            </div>
        </div>
    )
}