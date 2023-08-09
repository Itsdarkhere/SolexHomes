import { Box, Grid, Heading } from "@radix-ui/themes";
import PropertyCard from "../PropertyCards/PropertyCard";

export default function LatestProperties() {
  return (
    <div className=' w-full h-auto p-5'>
      <Heading as='h2' size='8'>
        Latest Properties
      </Heading>
      <Grid className=' pt-3' columns='2' gap='3' width='auto'>
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
