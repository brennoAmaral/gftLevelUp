import { Button, Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./style.css";

export default function Main(){
  let [contador, setContador] = useState(0);
   let cont= 0+Number.parseInt(contador);  

  const som = ()=>{
    setContador(cont += 1);
  }

  const sub = () => {
    setContador(cont -= 1);
  }

  const reset = () =>{
    setContador(cont = 0);
  }

  useEffect(()=>{
    console.log(`o contador foi modificado para: ${cont}`);
  },[cont]);

  return(
    <Box className='Main'>
      <main>
        <Button variant='contained' onClick={som} className={'StyledButton'}>
          <Typography variant='h3'>adicionar</Typography>
          
        </Button>
        <Button variant='contained' onClick={sub} className={'StyledButton'}>
          <Typography variant='h3'>subtrair</Typography>
          
        </Button>
        <Button variant='contained' onClick={reset} className={'StyledButton'}>
          <Typography variant='h3'>resetar</Typography>
          
        </Button>  
    </main>
      <Box >
        <Typography  variant='h3'>contador: {contador}</Typography>
      </Box>
    </Box>  
    
  );
}
