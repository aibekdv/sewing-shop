import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './CardItem.module.scss'
import { Box } from '@mui/system'
import { ICardItem, IMasterItem } from '../../types/card.types'
import ModalCardItem from '../ModalCardItem'

interface ICardProps {
  card?: ICardItem
  master?: IMasterItem
}

const CardItem: React.FC<ICardProps> = ({ card, master }) => {
  const [imgIdx, setImgIdx] = React.useState(0)
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  return (
    <Card className={styles.card} sx={{ boxShadow: 'none', borderRadius: 0 }}>
      {!card ? (
        <>
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ pt: 2 }}>
              <Typography
                variant='h6'
                component='h6'
                sx={(theme) => ({
                  px: 1,
                  pb: 1,
                  fontSize: 20,
                  mt: '15px',
                  lineHeight: '23px',
                  textAlign: 'center',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 18,
                  },
                })}
              >
                {master?.name}
              </Typography>
              <Typography
                variant='h6'
                component='p'
                sx={(theme) => ({
                  p: 1,
                  fontSize: 18,
                  lineHeight: '21px',
                  textAlign: 'center',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 16,
                    lineHeight: 'inherit',
                    pb: 0.5,
                  },
                })}
                className={styles.colgray}
              >
                {master?.about}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              size='small'
              variant='outlined'
              color='inherit'
              className={styles.card_btn}
              LinkComponent='a'
              href={`tel:${master?.phone}`}
              style={{ margin: '20px 0px', padding: '10px 25px' }}
            >
              Позвонить
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          <CardContent sx={{ p: 0 }}>
            <img
              src={card?.imgUrl[imgIdx]}
              alt='card item one'
              onClick={() => setIsOpenModal(true)}
            />
            <Box>
              <Typography
                variant='h6'
                component='h6'
                sx={(theme) => ({
                  px: 1,
                  pb: 1,
                  fontSize: 20,
                  mt: '25px',
                  lineHeight: '23px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 18,
                  },
                })}
                onClick={() => setIsOpenModal(true)}
              >
                {card.title}
              </Typography>
              <Typography
                variant='h6'
                component='p'
                sx={(theme) => ({
                  px: 1,
                  pb: 1,
                  fontSize: 18,
                  lineHeight: '21px',
                  textAlign: 'center',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 16,
                    lineHeight: 'inherit',
                    pb: 0.5,
                  },
                })}
                className={styles.colgray}
              >
                {card.desc}
              </Typography>
              <Typography
                variant='h6'
                component='p'
                sx={(theme) => ({
                  px: 1,
                  fontSize: 18,
                  lineHeight: '21px',
                  textAlign: 'center',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 16,
                    lineHeight: 'inherit',
                  },
                })}
                className={styles.colgray}
              >
                {card.price} сом / метр
              </Typography>
            </Box>
            <Box className={styles.colors}>
              {card.colors?.map((color, index) => (
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
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button size='small' variant='outlined' color='inherit' className={styles.card_btn}>
              Добавить в корзину
            </Button>
          </CardActions>
          <ModalCardItem
            handleClose={() => setIsOpenModal(false)}
            open={isOpenModal}
            product={card}
          />
        </>
      )}
    </Card>
  )
}

export default CardItem
