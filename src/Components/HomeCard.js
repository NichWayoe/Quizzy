import {PostCard} from "./styledComponents"
import React from 'react'
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider" 
import icon from '../Icons/icon.png'

export default function HomeCard(props) {
  const {title, subtitle, onClick} = props;
  console.log(title)
  console.log(subtitle)
    return (
            <PostCard >
              <CardActionArea onClick={onClick}>
            <CardHeader  sx={{fontSize:"14", marginLeft:10}}
        avatar={
          <img style={{marginRight:10}}src={icon}/>
        }
        
        title={<Typography variant="h4" sx={{color:"white", fontWeight:'bold', fontSize: 34}}>{title}</Typography>} //add quiz name here

      />
      <CardContent sx={{marginLeft:10, marginBottom:10}}>
          <Typography sx={{color:"white", fontSize:20}}>{subtitle}</Typography>
      </CardContent>
      </CardActionArea>
            </PostCard>
    )
}
