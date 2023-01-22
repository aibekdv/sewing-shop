
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

import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'
import React from 'react'
import Cards from '../components/Cards'
import { ICardItem, IMasterItem } from '../types/card.types'

const Home: React.FC = () => {
  const cards: ICardItem[] = [
    {
      title: 'Ткань курточная мембранная',
      desc: 'DEWSPO 300T',
      price: 250,
      imgUrl: [
        'https://ik.imagekit.io/ax4ptc7e2/Cards/v1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274447097',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/v4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274447093',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/v2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274446908',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/v3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274446630',
      ],
      colors: ['#BA8DA0', '#F4EACE', '#BEB6B6', '#000000'],
    },
    {
      title: 'Футер 3-х нитка петля диагональ',
      desc: '88% хлопок,12% полиэстер',
      price: 425,
      imgUrl: [
        'https://ik.imagekit.io/ax4ptc7e2/Cards/w1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544475',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/w2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544760',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/w3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544762',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/w4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544471',
      ],
      colors: ['#F8EC81', '#4E6D4C', '#C39A99', '#1E222C'],
    },
    {
      title: 'Ткань курточная мембранная',
      desc: 'DEWSPO 300T',
      price: 330,
      imgUrl: [
        'https://ik.imagekit.io/ax4ptc7e2/Cards/q1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544477',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/q2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544774',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/q3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274544470',
        'https://ik.imagekit.io/ax4ptc7e2/Cards/q4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674274543921',
      ],
      colors: ['#7F6643', '#7C7D7C', '#E9D1C5', '#A99F9E'],
    },
  ]

  const masters: IMasterItem[] = [
    {
      name: 'Жыргалбеков Максат',
      about: 'Мастер установки и починки швейных машинок',
      phone: '0777000777',
    },
    {
      name: 'Улукбеков Дастан',
      about: 'Мастер установки и починки швейных машинок',
      phone: '+996550660770',
    },
    {
      name: 'Ким Виктор',
      about: 'Мастер установки и починки швейных машинок',
      phone: '+996707707077',
    },
  ]

  return (
    <Container maxWidth='lg'>
      <Box sx={{ my: 1 }}>
        <Typography textAlign={'center'} variant='h3'>
          НОВИНКИ
        </Typography>
        <Cards products={cards} />
      </Box>
      <Box sx={{ mt: 5, mb: 2 }}>
        <Typography textAlign={'center'} variant='h3'>
          МАСТЕРА
        </Typography>
        <Cards masters={masters} />
      </Box>
    </Container>

  )
}

export default Home
