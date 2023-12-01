import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import chef from "../../static/chef.jpg";
import { CenterFocusStrong, Send as SendIcon } from "@mui/icons-material";
const Rightbar = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Typography variant="h5" align="center" mt={5}>
        HEY I'M ADITI
      </Typography>
      <CardMedia
        // component={"img"}
        height="150px"
        // image={chef}
        // alt="burger_image"
        sx={{
          width: "300px",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
            textAlign: "Center"
            
          },
        }}
      />
      <Typography align="left" variant="body1">
        {" "}
        I love to sing and cook! My best time spent around the Table.{" "}
      </Typography>
      <Typography align="left" variant="body1">
        {" "}
        Don't forget to Check out our Popular recipes! <br />{" "}
        <a href="https://www.google.com/">Read More</a>
      </Typography>
      <Card sx={{ height: "100px", marginTop: 2 }}>
        {/* <Typography align="center" variant="body1">
          Ads Here
        </Typography> */}
      </Card>
      <Typography align="center" color="white" bgcolor="#734060" mt={2}>
        Subscribe Via Email
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your Email here!"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "sleetblue" }} />
        </IconButton>
      </Box>
      {/* <Card sx={{ height: "200px", marginTop: 2 }}>
         <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card> */}
    </Box>
  );
};

export default Rightbar;
