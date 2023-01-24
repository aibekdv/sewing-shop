import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Badge, CardMedia, MenuItem } from '@mui/material'

import burger from '../Header/headerImage/burger.png'
import logo from '../Header/headerImage/logo.png'
import search from '../Header/headerImage/search.png'
import heart from '../Header/headerImage/heart.png'
import cart from '../Header/headerImage/cart.png'
import user from '../Header/headerImage/user.png'

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
    // vertical padding + font size from searchIcon
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#FFFFFF', pt: '0.5%' }} position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 1 }}
          >
            <img style={{}} src={burger} alt='' />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              // display: { xs: 'none', sm: 'block' },
              // width: { xs: '', sm: '17%' },
            }}
          >
            <CardMedia sx={{ width: { xs: '100%', sm: '17%' } }} component='img' src={logo} />
          </Typography>

          <Search sx={{ width: { xs: '20%', sm: '13%' }, display: { xs: 'none', sm: 'block' } }}>
            <SearchIconWrapper>
              <CardMedia component='img' src={search} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{
                width: { xs: '250%', sm: '140%' },
                color: 'black',
                border: 'solid 1px grey',
                borderRadius: '20px ',
              }}
              placeholder='поиск'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: 'flex', justifyContent: 'space-bettween' }}>
            <MenuItem sx={{ ml: { xs: '25%', sm: '27%' }, width: { xs: '10%', sm: '23%' } }}>
              <IconButton aria-label='show 4 new mails' color='inherit'>
                <Badge sx={{ width: { xs: '90%', sm: '100%' } }} color='error'>
                  <CardMedia component='img' src={heart} />
                </Badge>
              </IconButton>
              {/* <p>Messages</p> */}r
            </MenuItem>

            <MenuItem sx={{ width: { xs: '10%', sm: '23%' } }}>
              <IconButton aria-label='show 17 new notifications' color='inherit'>
                <Badge sx={{ width: { xs: '90%', sm: '100%' } }}>
                  <CardMedia component='img' src={cart} />
                </Badge>
              </IconButton>
              {/* <p>Notifications</p> */}
            </MenuItem>

            <MenuItem sx={{ width: '23%' }}>
              <IconButton aria-label='show 17 new notifications' color='inherit'>
                <Badge sx={{ width: { xs: '90%', sm: '100%' } }}>
                  <CardMedia component='img' src={user} />
                </Badge>
              </IconButton>
              {/* <p>Notifications</p> */}
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
