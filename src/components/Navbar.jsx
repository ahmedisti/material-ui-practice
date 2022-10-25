import styled from "@emotion/styled";
import { HdrAuto, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from "@mui/material";
// import { borderRadius } from "@mui/system";
import React from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  //   borderRadius: theme.shape.borderRadius
  borderRadius: "5px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      {" "}
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Ahmed
        </Typography>
        <HdrAuto sx={{ display: { xs: "block", sm: "none" } }} />{" "}
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
            <Badge badgeContent={4} color="error">
  <Mail />
</Badge>
<Badge badgeContent={4} color="error">
  <Notifications />
</Badge>
<Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
