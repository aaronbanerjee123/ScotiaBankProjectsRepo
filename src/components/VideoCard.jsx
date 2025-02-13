import React from 'react'
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent,CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utils/constants';

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
    console.log(videoId, snippet);

  return (
    <div>
        
        <Card sx={{width:{md:'320px', xs:'100%'}, boxShadow:'none', borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} 
                    alt={snippet?.title}
                    sx={{width:358, height:180}}
                />
            </Link>
            <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>

            <Typography variant = "subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>

                <Typography variant = "subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{fontSize:12, color:'gray', ml:5}} />
                </Typography>
                </Link>
            </CardContent>
        </Card>
        
    </div>
  )
}

export default VideoCard