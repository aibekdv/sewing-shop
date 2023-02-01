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
import { IMasterItem } from '../types/card.types'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'
import PicBlock from '../components/PicBlock'
import { useAppDispatch } from '../redux/store'
import { fetchProducts } from '../redux/product/slice'
import { selectProducts } from '../redux/product/selector'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const { cards } = useSelector(selectProducts)

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

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <PicBlock
        text='БЕСТСЕЛЛЕР 2023 ПРЕМИУМ КАЧЕСТВА'
        imgUrl={ImgBlock1}
        textColor='white'
        right
        btnColor='rgba(246, 234, 234, 0.6)'
      />

      <Container maxWidth='lg' sx={{ my: 2 }}>
        <Cards products={cards.slice(0, 3)} />
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

      <PicBlock
        text='ВЫСОКОКАЧЕСТВЕННЫЕ ФУРНИТУРЫ'
        imgUrl={ImgBlock2}
        textColor='white'
        btnColor='rgba(255, 255, 255, 1)'
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

      <PicBlock
        text='ТОП 10 ПОПУЛЯРНЫХ МАШИН В НАШЕМ МАГАЗИНЕ'
        imgUrl={ImgBlock3}
        textColor='rgba(66, 81, 104, 1)'
        btnColor='rgba(246, 234, 234, 0.7)'
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
