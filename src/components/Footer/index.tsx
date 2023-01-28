import { Box, Grid } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'
// import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <>
      <Box borderTop='1px solid black' marginTop='50px'>
        <Grid display='flex' justifyContent='center' marginTop='50px'>
          <img src={logo} alt='' />
        </Grid>
      </Box>

      <Box>
        <Grid
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          marginTop='50px'
          fontSize='20px'
          fontWeight='500'
        >
          <Grid>КАТАЛОГ</Grid>
          <Grid>ДЛЯ КЛИЕНТА</Grid>
          <Grid>КОНТАКТЫ</Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          display='flex'
          justifyContent='space-around'
          fontSize='15px'
          fontWeight='400'
          color='rgba(0, 0, 0, 0.5)'
          lineHeight='35px'
          marginTop='15px'
        >
          <Grid>
            <Grid>Ткани</Grid>
            <Grid>Фурнитура</Grid>
            <Grid>Швейные машинки</Grid>
            <Grid>Швейные запчасти</Grid>
            <Grid>Новинки</Grid>
          </Grid>

          <Grid>
            <Grid>О компании</Grid>
            <Grid>Новости</Grid>
            <Grid>Услуги</Grid>
          </Grid>

          <Grid>
            <Grid>Служба поддержки:</Grid>
            <Grid>+996700223344</Grid>
            <Grid>Служба поддержки:</Grid>
            <Grid>+996700223344</Grid>
            <Grid>Служба поддержки:</Grid>
            <Grid>+996700223344</Grid>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid display='flex' justifyContent='center' paddingBottom='50px'>
          © 2023 Защищено авторским правом
        </Grid>
      </Box>
    </>
  )
}

export default Footer
