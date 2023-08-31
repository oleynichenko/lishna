import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { defaultSettings } from '../config';

const initialState = {
  ...defaultSettings,
  onChangeDirection: () => {},
};

const SettingsContext = createContext(initialState);

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    maxAppWidth: initialState.maxAppWidth,
    phone: initialState.phone,
    whatsup: initialState.whatsup,
    email: initialState.email
  });

  // const onChangeDirection = (event) => {
  //   setSettings({
  //     ...settings,
  //     themeDirection: event.target.value,
  //   });
  // };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // onChangeDirection,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
