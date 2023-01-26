import React from 'react'
import { Box, Dialog, DialogContent, Typography, Button } from '@mui/material'
import { ICardItem } from '../../types/card.types'
import styles from './ModalCardItem.module.scss'

interface IModalItemProps {
  handleClose: () => void
  open: boolean
  product: ICardItem
}

const ModalCardItem: React.FC<IModalItemProps> = ({ handleClose, open, product }) => {
  const [imgIdx, setImgIdx] = React.useState(0)

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth='lg'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
        border: 0,
        maxWidth: '100%',
        '& .MuiPaper-root': {
          width: { xs: '90%', sm: '500px', md: '800px', lg: '1100px' },
        },
      }}
    >
      <DialogContent
        sx={{
          px: { xs: '16px', md: '20px', lg: '35px' },
          py: { xs: '16px', md: '35px' },
          width: '100%',
          borderRadius: '20px',
          overflowY: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '50%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <img src={product?.imgUrl[imgIdx]} alt='card item one' />
              <Box className={styles.colors} sx={{ pt: { md: 3 } }}>
                {product.colors?.map((color, index) => (
                  <button
                    key={index}
                    style={{
                      backgroundColor: color,
                      border: imgIdx === index ? '2px solid #0047FF' : '',
                    }}
                    className={styles.btn_color}
                    onClick={() => setImgIdx(index)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', md: '50%' },
              ml: { md: '20px' },
              mt: { xs: '20px', md: 0 },
            }}
          >
            <Box>
              <Typography variant='h5'>Футер 3-х нитка петля диагональ</Typography>
              <Typography variant='subtitle1' sx={{ mt: 3 }}>
                Трикотажное полотно высокого качества из пряжи гребенной/пенье. Отличительная
                особенность: лицевая и изнаночная сторона - хлопок, ПЭС - между слоями хлопка.
                Классический материал для спортивных костюмов, а также для худи, толстовок и другой
                одежды.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle1'>Состав</Typography>
                  <Typography variant='subtitle1' color='rgba(0, 0, 0, 0.5)'>
                    88% хлопок,12% пэ
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle1'>Ширина рулона</Typography>
                  <Typography variant='subtitle1' color='rgba(0, 0, 0, 0.5)'>
                    190-200
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle1'>Вес г/м²</Typography>
                  <Typography variant='subtitle1' color='rgba(0, 0, 0, 0.5)'>
                    350
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle1'>Цена </Typography>
                  <Typography variant='subtitle1' color='rgba(0, 0, 0, 0.5)'>
                    425 сом / метр
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  justifyContent: { xs: 'center', sm: 'space-between' },
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Button
                  sx={{
                    p: { xs: '10px 20px', md: '15px 30px' },
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
                  Добавить в корзину
                </Button>
                <Button
                  sx={{
                    p: { xs: '10px 20px', md: '15px 30px' },
                    color: 'black',
                    bgcolor: 'transparent',
                    textTransform: 'inherit',
                    borderRadius: 0,
                    mt: 2,
                    border: '1px solid black',
                    '&:hover': {
                      color: 'white',
                      bgcolor: 'black',
                    },
                  }}
                >
                  Добавить в избранные
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ModalCardItem
