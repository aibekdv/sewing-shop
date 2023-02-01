import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

interface IMenuProps {
  anchorEl: HTMLElement | null
  onCloseMenu: () => void
  open: boolean
}

const BasicMenu: React.FC<IMenuProps> = ({ open, anchorEl, onCloseMenu }) => {
  return (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={onCloseMenu}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      sx={{ mt: 1 }}
    >
      <Box sx={{ py: 2, width: '250px' }}>
        <MenuItem onClick={onCloseMenu}>
          <Link to='/'>Главная</Link>
        </MenuItem>
        <MenuItem onClick={onCloseMenu}>
          <Link to='#'>Каталог</Link>
        </MenuItem>
        <MenuItem onClick={onCloseMenu}>
          <Link to='#'>О компании</Link>
        </MenuItem>
        <MenuItem onClick={onCloseMenu}>
          <Link to='#'>Услуги</Link>
        </MenuItem>
      </Box>
    </Menu>
  )
}

export default BasicMenu
