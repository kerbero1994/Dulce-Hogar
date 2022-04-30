import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"

const ResponsiveAppBar = () => {
  const pages = ["Servicios", "Productos", "Galería"]
  const info = ["Contacto", "nosotros", "Historia"]
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(225deg, #7a4a1c, #905821)",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            width: "100%",
            display: "flex",
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {info.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            className="title"
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Whisper, cursive",
              fontWeight: "800",
              //color: "#87521F",
            }}
          >
            Dulce Hogar
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
