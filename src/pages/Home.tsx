import { Box, Container, Grid } from '@mui/material'
import { height, padding } from '@mui/system'
import React from 'react'
import ImgBlock1 from '../assets/block1.png'
import ImgBlock2 from '../assets/block2.png'
import ImgBlock3 from '../assets/block3.png'
import ImgBlock1Icon from '../assets/block1Icon.png'
import ImgBlock2OurClients1 from '../assets/block2OurClients1.png'
import ImgBlock2OurClients2 from '../assets/block2OurClients2.png'
import ImgBlock2OurClients3 from '../assets/block2OurClients3.png'
import ImgBlock2OurClients4 from '../assets/block2OurClients4.png'
import ImgBlock3OurPart1 from '../assets/block3OurPart1.png'
import ImgBlock3OurPart2 from '../assets/block3OurPart2.png'
import ImgBlock3OurPart3 from '../assets/block3OurPart3.png'
import ImgBlock3OurPart4 from '../assets/block3OurPart4.png'
import CardItem from '../components/CardItem'

const Home: React.FC = () => {
  return (
    <>
      <Box>
        <Grid>
          <img
            style={{ width: '100%', height: '725px', marginBottom: '100px' }}
            src={ImgBlock1}
            alt='Фурнитура'
          />
        </Grid>
      </Box>

      <Box display='flex' justifyContent='space-around'>
        <CardItem />
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
      </Box>

      <Box>
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='space-around'
          sx={{ background: 'black', height: '254px', marginBottom: '100px', color: 'white' }}
        >
          <Grid display='flex' justifyContent='center' alignItems='center'>
            <Grid fontSize='32px' fontWeight='800' marginRight='35px'>
              600+
            </Grid>
            <Grid fontSize='22px' color='rgba(255, 255, 255, 0.85)'>
              ПОКУПАТЕЛИ ДОВЕРЯЮТ
            </Grid>
          </Grid>

          <Grid border='1px solid white' height='183px'></Grid>

          <Grid display='flex' justifyContent='center' alignItems='center'>
            <Grid fontSize='32px' fontWeight='800' marginRight='35px'>
              100%
            </Grid>
            <Grid fontSize='22px' color='rgba(255, 255, 255, 0.85)'>
              ГАРАНТИЯ КАЧЕСТВА
            </Grid>
          </Grid>

          <Grid border='1px solid white' height='183px'></Grid>

          <Grid height='32px' display='flex' justifyContent='center' alignItems='center'>
            <img src={ImgBlock1Icon} alt='Удобный Онлайн-Сервис' />
            <Grid></Grid>
            <Grid marginLeft='35px' fontSize='22px' color='rgba(255, 255, 255, 0.85)'>
              УДОБНЫЙ ОНЛАЙН-СЕРВИС
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid>
          <img
            style={{ width: '100%', height: '726px', marginBottom: '100px' }}
            src={ImgBlock2}
            alt='Ткань/Нитка'
          />
        </Grid>
      </Box>

      <Box display='flex' justifyContent='space-around'>
        {/* <CardItem /> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
      </Box>

      <Box sx={{ background: 'black', height: '327px', marginBottom: '100px' }}>
        <Grid>
          <Grid
            color='white'
            display='flex'
            justifyContent='center'
            fontSize='32px'
            fontWeight='800'
          >
            <Grid marginTop='45px' marginBottom='56px'>
              НАШИ КЛИЕНТЫ
            </Grid>
          </Grid>

          <Grid display='flex' alignItems='center' justifyContent='space-around'>
            <img src={ImgBlock2OurClients1} alt='Lakbi' />
            <img src={ImgBlock2OurClients2} alt='Belwest' />
            <img src={ImgBlock2OurClients3} alt='MF' />
            <img src={ImgBlock2OurClients4} alt='Conte' />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid>
          <img
            style={{ width: '100%', height: '726px', marginBottom: '100px' }}
            src={ImgBlock3}
            alt='Швейные машинки'
          />
        </Grid>
      </Box>

      <Box display='flex' justifyContent='space-around'>
        <CardItem />
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
      </Box>

      <Box sx={{ background: 'black', height: '327px', marginBottom: '100px' }}>
        <Grid>
          <Grid
            color='white'
            display='flex'
            justifyContent='center'
            fontSize='32px'
            fontWeight='800'
          >
            <Grid marginTop='45px' marginBottom='56px'>
              НАШИ КЛИЕНТЫ
            </Grid>
          </Grid>

          <Grid display='flex' alignItems='center' justifyContent='space-around'>
            <img src={ImgBlock3OurPart1} alt='Lakbi' />
            <img src={ImgBlock3OurPart2} alt='Belwest' />
            <img src={ImgBlock3OurPart3} alt='MF' />
            <img src={ImgBlock3OurPart4} alt='Conte' />
          </Grid>
        </Grid>
      </Box>

      <Grid
        display='flex'
        justifyContent='center'
        fontSize='40px'
        fontWeight='400'
        lineHeight='47px'
        marginBottom='80px'
      >
        Новинки
      </Grid>

      <Box display='flex' justifyContent='space-around'>
        <CardItem />
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
      </Box>

      <Grid
        display='flex'
        justifyContent='center'
        fontSize='40px'
        fontWeight='400'
        lineHeight='47px'
        marginBottom='80px'
      >
        Мастера
      </Grid>

      <Box display='flex' justifyContent='space-around'>
        <CardItem />
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
        {/* <Grid marginBottom='100px' border='2px solid black' height='500px' width='20%'></Grid> */}
      </Box>
    </>
  )
}

export default Home
