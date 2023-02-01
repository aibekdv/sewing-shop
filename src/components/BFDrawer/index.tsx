import React, { SetStateAction } from 'react'
import { Button, Divider, Drawer, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from './../../redux/cart/selector'
import { ICartItem } from '../../redux/cart/types'
import { API_URL } from '../../utils/helpers/getEnv'
import { useAppDispatch } from '../../redux/store'
import { addToCart, decrementCount, removeToCart } from '../../redux/cart/slice'

interface IBFDrawerProps {
  open: boolean
  onCloseDrawer: React.Dispatch<SetStateAction<boolean>>
  isBasket?: boolean
  isFavorite?: boolean
}

const BFDrawer: React.FC<IBFDrawerProps> = ({ open, onCloseDrawer, isBasket, isFavorite }) => {
  const { cart, totalPrice } = useSelector(selectCart)
  const totalCount = cart.reduce((sum: number, obj: ICartItem) => sum + obj.quantity, 0)
  const dispatch = useAppDispatch()

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={() => onCloseDrawer(false)}
      sx={{ '& .MuiPaper-root': { width: { xs: '80%', sm: '60%', md: 450, lg: 550 } } }}
    >
      <Typography variant='h4' sx={{ m: 1, fontSize: { xs: '24px', sm: '28px', md: '32px' } }}>
        {isBasket && 'Корзина'}
        {isFavorite && 'Избранное'}
      </Typography>
      <Box id='bf-items'>
        {isBasket &&
          cart.length > 0 &&
          cart.map((item, idx) => (
            <React.Fragment key={idx}>
              <Box sx={{ m: 1, border: '1px solid rgba(0, 0, 0, 0.5)', position: 'relative' }}>
                <IconButton
                  sx={{ position: 'absolute', top: 2, right: 2 }}
                  onClick={() => dispatch(removeToCart(item.image))}
                >
                  <CloseOutlinedIcon />
                </IconButton>
                <Box sx={{ display: 'flex', p: 1, alignItems: 'center' }}>
                  <Link to='/home' onClick={() => onCloseDrawer(false)}>
                    <Box
                      component='img'
                      src={API_URL + item.image.slice(1)}
                      alt="sewing's image"
                      sx={{
                        maxWidth: { xs: '70px', sm: '100px', md: '150px' },
                        maxHeight: { xs: '70px', sm: '100px', md: '150px' },
                      }}
                    />
                  </Link>
                  <Box sx={{ ml: 1 }}>
                    <Typography
                      variant='h6'
                      sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' } }}
                      onClick={() => onCloseDrawer(false)}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant='subtitle1' color='gray'>
                      {item.description.slice(0, 15)}...
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ mx: 1, mt: 2, borderColor: 'rgba(0, 0, 0, 0.5)' }} />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    p: 1,
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' } }}
                  >
                    {item.price} som
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton onClick={() => dispatch(decrementCount(item.image))}>
                      <RemoveOutlinedIcon
                        sx={{
                          cursor: 'pointer',
                          color: 'rgba(0, 0, 0, 0.7)',
                          '&:hover': { color: 'black' },
                        }}
                      />
                    </IconButton>
                    <Typography sx={{ p: 1 }}>{item.quantity}</Typography>
                    <IconButton onClick={() => dispatch(addToCart(item))}>
                      <AddOutlinedIcon
                        sx={{
                          cursor: 'pointer',
                          color: 'rgba(0, 0, 0, 0.7)',
                          '&:hover': { color: 'black' },
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          ))}
        {isBasket && cart.length <= 0 && (
          <Typography variant='h5' sx={{ textAlign: 'center' }}>
            Корзина пуста
          </Typography>
        )}
        {isFavorite && (
          <Typography variant='h5' sx={{ textAlign: 'center' }}>
            Избранное пусто
          </Typography>
        )}
      </Box>
      {isBasket && cart.length > 0 && (
        <Box sx={{ py: 3, px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ fontSize: { xs: '19px', md: '20px' } }}>
              {totalCount} товара
            </Typography>
            <Typography variant='h6' sx={{ fontSize: { xs: '18px', md: '19px' } }}>
              {totalPrice}сом
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ fontSize: { xs: '19px' } }}>
              Доставка
            </Typography>
            <Typography variant='h6' sx={{ fontSize: { xs: '18px' } }}>
              Бесплатно
            </Typography>
          </Box>
          <Divider sx={{ my: 1, mx: -1, borderColor: 'rgba(0, 0, 0, 0.5)' }} />
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}
          >
            <Typography variant='h5' sx={{ fontSize: { xs: '20px', md: '24px' } }}>
              Сумма заказа
            </Typography>
            <Typography variant='h6' sx={{ fontSize: { xs: '18px' } }}>
              {totalPrice}сом
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              sx={{
                p: { xs: '10px 20px', sm: '12px 30px', md: '15px 40px' },
                color: 'white',
                bgcolor: 'black',
                textTransform: 'inherit',
                borderRadius: 0,
                mt: 2,
                border: '1px solid black',
                '&:hover': {
                  color: 'black',
                  bgcolor: 'transparent',
                },
              }}
            >
              Оформить заказ
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  )
}

export default BFDrawer
