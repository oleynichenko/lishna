import React from 'react';
import {useTranslation} from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Stack} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import useSettings from "../hooks/useSettings";

function Social({ sx }) {
  const { t } = useTranslation();
  const { phone, email, whatsup } = useSettings();

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Tooltip title={t('icons.phone')} sx={{ mr: 1 }}>
        <IconButton color="primary" onClick={() => window.location.href = `tel:+${phone}`}>
          <LocalPhoneIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('icons.email')} sx={{ mr: 1 }} onClick={() => window.location.href = `mailto:${email}`}>
        <IconButton color="primary">
          <EmailIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('icons.whatsapp')} sx={{ mr: 1 }} onClick={() => window.location.href = `https://wa.me/${whatsup}`}>
        <IconButton color="primary">
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export { Social };
