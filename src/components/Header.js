import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import React, { useState } from 'react';
import { LanguagePopover } from './LanguagePopover';
import useSettings from '../hooks/useSettings';
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";

const pages = [
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'books',
    path: '/books'
  },
  {
    name: 'collaboration',
    path: '/collaboration'
  },
  {
    name: 'contacts',
    path: '/contacts'
  }
];

const logoStyle = {
  fontWeight: 700,
  letterSpacing: '.1rem',
  color: 'inherit',
  textDecoration: 'none',
  textTransform: 'uppercase',
  cursor: 'pointer'
};

const Header = () => {
  const { t } = useTranslation();
  const { maxAppWidth } = useSettings();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuItemClick = (path) => {
    setAnchorElNav(null);
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={maxAppWidth}>
        <Toolbar disableGutters>
          <Diversity1Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, pb: 0.2 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ...logoStyle,
              mr: 4,
              display: { xs: 'none', md: 'flex' },
            }}
            onClick={() => handleMenuItemClick('/') }
          >
            {t('common.siteName')}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleMenuItemClick(page.path)}>
                  <Typography textAlign="center">{t(`pages.${page.name}`)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleMenuItemClick(page.path)}
                sx={{ mr: 1.25, color: 'inherit', display: 'block' }}
              >
                {t(`pages.${page.name}`)}
              </Button>
            ))}
          </Box>
          <Diversity1Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, pb: 0.2 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ...logoStyle,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
            onClick={() => handleMenuItemClick('/') }
          >
            {t('common.siteName')}
          </Typography>
          <LanguagePopover />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
