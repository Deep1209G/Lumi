import './src/localization/i18n';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { ThemeProvider } from '@shopify/restyle';
import lightTheme from './src/theme/theme';
import darkTheme from './src/theme/darkTheme';
import { WishlistProvider } from './src/context/WishlistContext';
import { CartProvider } from './src/context/CardContext';
import { OrderProvider } from './src/context/OrderContext';
import { AuthProvider } from '@src/context/AuthContext';
import { ThemeModeProvider, useThemeMode } from '@src/context/ThemeModeContext';

function ThemedApp() {
  const { mode } = useThemeMode();
  const activeTheme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            <WishlistProvider>
              <NavigationContainer>
                <AppNavigation />
              </NavigationContainer>
            </WishlistProvider>
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeModeProvider>
      <ThemedApp />
    </ThemeModeProvider>
  );
}

export default App;
