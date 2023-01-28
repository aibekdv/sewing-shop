import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'

export default function SignUp() {
  const theme = useTheme()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Container maxWidth='xs' sx={{ pt: 4 }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: theme.shape.borderRadius,
          border: '1px solid lightgray',
          px: 2,
          pb: 3,
          pt: 1,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Зарегистрироваться
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='given-name'
                name='userName'
                required
                fullWidth
                id='userName'
                label='Имя пользователя'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Пароль'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Регистрация
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              <Box
                component={Link}
                to='/login'
                sx={{ fontSize: 14, textDecoration: 'underline', color: 'primary.light' }}
              >
                У вас уже есть аккаунт? Войти
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
