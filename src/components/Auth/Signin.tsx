import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LoginIcon from '@mui/icons-material/Login'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/system'

export default function SignIn() {
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
          justifyContent: 'center',
          borderRadius: theme.shape.borderRadius,
          border: '1px solid lightgray',
          px: 2,
          pt: 1,
          pb: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LoginIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Авторизация
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Пароль'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Запомните меня'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Box
                component={Link}
                to='/reset'
                sx={{ color: 'primary.light', fontSize: 14, textDecoration: 'underline' }}
              >
                Забыли пароль?
              </Box>
            </Grid>
            <Grid item>
              <Box
                component={Link}
                to='/register'
                sx={{ color: 'primary.light', fontSize: 14, textDecoration: 'underline' }}
              >
                {'Еще не регистрировались?'}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
