import { Box, Container, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import dinaImage from '../assets/dina.jpg';
import eladImage from '../assets/elad.jpg';
import { useNavigate } from 'react-router-dom';

const people = [
  {
    id: 'elad',
    image: eladImage,
  },
  {
    id: 'dina',
    image: dinaImage,
  },
];

function AboutUs({ sx }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" disableGutters sx={{ ...sx, display: 'flex', flexWrap: 'wrap' }}>
      <Stack sx={{ width: { md: '50%', lg: '40%' }, py: 0.5, pr: { md: 4 } }}>
        <Typography variant="h3" fontWeight="700" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
          {t('home.weAre')}
        </Typography>
        <Typography variant="h6" sx={{ mb: {xs: 3, lg: 6}, textAlign: { xs: 'justify', md: 'left' } }}>
          {t('home.aboutUs')}
        </Typography>
        <Button
          size="large"
          variant="outlined"
          sx={{ display: { xs: 'none', md: 'block' }, alignSelf: 'center',  }}
          onClick={() => navigate('/about')}
        >
          {t('common.readMore')}
        </Button>
      </Stack>
      <Stack sx={{ width: { xs: '100%', md: '50%', lg: '60%' } }}>
        <Grid container spacing={3}>
          {people.map((person) => (
            <Grid item xs={12} sm={6} key={person.id}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  mr: 3,
                  boxShadow: 8,
                  borderRadius: 2,
                }}
                alt={t(`books.${person.id}`)}
                src={person.image}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          size="large"
          variant="outlined"
          sx={{ display: { xs: 'block', md: 'none' }, alignSelf: 'center', mt: 6 }}
          onClick={() => navigate('/about')}
        >
          {t('common.readMore')}
        </Button>
      </Stack>
    </Container>
  );
}

export default AboutUs;
