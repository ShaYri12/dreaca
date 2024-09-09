"use client";
import { Container, Grid, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <div className="bg-white relative">
      <img
        src="/assets/hero-bg.svg"
        alt="Dreaca Mobile Preview"
        className="absolute w-full h-full object-cover"
      />
      <Container className="py-[65px]">
        <Grid container spacing={3} alignItems="center">
          {/* Main Content */}
          <Grid item xs={12} md={12} className="text-center">
            {/* Image Section */}
            <div className="relative inline-block mb-6">
              {/* Add your mobile mockup image */}
              <img
                src="/assets/mobiles.svg"
                alt="Dreaca Mobile Preview"
                className="max-w-[937.52px] xl:w-full lg:w-[800px] md:w-[700px] sm:w-[580px] w-[300px] h-auto mx-auto"
              />
            </div>

            {/* Text Section */}
            <div className="relative z-[2]">
              <Typography
                variant="h3"
                className="text-blackish text-[64px] font-[800] leading-[76.8px] text-black"
              >
                Dreaca is here!
              </Typography>
              <Typography
                variant="h5"
                className="text-blackish text-[32px] leading-[38.4px] font-[500] my-[16px]"
              >
                AI socializing app
              </Typography>

              {/* Store Buttons */}
              <div className="flex flex-wrap justify-center xl:gap-[20px] lg:gap-[16px] gap-[6px]">
                <Button href="https://play.google.com/store" target="_blank">
                  <img
                    className="max-w-[211.43px]"
                    src="/assets/play-store.svg"
                    alt="Google Play"
                  />
                </Button>
                <Button href="https://www.apple.com/app-store/" target="_blank">
                  <img
                    className="max-w-[211.43px]"
                    src="/assets/app-store.svg"
                    alt="App Store"
                  />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
