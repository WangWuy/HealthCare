import { RecoilRoot } from 'recoil';
import { extendTheme, NativeBaseProvider } from '@gluestack-ui/themed-native-base';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRoute from './src/navigation/AppRoute.tsx';
import { useColorScheme } from 'react-native';

function App(): React.JSX.Element {

  const theme = useColorScheme();

  return (
      <RecoilRoot>
        <NativeBaseProvider>
          <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <AppRoute />
          </NavigationContainer>
        </NativeBaseProvider>
      </RecoilRoot>
    );
}

export default App;
