import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
//import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { useStaticQuery, graphql } from "gatsby"
import "./hero.css"

function Hero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
      brownie: file(relativePath: { eq: "brownie.png" }) {
        extension
        publicURL
      }
      applePie: file(relativePath: { eq: "applePie.png" }) {
        extension
        publicURL
      }
    }
  `)
  console.log(data.brownie.publicURL)
  return (
    <Box
      className="Container"
      sx={{
        background:
          "radial-gradient(at bottom right, #f5efe4 0, #f5efe4 2.5px, rgba(245,239,228,0.2) 2.5px, rgba(245,239,228,0.2) 5px, rgba(245,239,228,0.75) 5px, rgba(245,239,228,0.75) 7.5px, rgba(245,239,228,0.25) 7.5px, rgba(245,239,228,0.25) 10px, rgba(245,239,228,0.3) 10px, rgba(245,239,228,0.3) 12.5px, rgba(245,239,228,0.75) 12.5px, rgba(245,239,228,0.75) 15px, rgba(245,239,228,0.2) 15px, rgba(245,239,228,0.2) 17.5px, transparent 17.5px, transparent 20px), radial-gradient(at top left, transparent 0, transparent 2.5px, rgba(245,239,228,0.2) 2.5px, rgba(245,239,228,0.2) 5px, rgba(245,239,228,0.75) 5px, rgba(245,239,228,0.75) 7.5px, rgba(245,239,228,0.3) 7.5px, rgba(245,239,228,0.3) 10px, rgba(245,239,228,0.25) 10px, rgba(245,239,228,0.25) 12.5px, rgba(245,239,228,0.75) 12.5px, rgba(245,239,228,0.75) 15px, rgba(245,239,228,0.2) 15px, rgba(245,239,228,0.2) 17.5px, #f5efe4 17.5px, #f5efe4 20px, transparent 20px, transparent 50px)",
        backgroundBlendMode: "multiply",
        backgroundSize: "20px 20px, 20px 20px",
        backgroundColor: "#87521f",
      }}
    >
      <Box
        className="HeroContainer"
        sx={{
          background: "linear-gradient(315deg, #ddd7cd, #fffff4)",
          width: "100%",
          height: "93vh",
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          padding: "24px",
        }}
      >
        <Grid container xs={12}>
          <Grid item xs={6}>
            {" "}
            <Box
              sx={{
                height: "80%",
                width: "100%",
                padding: "24px",
              }}
              className="hero"
            >
              <Typography
                className="title"
                variant="h1"
                noWrap
                component="div"
                align="center"
                sx={{
                  marginTop: "12px",
                  width: "100%",
                  fontFamily: "Whisper, cursive",
                  fontWeight: "800",
                  color: "#87521F",
                }}
              >
                Sabor a casa
              </Typography>
              <Typography
                className="title"
                variant="h6"
                component="p"
                align="start"
                sx={{
                  marginTop: "24px",
                  width: "80%",
                  fontWeight: "800",
                  color: "#87521F",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  bottom: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={6} container>
            <Grid
              item
              xs={4}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <img
                src={data.brownie.publicURL}
                height={280}
                width={280}
                alt="brownie"
              />
            </Grid>
            <Grid
              item
              xs={4}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <img
                src={data.applePie.publicURL}
                height={280}
                width={280}
                alt="brownie"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Hero
