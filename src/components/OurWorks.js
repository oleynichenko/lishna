import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import destaImage from '../assets/images/books/desta.jpg';
import factsImage from '../assets/images/books/facts.jpg';
import knightsImage from '../assets/images/books/knights.jpg';
import neharotImage from '../assets/images/books/neharot.jpg';
import skinnyImage from '../assets/images/books/skinny.jpg';
import successImage from '../assets/images/books/success.jpg';
import talmudImage from '../assets/images/books/talmud.jpg';

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

const books = [
  {
    id: 'desta',
    image: destaImage,
  },
  {
    id: 'facts',
    image: factsImage,
  },
  {
    id: 'knights',
    image: knightsImage,
  },
  {
    id: 'neharot',
    image: neharotImage,
  },
  {
    id: 'skinny',
    image: skinnyImage,
  },
  {
    id: 'success',
    image: successImage,
  },
  {
    id: 'talmud',
    image: talmudImage,
  },
];

function OurWorks({ sx }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const randomBooks = getMultipleRandom(books, 4);

  return (
    <Container maxWidth="lg" disableGutters sx={{ ...sx, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight="700" sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
        {t('home.ourLastWorks')}
      </Typography>
      <Grid container spacing={{ xs: 6, sm: 3 }} sx={{ mb: {xs: 6, md: 8} }}>
        {randomBooks.map((book) => (
          <Grid item xs={12} sm={6} md={3} key={book.id}>
            <Box
              component="img"
              sx={{
                boxShadow: 4,
                borderRadius: 2,
                mb: 1,
                width: '100%',
              }}
              alt={t(`books.${book.id}`)}
              src={book.image}
            />
            <Typography variant="h6">{t(`books.${book.id}`)}</Typography>
          </Grid>
        ))}
      </Grid>
      <Button size="large" variant="outlined" onClick={() => navigate('/books')}>
        {t('home.seeAll')}
      </Button>
    </Container>
  );
}

export default OurWorks;
