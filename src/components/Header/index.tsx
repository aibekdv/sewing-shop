import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Badge } from '@mui/material'
import { Container } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import logo from '../Header/headerImage/logo.png'
import search from '../Header/headerImage/search.png'
import BFDrawer from '../BFDrawer'
import BasicMenu from '../BasicMenu'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useAppDispatch } from '../../redux/store'
import { checkAuth } from '../../redux/user/slice'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/selector'
import { selectCart } from '../../redux/cart/selector'
import { ICartItem } from '../../redux/cart/types'

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

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { cart } = useSelector(selectCart)
  const userAuth = useSelector(selectUser)
  const navigate = useNavigate()

  const totalCount = cart.reduce((sum: number, obj: ICartItem) => sum + obj.quantity, 0)
  const [openCart, setIsOpenCart] = React.useState(false)
  const [openFavorite, setIsOpenFavorite] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    navigate(0)
  }

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth({ refresh: String(localStorage?.getItem('refresh')) }))
    }
  }, [])

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
                <>
                  <IconButton
                    color='inherit'
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ mr: 1, width: '40px', height: '40px', ml: -1 }}
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4 17H20M4 12H20M4 7H20'
                        stroke='black'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </IconButton>
                  <BasicMenu
                    open={openMenu}
                    onCloseMenu={() => setAnchorEl(null)}
                    anchorEl={anchorEl}
                  />
                </>
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
                    <Badge sx={{}} color='error'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z'
                          stroke='black'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-label='show 17 new notifications'
                    color='inherit'
                    onClick={() => setIsOpenCart(true)}
                  >
                    <Badge badgeContent={totalCount} color='primary'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8 11V11.01M16 11V11.01M8 8H16M8 8C5 8 4 11.8899 4 13.5C4 19.5259 5.60338 20.5 12 20.5C18.3966 20.5 20 19.5259 20 13.5C20 11.8899 19 8 16 8M8 8V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7L16 8'
                          stroke='black'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Badge>
                  </IconButton>
                  {userAuth.isAuth ? (
                    <IconButton onClick={logout}>
                      <ExitToAppIcon color='inherit' sx={{ color: 'rgba(0, 0, 0, 1)' }} />
                    </IconButton>
                  ) : (
                    <>
                      <Link to={'/login'} style={{ padding: '8px' }}>
                        <Badge sx={{}}>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z'
                              stroke='black'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
                              stroke='black'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Badge>
                      </Link>
                    </>
                  )}
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

export default Header
