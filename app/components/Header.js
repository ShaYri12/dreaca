"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "@mui/material";
import Image from "next/image";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Use 'md' for medium devices
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#00CDE1" }}>
        <Toolbar
          sx={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Left Side - Logo */}
          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Image width={48} height={48} src="/assets/logo.svg" />
          </Box>

          {/* Right Side - Buttons or Menu Icon */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Link
                href="/about-us"
                className="no-underline	text-inter"
                p={"16px"}
                sx={{ color: "#fff" }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="no-underline	text-inter"
                p={"16px"}
                sx={{ color: "#fff" }}
              >
                Contact
              </Link>
              <Button
                variant="outlined"
                className="rounded-[12px]  font-[500] leading-[21.78px] text-inter"
                sx={{
                  color: "#fff",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  width: "112px",
                  borderColor: "#fff",
                  radius: "12px",
                  mr: 1,
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                className="rounded-[12px]  font-[500] leading-[21.78px] text-inter"
                sx={{
                  backgroundColor: "#fff",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  width: "112px",
                  color: "#000",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
              >
                Register
              </Button>
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="About Us" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
