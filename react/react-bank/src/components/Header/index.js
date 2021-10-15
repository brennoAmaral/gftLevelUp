import { Typography } from "@material-ui/core";
import React from "react";
import './style.css';

export default function Header(){
  return(
    <header className='Header'>
      <Typography variant='h3'>GFT Level Up</Typography>
    </header>
  );
}