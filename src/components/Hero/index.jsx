import React from "react"
import Box from "@mui/material/Box"
import "./hero.css"

function Hero() {
  return (
    <Box
      className="HeroContainer"
      sx={{
        background: "linear-gradient(315deg, #ddd7cd, #fffff4)",
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        padding: "24px",
      }}
    >
      <Box
        sx={{
          height: "80%",
          width: "50%",
        }}
        className="hero"
      >
        <h1 className="title">Dulce Hogar </h1>
      </Box>
    </Box>
  )
}

export default Hero
