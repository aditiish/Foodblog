import React, { useState } from "react";
import {
  AppBar,
  Button,
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PostSearch from "../search/PostSearch";
import { useAuth0 } from "@auth0/auth0-react";
import { CenterFocusStrong, CenterFocusStrongSharp } from "@mui/icons-material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';




const styles = {
  root: { style:{color: "#ffffff"},}}

const Navbar = () => {
  const { loginWithRedirect , isAuthenticated , user} = useAuth0();
  const { logout } = useAuth0();

  const StyledToolbar = styled(Toolbar)({
    position: "auto",
    height : "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#734060",
    color : "white",
    textDecoration: "none",
    
  });
 
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
    variant: "h1",
    textdecoration: "none"
  });

  const MenuItems = [
    { Name: "Home" ,Link: "/home" },
    { Name: "About Us", Link: "/about" },
    { Name: "Latest Recipes", Link: "/latest" },
    { Name: "Popular Recipes", Link: "/popular" },
    { Name: "Contact Us", Link: "/contact" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <AppBar color="" position="sticky" elevation={1}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Link href="http://localhost:3000/" sx={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                color={"white"}        
                sx={{
                  fontFamily: "splash" ,
                  textAlign: { xs: "center", md: "left" },
                  marginLeft : "50px",
                  
                }}
              >
               BBQ Food Hub
              </Typography>
            </Link>
          </Box>
          <MenuBox flex={1} textDecoration= "none" sx={{ display: { xs: "none", md: "flex", } }}>
           {MenuItems.map((menuItem, index) => (
          <Button key={index} color="inherit"  textDecoration= "none">
            <Link href={menuItem.Link} color="inherit" textDecoration= "inherit" >
              {menuItem.Name }
            </Link>
          </Button>
        ))} 
        
          </MenuBox>
          <Box flex={1}>
        <div style={{  textAlign : "end"}}>
          {isAuthenticated ? 
          (<button variant="text" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><Typography backgroundColor={"#dcdcdc"} sx={{fontFamily: "serif",backgroundColor : "#734060" , color:"white",width:"100px" , height:"40px",textAlign : "center"}}>Log Out </Typography></button> )
          :
          (<button variant="text"  onClick={() => loginWithRedirect()}><Typography sx={{fontFamily: "serif" , backgroundColor : "#734060" , color:"white",width:"100px" , height:"40px", textAlign : "center"}} size="large">  LOG IN   </Typography></button>)}
  
      </div>
      <PostSearch />
            <MenuIcon 
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
         
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                
                <ListItemButton sx={{ textDecoration: "none" }} >{item.Name}</ListItemButton>
              ))}
            </ListItem>
       
          </List>
          
          <PostSearch />
          
          
        </Drawer>
      
      {/* {isAuthenticated ? (<button variant="text" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><Typography backgroundColor={"#dcdcdc"} sx={{fontFamily: "serif"}}>Log Out❌ </Typography></button> )
      :(<button variant="text"  onClick={() => loginWithRedirect()}><Typography backgroundColor={"#dcdcdc"} sx={{fontFamily: "serif"}} size="large"> ❤️ Our Recipes, Your Inbox.      SIGN UP ➡️  </Typography></button>)} */}
    
   
      </AppBar>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          padding:"0.1px",
        }}
      >
        {/* <Typography align="center" variant="h5" mr={{ xs: 0, md: 1 }}>
          
        </Typography> */}
        <div>
        <Typography
          padding={"1px"}
          height={"60px"}
          variant={"h4"}
          color={"#734060"}
          marginTop={"20px"}
          marginBottom={"0.1px"}
          sx={{
                  fontFamily: "splash,cursive" ,
                  textAlign: { xs: "center", md: "left" },
                }}
        >
          Simple Recipes made for Foodies!
         </Typography> 
           
    </div>
      </Box>
      
    </>
  );
};

export default Navbar;