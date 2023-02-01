import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LoginIcon from '@mui/icons-material/Login'
import Avatar from '@mui/material/Avatar'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/system'
import { useAppDispatch } from './../../redux/store'
import { login } from '../../redux/user/slice'
import { useSelector } from 'react-redux'
import { selectUser } from './../../redux/user/selector'
import { Button } from '@mui/material'

export default function SignIn() {
  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { status } = useSelector(selectUser)

  const [isVisbleText, setIsVisibleText] = React.useState(false)
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    if (username.length > 2 && password.length > 7) {
      setIsVisibleText(false)
      dispatch(login({ username, password }))
    } else {
      setIsVisibleText(true)
    }
  }

  React.useEffect(() => {
    if (status === 'success') {
      navigate('/')
    }
  }, [status, onSubmit])

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
        <Box component='form' onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Псевдоним'
            autoComplete='username'
            autoFocus
            type='text'
            error={isVisbleText}
            helperText='Псевдоним должен содержать не менее 3 букв'
            defaultValue={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Пароль'
            type='password'
            id='password'
            autoComplete='current-password'
            helperText='Пароль должен содержать не менее 8 символов'
            error={isVisbleText}
            defaultValue={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          {status === 'error' && (
            <Typography variant='subtitle2' sx={{ color: 'red', textAlign: 'center' }}>
              Не найдено активной учетной записи с указанными данными
            </Typography>
          )}

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
