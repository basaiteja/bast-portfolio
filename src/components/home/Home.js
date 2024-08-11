import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpg';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {

  return (
    <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
      justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>

      <Box className={Style.Pp} gap={'1.5rem'} alt={'image of developer'} component={'img'} src={me} width={{ xs: '70%', md: '40vh' }} height={'auto'}  p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '1rem' }} />
      
      <Box>
        <div className={Style.card}>
          <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
          </h1>
          <h2>I'm {info.position}.</h2>
          <Box className={Style.icard} component={'ul'} p={'0.8rem'}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
        </div>
      </Box>


      <Box className={Style.scard} display={'flex'}  gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
         {info.socials.map((social, index) => (
           <div className={Style.soccard} key={index}>
            <SocialIcon link={social.link} icon={social.icon} label={social.label} />
           </div>
            ))}
      </Box>
    </Box>
  )
}
