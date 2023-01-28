import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './PicBlock.module.scss'

interface IPicBlockProps {
  text: string
  imgUrl: string
  textColor: string
  right?: boolean
  btnColor: string
}

const PicBlock: React.FC<IPicBlockProps> = ({ text, imgUrl, textColor, right, btnColor }) => {
  return (
    <Box
      className={styles.root}
      sx={{
        width: '100%',
        height: { xs: 400, md: 600, lg: 700 },
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: { xs: 'center', md: right ? 'flex-end' : 'flex-start' },
          height: '100%',
          pt: { xs: 0, md: '150px' },
          px: 4,
          position: 'relative',
        }}
      >
        <Box sx={{ maxWidth: '500px' }}>
          <Typography
            sx={{
              fontSize: { xs: 20, sm: 26, md: 32, lg: 38 },
              fontWeight: { xs: 400, sm: 500, md: 600, lg: 700 },
              color: textColor,
              textAlign: 'center',
              wordBreak: 'break-word',
            }}
          >
            {text}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component={Link}
              to='/catalog'
              sx={{
                bgcolor: btnColor,
                px: { xs: '12px', sm: '23px' },
                py: { xs: '10px', sm: '15px' },
                borderRadius: 0,
                mt: 1,
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                fontWeight: 500,
                color: right ? 'white' : 'black',
                border: '1px dashed transparent',
                '&:hover': {
                  scale: '1.01',
                },
              }}
            >
              СМОТРЕТЬ В КАТАЛОГЕ
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PicBlock
