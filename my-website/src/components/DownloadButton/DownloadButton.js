// src/components/DownloadButton/DownloadButton.js

import React from "react";
import Button from "@mui/material/Button";

const DownloadButton = ({ fileName, buttonText }) => {
  const handleDownload = () => {
    // Trigger the download of the PDF file
    window.open(`/${fileName}`, "_blank");
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      sx={{ backgroundColor: "lightgrey", color: "black" }}
    >
      {buttonText}
    </Button>
  );
};

export default DownloadButton;
