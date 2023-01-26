import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { Badge, CardMedia } from '@mui/material'

import burger from '../Header/headerImage/burger.png'
import logo from '../Header/headerImage/logo.png'
import search from '../Header/headerImage/search.png'
import heart from '../Header/headerImage/heart.png'
import cart from '../Header/headerImage/cart.png'
import user from '../Header/headerImage/user.png'
import { Container } from '@mui/system'
import BFDrawer from '../BFDrawer'
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function Header() {
  const [openCart, setIsOpenCart] = React.useState(false)
  const [openFavorite, setIsOpenFavorite] = React.useState(false)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: '#FFFFFF', pt: '0.5%' }} position='static'>
          <Container maxWidth='lg'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  sx={{ mr: 1, width: '40px', height: '40px' }}
                >
                  <img src={burger} alt='menu' />
                </IconButton>
                <Link to='/'>
                  <Box component='img' src={logo} sx={{ width: { xs: '120px', sm: '150px' } }} />
                </Link>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Search
                  sx={{
                    width: { xs: '100px', sm: '200px' },
                    mr: 1,
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  <SearchIconWrapper>
                    <CardMedia component='img' src={search} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{
                      width: '100%',
                      color: 'black',
                      border: 'solid 1px grey',
                      borderRadius: '20px ',
                    }}
                    placeholder='поиск'
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

                <Box sx={{ display: 'flex', justifyContent: 'space-bettween' }}>
                  <IconButton
                    aria-label='show 4 new mails'
                    color='inherit'
                    onClick={() => setIsOpenFavorite(true)}
                  >
                    <Badge sx={{ width: { xs: '90%', sm: '100%' } }} color='error'>
                      <CardMedia component='img' src={heart} />
                    </Badge>
                  </IconButton>
                  {/* <p>Messages</p> */}r
                  <IconButton
                    aria-label='show 17 new notifications'
                    color='inherit'
                    onClick={() => setIsOpenCart(true)}
                  >
                    <Badge sx={{ width: { xs: '90%', sm: '100%' } }}>
                      <CardMedia component='img' src={cart} />
                    </Badge>
                  </IconButton>
                  {/* <p>Notifications</p> */}
                  <IconButton aria-label='show 17 new notifications' color='inherit'>
                    <Badge sx={{ width: { xs: '90%', sm: '100%' } }}>
                      <CardMedia component='img' src={user} />
                    </Badge>
                  </IconButton>
                  {/* <p>Notifications</p> */}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <BFDrawer open={openCart} onCloseDrawer={setIsOpenCart} isBasket />
      <BFDrawer open={openFavorite} onCloseDrawer={setIsOpenFavorite} isFavorite />
    </>
  )
}
