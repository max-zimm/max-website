import React, { useState } from "react";
import DownloadButton from "../DownloadButton/DownloadButton";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <Typography
            variant="h10"
            fontWeight="bold"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Resume & Cover Letter
          </Typography>
          <ExpandMoreIcon
            sx={{
              color: "black",
              transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
            <DownloadButton
              fileName={"Cover Letter - Max Zimmer.pdf"}
              buttonText={"Download Cover Letter"}
            />
          </MenuItem>
          <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
            <DownloadButton
              fileName={"Maxwell-Zimmer-Resume.pdf"}
              buttonText={"Download Resume"}
            />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
