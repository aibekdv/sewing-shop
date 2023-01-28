import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Divider sx={{ mb: '40px', mt: '60px' }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img src={logo} alt='' />
      </Box>

      <Container maxWidth='lg' sx={{ mt: '30px' }}>
        <Grid container spacing={2} justifyContent='flex-start'>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' } }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18, md: 20 },
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                Каталог
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mt: 1,
                  '& a': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontWeight: 300,
                    lineHeight: '35px',
                  },
                }}
              >
                <Link to='#'>Ткани</Link>
                <Link to='#'>Фурнитура</Link>
                <Link to='#'>Швейные машинки</Link>
                <Link to='#'>Швейные запчасти</Link>
                <Link to='#'>Новинки</Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' } }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18, md: 20 },
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                ДЛЯ КЛИЕНТА
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mt: 1,
                  '& a': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontWeight: 300,
                    lineHeight: '35px',
                  },
                }}
              >
                <Link to='#'>О компании</Link>
                <Link to='#'>Новости</Link>
                <Link to='#'>Услуги</Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' } }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18, md: 20 },
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                КОНТАКТЫ
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mt: 1,
                  '& a': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontWeight: 300,
                    lineHeight: '35px',
                  },
                }}
              >
                <Link to='#'>
                  Служба поддержки: <br /> +996700223344
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ mt: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        © 2023 Защищено авторским правом
      </Box>
    </React.Fragment>
  )
}

export default Footer
