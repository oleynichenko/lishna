import { useState } from 'react';
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import { LANGS } from '../locales/i18n';

const LanguagePopover = () => {
  const {
    i18n: { language, changeLanguage },
    t
  } = useTranslation();
  const [open, setOpen] = useState(null);
  const currentLang = LANGS.find((lang) => lang.value === language);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Tooltip title={t('common.changeLang')}>
        <IconButton
          onClick={handleOpen}
          color="inherit"
          sx={{
            width: 40,
            height: 40,
            ...(open && { bgcolor: 'action.selected' }),
          }}
        >
          <img src={currentLang.icon} alt={currentLang.label} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <Stack spacing={0.5} sx={{ width: 180}}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => {
                changeLanguage(option.value);
                handleClose();
              }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.value} src={option.icon} />
              </ListItemIcon>
              <ListItemText sx={{ ml: 1.25 }}>{t(`langs.${option.value}`)}</ListItemText>
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export {LanguagePopover};
