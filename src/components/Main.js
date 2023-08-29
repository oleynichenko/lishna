import {Container, Stack, useTheme} from '@mui/material';
import {useTranslation} from 'react-i18next';
import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

function Main({ sx }) {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" disableGutters sx={{ ...sx, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight="700" color={palette.grey[600]} sx={{ mb: 1 }}>
        {t('home.since')}
      </Typography>
      <Typography variant="h2" fontWeight="700" lineHeight={1.1}>
        {t('home.activity')}
      </Typography>
      <Typography variant="h6" sx={{ mt: 4, mb: 4 }}>
        {t('home.description')}
      </Typography>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Button
          size="large"
          variant="contained"
          endIcon={<NavigateNextIcon />}
          onClick={() => navigate("/work")}
          sx={{ mr: 2 }}
        >
          {t('home.services')}
        </Button>
        <Button
          size="large"
          variant="outlined"
          onClick={() => navigate("/collaboration")}
        >
          {t('home.collaboration')}
        </Button>
      </Stack>
    </Container>
  );
}

export default Main;
