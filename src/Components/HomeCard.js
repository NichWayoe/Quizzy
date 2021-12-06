import {PostCard} from "./styledComponents"
import React from 'react'
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider" 

export default function HomeCard(props) {
    return (
        <div>
            <PostCard>
            <CardHeader  sx={{fontSize:"14", marginLeft:10}}
        avatar={
          <Avatar sx={{ bgcolor: "red", width:60, height:60}}>
            R
          </Avatar>
        }
        
        title={<Typography variant="h4" sx={{color:"white", fontWeight:'bold', fontSize: 34}}> Pop Culture</Typography>} //add quiz name here
        subheader={<Typography sx={{color:"white", fontStyle:"italic", fontSize:14}}> December 5, 2021, Entertainment</Typography>}

      />
      <Divider sx={{bgcolor:"white"}}/>
      <CardContent sx={{marginLeft:10}}>
          <Typography>Check out this amazing quiz on Pop Culture</Typography>
      </CardContent>
            </PostCard>
        </div>
    )
}
