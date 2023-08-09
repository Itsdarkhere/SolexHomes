import { Box, Grid, Heading } from "@radix-ui/themes";
import FeaturedCard from "../PropertyCards/FeaturedCard";


export default function FeaturedProperties() {

    return (
        <div className=' w-full h-auto p-5'>
            <Heading as='h2' size='8'>
                Featured Properties
            </Heading>
            <Grid className=' pt-3' columns='1' gap='3' width='auto'>
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