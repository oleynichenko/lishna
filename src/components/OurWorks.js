import React from 'react';
import {Box, Container, Stack} from '@mui/material';
import {useTranslation} from 'react-i18next';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import eladImage from "../assets/elad.jpg";

function OurWorks({ sx }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ ...sx, mb: 50 }}>
      <Typography variant="h3" fontWeight="700" sx={{ textAlign: 'center' }}>
        {t('home.ourLastWorks')}
      </Typography>
      <Stack>
        <Box>
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
        </Box>
      </Stack>
      <Button
        size="large"
        variant="outlined"
        onClick={() => navigate("/books")}
      >
        {t('common.seeAll')}
      </Button>
    </Container>
  );
}

export default OurWorks;
