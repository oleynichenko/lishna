import {CssBaseline} from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import {useTranslation} from "react-i18next";
import {RTL} from "./RTL";

const ThemeProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const direction = i18n.language === 'he' ? 'rtl' : 'ltr';

  document.dir = direction;

  let theme = createTheme({
    typography: {
      fontFamily: 'Arimo, sans-serif'
    },
    direction,
  });

  theme = responsiveFontSizes(theme);

  return (
    <StyledEngineProvider injectFirst>
      <RTL direction={direction}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </RTL>
    </StyledEngineProvider>
  );
}

export { ThemeProvider };
