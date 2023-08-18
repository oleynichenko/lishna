import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useSettings from '../hooks/useSettings';
import { Social } from './Social';

function Footer({ sx }) {
  const { t } = useTranslation();
  const { maxAppWidth } = useSettings();

  return (
    <Container
      component="footer"
      maxWidth={maxAppWidth}
      sx={{
        pb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      <Typography variant="caption" sx={{ order: { xs: 2, sm: 1 } }}>{`© 2023 ${t('common.siteName')}`}</Typography>
      <Social sx={{ order: { xs: 1, sm: 2 }, width: { xs: '100%', sm: 'auto' }, mb: { xs: 2, sm: 0 } }} />
      <Typography variant="caption" sx={{ order: { xs: 3 } }}>
        {t('common.developedBy')}{' '}
        <Link variant="caption" underline="hover" href="https://daat.agency" target="_blank">
          daat.agency
        </Link>
      </Typography>
    </Container>
  );
}

export { Footer };
