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
