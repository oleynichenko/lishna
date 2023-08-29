import { Box, Container, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import dinaImage from '../assets/dina.jpg';
import eladImage from '../assets/elad.jpg';
import { useNavigate } from 'react-router-dom';

function AboutUs({ sx }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" disableGutters sx={{ ...sx, display: 'flex' }}>
      <Stack sx={{ flexGrow: 1, pt: 0.5, mr: 4 }} alignItems="flex-start">
        <Typography variant="h3" fontWeight="700" sx={{ mb: 1.5 }}>
          {t('home.weAre')}
        </Typography>
        <Typography variant="h6" sx={{ mb: 5 }}>
          {t('home.aboutUs')}
        </Typography>
        <Button size="large" variant="outlined" onClick={() => navigate('/about')}>
          {t('common.readMore')}
        </Button>
      </Stack>
      <Box
        component="img"
        sx={{
          boxShadow: 12,
          borderRadius: 2,
          mr: 3,
          height: 332,
          width: 290,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={eladImage}
      />
      <Box
        component="img"
        sx={{
          boxShadow: 12,
          borderRadius: 2,
          height: 332,
          width: 290,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={dinaImage}
      />
    </Container>
  );
}

export default AboutUs;
