// src/components/Header.js

import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box style={{ paddingTop: "5vh" }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Hi, I'm</Typography>
        <Typography variant="h3" fontWeight="bold">
          Maxwell Zimmer
        </Typography>
        <Typography variant="h5" color="textSecondary">
          An Entry-Level Software Engineer and constant learner.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Header;
