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
                    <div className=" mb-3">
                        <p className=" text-xl font-semibold">Search performed:</p>
                        <p className=" text-xs">Malaga, Sale</p>
                    </div>
                    <div className=" border-t flex flex-row justify-between mb-6">
                        <div className=" flex flex-row gap-2">
                            <p>X</p>
                            <p>X</p>
                        </div>
                        <div className=" flex flex-row gap-2">
                            <p>Sort by:</p>
                            <p>X</p>
                            <p>X</p>
                        </div>
                    </div>
                    <Grid columns="2" gap="5">
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