import * as React from 'react';
import { styled } from '@mui/styles';
import {Card, Button} from '@mui/material';


export const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
export const PostCard=styled(Card)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  width: '90%',
  height: 200, 
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  hover: {
    "&:hover" :{
      backgroundColor:'red'
    }
  } 
})

export const LoginCard=styled(Card)({
  backgroundColor:"#4A4242",
  width: 700,
  height: 600, 
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
})



