import { Grid, Container, Typography, Box, Button } from "@mui/material";

export default function AppShowcase() {
  return (
    <div className="bg-[#E9F5FF] md:py-[120px] py-[50px]">
      <Container>
        {/* Grid container for mobile images and descriptions */}
        <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="center">
          {/* Row 1 */}
          <Grid item xs={12} md={6} className="overflow-hidden">
            <Box className="text-center bg-white rounded-[24px] px-[50px] pt-[50px] h-full w-full">
              <Typography className="font-[400] text-[16px] leading-[24.2px] mb-[50px] text-inter">
                Share your campus life to feel its full pulse on Dreaca
              </Typography>
              <div className="max-h-[493.92px] mt-[84px]">
                <img
                  src="/assets/share-mobiles.svg" // Replace with your image path
                  alt="Mobile App 1"
                  className="w-full h-full mt-auto"
                />
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="overflow-hidden">
            <Box className="text-center bg-white rounded-[24px] px-[50px] pt-[50px] h-full w-full">
              <Typography className="font-[400] text-[16px] leading-[24.2px] mb-[43px] text-inter">
                Climb the ranks! Post events, earn points, and lead your club to
                glory
              </Typography>
              <div className="max-h-[591.1px] h-fit mt-auto">
                <img
                  src="/assets/climb-mobiles.svg" // Replace with your image path
                  alt="Mobile App 1"
                  className="w-full h-full mt-auto"
                />
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={4.5} className="overflow-hidden">
            <Box className="text-center bg-white rounded-[24px] px-[50px] pt-[30px] h-full w-full">
              <Typography className="font-[400] text-[16px] leading-[24.2px] mb-[29px] text-inter">
                Track your subsidiaries with stats
              </Typography>
              <div className="max-h-[520.82px] mt-auto">
                <img
                  src="/assets/track-mobiles.svg"
                  alt="Mobile App 3"
                  className="w-full h-full mt-auto"
                />
              </div>
            </Box>
          </Grid>

          {/* Row 2 */}
          <Grid
            container
            item
            xs={12}
            md={3}
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={12} md={12} className="overflow-hidden">
              <Box className="text-center bg-white rounded-[24px] overflow-hidden pt-[30px] h-full w-full">
                <Typography className="font-[400] text-[16px] leading-[24.2px] mb-[20px] px-[16px] text-inter">
                  Post your updates and let your story shine
                </Typography>
                <div className="flex gap-[10px] w-full">
                  <div className="w-[60%]">
                    <img
                      src="/assets/post-img1.png"
                      alt="Mobile App 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[40%]">
                    <img
                      src="/assets/post-img2.png"
                      alt="Mobile App 4"
                      className="w-full h-full object-cover rounded-tl-lg overflow-hidden"
                    />
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} className="overflow-hidden">
              <Box className="text-center bg-white rounded-[24px] pt-[30px] pb-[27px] h-full w-full">
                <Typography className="font-[400] text-[14px] px-[16px] leading-[24.2px] mb-[16px] text-inter">
                  Share your feedback and shape future events
                </Typography>
                <Button className="text-[16px] leading-[29.5px] px-[16px] font-[600] text-[#00CDE1] mb-[9px]">
                  Send your Feedback
                </Button>
                <img
                  src="/assets/stars.svg"
                  alt="Mobile App 6"
                  className="w-full max-h-[65px] pe-[10px]"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4.5} className="overflow-hidden">
            <Box className="text-center bg-white rounded-[24px] px-[50px] pt-[30px] h-full w-full">
              <Typography className="font-[400] text-[16px] leading-[24.2px] mb-[29px]">
                Chat on campus, connect, spark random conversations
              </Typography>
              <div className="max-h-[520.82px] mt-auto">
                <img
                  src="/assets/chat-mobiles.svg"
                  alt="Mobile App 3"
                  className="w-full h-full mt-auto"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
