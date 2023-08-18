import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Stack } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function Social({ sx }) {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Tooltip title={t('icons.phone')} sx={{ mr: 1 }}>
        <IconButton color="primary">
          <LocalPhoneIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('icons.email')} sx={{ mr: 1 }}>
        <IconButton color="primary">
          <EmailIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('icons.whatsapp')} sx={{ mr: 1 }}>
        <IconButton color="primary">
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('icons.facebook')}>
        <IconButton color="primary">
          <FacebookIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export { Social };
