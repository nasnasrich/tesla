import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Badge from "@mui/material/Badge";
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import compas from "../assets/compas.jpg";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { Underline } from 'lucide-react';
import { Unarchive } from '@mui/icons-material';



import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";



const pages = [
  { name: 'vehicles', path: '/Vehicles'},
  { name: 'company reviews', path: '/Companyreviews'}

];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  //CARTING ICON DECLARATION
  const { cart = [] } = useCart();
  const cartCount = cart.reduce(
  (total, item) => total + (item.quantity || 1),
  0
);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2f4f4f",

  // box-shadow: 5px 5px 5px rgb(30, 30, 31);

      boxShadow: "5px 5px 5px  rgba(30, 30, 31), inset 0 0 5px rgba(25, 25, 26, 0.22)",
     }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* Desktop Logo */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, backgroundColor: "darkslategray", boxShadow: 1  }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/Login"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              border: "2px solid darkslategray",
            }}
          >
            TESLA
          </Typography>



          

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* MOBILE MENU */}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

          {/* Mobile Logo */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/Hero"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TESLA
          </Typography> 

          {/* DESKTOP LINKS */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"ui-rounded" }}
              >
                {page.name}
              </Button>
            ))}
          </Box> */}

       



          {/* CART ICON */}
            {/* <IconButton component={Link} to="/Cart" sx={{ color: "white", backgroundColor: "darkslategray",  marginRight:1}}>
              <Badge
                badgeContent={cartCount}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor:  "white",
                    color: "#000",
                    fontWeight: "bold",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Badge>
            </IconButton> */}




          {/* USER ICON */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img
                  src={compas}
                  alt="Tesla Icon"
                  style={{ width: 30, borderRadius: '50%' }}
                />
              </IconButton>
            </Tooltip>

            {/* USER MENU */}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                component={Link}
                to="/Login"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>

              <MenuItem
                component={Link}
                to="/Registration"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Register</Typography>
              </MenuItem>

              <MenuItem
                component={Link}
                to="/TrackingPage"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">TrackOrder</Typography>
              </MenuItem>

            </Menu>
          </Box> */} 
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
