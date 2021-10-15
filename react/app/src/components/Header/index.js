import React from "react";
import { IconButton, AppBar, Typography, Box, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import VpnKeyLogin from "@material-ui/icons/VpnKey";
import PhoneIcon from "@material-ui/icons/Phone";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <AppBar position='static' sx={'background-color: #001D5E;'}>
      <Toolbar sx={'justify-content: space-between'}>
        <Typography variant='h3'>GFT LevelUp</Typography>
        <Box className={'alignButton'}>

          <Router>

            <Link>
              <IconButton className={'buttonIcon'} >
                <HomeIcon sx={'color: #001D5E;'} />
              </IconButton>
            </Link>

            <Link>
              <IconButton className={'buttonIcon'} >
                <VpnKeyLogin sx={'color: #001D5E;'} />
              </IconButton>
            </Link>

            <Link>
              <IconButton className={'buttonIcon'} >
                <PhoneIcon sx={'color: #001D5E;'} />
              </IconButton>
            </Link>

          </Router>
        </Box>
      </Toolbar>
    </AppBar >
  );
}