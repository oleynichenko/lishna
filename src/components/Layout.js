import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import useSettings from '../hooks/useSettings';
import image from '../assets/bg-top.png';

function Layout() {
  const { maxAppWidth } = useSettings();

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <Container
        component="main"
        maxWidth={maxAppWidth}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  );
}

export default Layout;
