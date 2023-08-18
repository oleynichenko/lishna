import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import useSettings from '../hooks/useSettings';

function Layout() {
  const { maxAppWidth } = useSettings();

  return (
    <Stack sx={{ minHeight: '100vh' }}>
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
