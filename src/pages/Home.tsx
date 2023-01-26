import React from 'react'
import { Box, Container, Typography } from '@mui/material'
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
import { ICardItem, IMasterItem } from '../types/card.types'
import Cards from '../components/Cards'

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
      colors: ['#BA8DA0', '#000000', '#BEB6B6', '#F4EACE'],
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
    <>
      <Box
        component='img'
        src={ImgBlock1}
        alt='Фурнитура'
        sx={{ width: '100%', height: { xs: 400, md: 600, lg: 700 }, objectFit: 'cover' }}
      />

      <Container maxWidth='lg' sx={{ my: 2 }}>
        <Cards products={cards} />
      </Container>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-around'
        sx={{ background: 'black', height: '254px', my: '40px', color: 'white' }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-start', sm: 'space-between' },
              flexWrap: { xs: 'wrap', md: 'no-wrap' },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  fontSize: { xs: '22px', md: '32px' },
                  color: 'white',
                  mr: { xs: '20px', md: '35px' },
                }}
              >
                600+
              </Box>
              <Box sx={{ fontSize: { xs: '18px', md: '22px' }, color: 'white' }}>
                ПОКУПАТЕЛИ ДОВЕРЯЮТ
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderLeft: { xs: 0, lg: '1px solid white' },
                borderRight: { xs: 0, lg: '1px solid white' },
                height: { xs: '80px', sm: '120px', md: '150px', lg: '180px' },
                px: { xs: 0, lg: 3 },
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: '22px', md: '32px' },
                  color: 'white',
                  mr: { xs: '20px', md: '35px' },
                }}
              >
                100%
              </Box>
              <Box sx={{ fontSize: { xs: '18px', md: '22px' }, color: 'white' }}>
                ГАРАНТИЯ КАЧЕСТВА
              </Box>
            </Box>

            <Box
              height='32px'
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img src={ImgBlock1Icon} alt='Удобный Онлайн-Сервис' />
              <Box></Box>
              <Box sx={{ fontSize: { xs: '18px', md: '22px' }, ml: 2, color: 'white' }}>
                УДОБНЫЙ ОНЛАЙН-СЕРВИС
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component='img'
        src={ImgBlock2}
        alt='Ткань/Нитка'
        sx={{ width: '100%', height: { xs: 400, md: 600, lg: 700 }, objectFit: 'cover' }}
      />

      <Container maxWidth='lg' sx={{ my: 2 }}>
        <Cards products={cards} />
      </Container>

      <Box sx={{ background: 'black', minHeight: '327px', mb: '100px', pb: 2 }}>
        <Container maxWidth='lg'>
          <Typography
            fontSize='32px'
            fontWeight='800'
            color='white'
            textAlign='center'
            sx={{
              pt: '45px',
              pb: '20px',
            }}
          >
            НАШИ КЛИЕНТЫ
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'space-between' },
              alignItems: 'center',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
            }}
          >
            <img src={ImgBlock2OurClients1} alt='Lakbi' />
            <img src={ImgBlock2OurClients2} alt='Belwest' />
            <img src={ImgBlock2OurClients3} alt='MF' />
            <img src={ImgBlock2OurClients4} alt='Conte' />
          </Box>
        </Container>
      </Box>

      <Box
        component='img'
        src={ImgBlock3}
        alt='Швейные машинки'
        sx={{ width: '100%', height: { xs: 400, md: 600, lg: 700 }, objectFit: 'cover' }}
      />

      <Container maxWidth='lg' sx={{ mb: 2 }}>
        <Cards products={cards} />
      </Container>

      <Box
        sx={{
          background: 'black',
          height: '327px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'space-between' },
              alignItems: 'center',
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
            }}
          >
            <img src={ImgBlock3OurPart1} alt='Lakbi' />
            <img src={ImgBlock3OurPart2} alt='Belwest' />
            <img src={ImgBlock3OurPart3} alt='MF' />
            <img src={ImgBlock3OurPart4} alt='Conte' />
          </Box>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ mt: '100px' }}>
        <Typography
          sx={{
            mt: { sm: 2, md: '80px' },
            fontSize: '40px',
            fontWeight: 400,
            lineHeight: '47px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Новинки
        </Typography>
        <Box sx={{ my: 2 }}>
          <Cards products={cards} />
        </Box>
      </Container>

      <Container maxWidth='lg'>
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: 400,
            lineHeight: '47px',
            mb: '30px',
            mt: '40px',
            textAlign: 'center',
          }}
        >
          Мастера
        </Typography>
        <Box sx={{ my: 2 }}>
          <Cards masters={masters} />
        </Box>
      </Container>
    </>
  )
}
export default Home
