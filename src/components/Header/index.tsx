import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Badge } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import burger from '../Header/headerImage/burger.png'
import logo from '../Header/headerImage/logo.png'
import search from '../Header/headerImage/search.png'
import heart from '../Header/headerImage/heart.png'
import cart from '../Header/headerImage/cart.png'
import user from '../Header/headerImage/user.png'
import BFDrawer from '../BFDrawer'
import BasicMenu from '../BasicMenu'

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

interface IHeaderProps {
  isAuth?: boolean
}

const Header: React.FC<IHeaderProps> = ({ isAuth }) => {
  const [openCart, setIsOpenCart] = React.useState(false)
  const [openFavorite, setIsOpenFavorite] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ backgroundColor: '#FFFFFF', pt: '0.5%', boxShadow: 'none' }}
          position='static'
        >
          <Container maxWidth='lg'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: '0 !important' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {!isAuth && (
                  <>
                    <IconButton
                      color='inherit'
                      aria-controls={openMenu ? 'basic-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={openMenu ? 'true' : undefined}
                      onClick={handleClick}
                      sx={{ mr: 1, width: '40px', height: '40px', ml: -1 }}
                    >
                      <img src={burger} alt='menu' />
                    </IconButton>
                    <BasicMenu
                      open={openMenu}
                      onCloseMenu={() => setAnchorEl(null)}
                      anchorEl={anchorEl}
                    />
                  </>
                )}
                <Link to='/'>
                  <Box component='img' src={logo} sx={{ width: { xs: '120px', sm: '150px' } }} />
                </Link>
              </Box>

              {!isAuth && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Search
                    sx={{
                      width: { xs: '100px', sm: '200px' },
                      mr: 1,
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    <SearchIconWrapper>
                      <Box component='img' src={search} />
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
                      <Badge sx={{ width: '21.60px' }} color='error'>
                        <Box component='img' src={heart} />
                      </Badge>
                    </IconButton>
                    <IconButton
                      aria-label='show 17 new notifications'
                      color='inherit'
                      onClick={() => setIsOpenCart(true)}
                    >
                      <Badge sx={{ width: '21.60px' }}>
                        <Box component='img' src={cart} />
                      </Badge>
                    </IconButton>
                    <Link to='/login' style={{ padding: '8px' }}>
                      <Badge sx={{ width: '21.60px' }}>
                        <Box
                          component='img'
                          src={user}
                          sx={{ width: '21.60px', height: '21.60px' }}
                        />
                      </Badge>
                    </Link>
                  </Box>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <BFDrawer open={openCart} onCloseDrawer={setIsOpenCart} isBasket />
      <BFDrawer open={openFavorite} onCloseDrawer={setIsOpenFavorite} isFavorite />
    </>
  )
}

export default Header
