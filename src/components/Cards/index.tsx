import React from 'react'
import { ICardItem, IMasterItem } from '../../types/card.types'
import CardItem from '../CardItem'
import { Grid, Theme } from '@mui/material'

interface ICardProps {
  products?: ICardItem[]
  masters?: IMasterItem[]
}

const Cards: React.FC<ICardProps> = ({ products, masters }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={(theme: Theme) => ({
        my: 1,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        },
      })}
    >
      {products &&
        products.map((card, index) => (
          <Grid
            key={index}
            item
            sm={6}
            lg={4}
            sx={(theme: Theme) => ({
              [theme.breakpoints.down('lg')]: {
                display: 'flex',
                justifyContent: 'center',
              },
            })}
          >
            <CardItem card={card} />
          </Grid>
        ))}

      {masters &&
        masters.map((master, index) => (
          <Grid
            key={index}
            item
            sm={6}
            lg={4}
            sx={(theme: Theme) => ({
              [theme.breakpoints.down('lg')]: {
                display: 'flex',
                justifyContent: 'center',
              },
            })}
          >
            <CardItem master={master} />
          </Grid>
        ))}
    </Grid>
  )
}

export default Cards
