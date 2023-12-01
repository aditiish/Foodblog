import { Box, Container, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  // const MenuItems = [
  //   { Name: "Home" ,Link: "/home" },
  //   { Name: "About Us", Link: "/about" },
  //   { Name: "Latest Recipes", Link: "/latest" },
  //   { Name: "Popular Recipes", Link: "/popular" },
  //   { Name: "Contact Us", Link: "/contact" },
  // ];
  return (
    <Box sx={{ bgcolor: "#734060", height: "200px" }}>
      <Container>
        <Stack direction={"row"}>
          {/* <MenuBox flex={2} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body2" color={"white"}>
                {item.Name}
              </Typography>
            ))}
          </MenuBox> */}
          <Box flex={1} color={"white"} mt={1}  >
            ©2023 BBQ FOOD HUB! 
          </Box>
        </Stack>
        <Typography variant="h4" align="center" mt={8} color={"white"} fontFamily={ "splash"}>
          Simple Recipes made for real, actual, everyday Life!
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
