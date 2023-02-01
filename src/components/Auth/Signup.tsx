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
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { register } from '../../redux/user/slice'
import { useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/selector'

export default function SignUp() {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { status } = useSelector(selectUser)
  const navigate = useNavigate()

  const [isValid, setIsValid] = React.useState<boolean>()
  const [username, setUsername] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [password2, setPassword2] = React.useState<string>('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      username,
      email,
      password,
      passwordConfirm: password2,
    }
    if (username.length > 2 && password === password2 && password.length > 7) {
      setIsValid(true)
      dispatch(register(data))
    } else {
      setIsValid(false)
    }
  }

  React.useEffect(() => {
    if (status === 'success') {
      alert('Спасибо за регистрацию. Активируйте аккаунт по ссылке в почте')
      navigate('/')
    }
  }, [status, isValid])

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
        <Box component='form' onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='given-name'
                required
                fullWidth
                id='userName'
                label='Псевдоним'
                autoFocus
                helperText='Псевдоним должен содержать не менее 3 букв'
                defaultValue={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email'
                autoComplete='email'
                type='email'
                defaultValue={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Пароль'
                type='password'
                id='password'
                autoComplete='new-password'
                helperText='Пароль должен содержать не менее 8 символов'
                defaultValue={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Повторите пароль'
                type='password'
                id='password2'
                autoComplete='new-password'
                helperText='Пароль должен содержать не менее 8 символов'
                defaultValue={password2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)}
              />
            </Grid>
          </Grid>
          {isValid === false && (
            <p style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>
              Заполните все поля правильно
            </p>
          )}
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
