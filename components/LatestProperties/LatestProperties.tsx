import { Box, Grid, Heading } from "@radix-ui/themes";
import PropertyCard from "../PropertyCards/PropertyCard";

export default function LatestProperties() {
  return (
    <div className=' w-full main h-auto pt-8 pb-8'>
      <Heading as='h2' size='7'>
        Latest Properties
      </Heading>
      <Grid className=' pt-4' columns='2' gap='4' width='auto'>
        <Box height='auto'>
          <PropertyCard />
        </Box>
        <Box height='auto'>
          <PropertyCard />
        </Box>
        <Box height='auto'>
          <PropertyCard />
        </Box>
        <Box height='auto'>
          <PropertyCard />
        </Box>
      </Grid>
    </div>
  );
}
