import { Box, Grid, Heading } from "@radix-ui/themes";
import FeaturedCard from "../PropertyCards/FeaturedCard";


export default function FeaturedProperties() {

    return (
        <div className=' w-full main h-auto pt-8 pb-8'>
            <Heading as='h2' size='7'>
                Featured Properties
            </Heading>
            <Grid className=' pt-4' columns='1' gap='6' width='auto'>
                <Box height='auto'>
                    <FeaturedCard />
                </Box>
                <Box height='auto'>
                    <FeaturedCard />
                </Box>
            </Grid>
        </div>
    )
}