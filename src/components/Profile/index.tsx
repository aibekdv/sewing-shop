import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person'
import { useTheme } from '@mui/system'

export default function Profile() {
  const theme = useTheme()

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
          <PersonIcon />
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ fontSize: { xs: 20, md: 24 } }}>
          Профиль пользователя
        </Typography>
        <Box sx={{ width: '100%', pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle1' fontWeight={600}>
              Ваша имя:
            </Typography>
            <Typography variant='subtitle1' sx={{ ml: 1 }}>
              helloworld
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle1' fontWeight={600}>
              Ваша почта:
            </Typography>
            <Typography variant='subtitle1' sx={{ ml: 1 }}>
              world@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
