import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex", // Use flexbox to align items side by side
        alignItems: "center", // Vertically center the items
        justifyContent: "center", // Horizontally center the items
        padding: "10PX",
      }}
    >
      {/* Text box */}
      <Box
        sx={{
          width: "550px", // Width of the text box
          height: "450px", // Height of the text box
          backgroundColor: "lightgrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 0, // Adds space between the text box and the image
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "black",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          I'm an entry-level software engineer with a passion for learning and
          solving problems. I’ve worked on projects ranging from automating data
          processes with Python and Azure SQL to working on full stack
          application by building APIs with C# .NET and developing front-end
          with React. Right now, I'm developing "Nexus," a mental health support
          app.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "black",
            marginTop: 2,
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Outside of coding, I love lifting weights and trying out new foods.
          I'm always striving to grow, both mentally and physically!
        </Typography>
      </Box>

      {/* Image box */}
      <Box
        sx={{
          width: "350px", // Ensure it's the same width as the text box
          height: "450px", // Ensure it's the same height as the text box
          backgroundImage: "url('/max-pic.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default AboutMe;
