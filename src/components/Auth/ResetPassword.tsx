import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/system'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
  const theme = useTheme()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
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
        }}
      >
        <Box sx={{ p: 2, borderRadius: theme.shape.borderRadius, border: '1px solid lightgray' }}>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography variant='subtitle1' sx={{ my: 1 }}>
              Забыли пароль? Пожалуйста, введите свой адрес электронной почты. Вы получите ссылку
              для создания нового пароля по электронной почте.
            </Typography>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Введите Email'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Сбросить
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component={Link}
              to='/login'
              sx={{ color: 'primary.light', fontSize: 14, textDecoration: 'underline' }}
            >
              Помните свой пароль?
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
