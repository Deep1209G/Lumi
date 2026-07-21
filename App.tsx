import './src/localization/i18n';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme/theme';
import { WishlistProvider } from './src/context/WishlistContext';
import { CartProvider } from './src/context/CardContext';
import { OrderProvider } from './src/context/OrderContext';
import { AuthProvider } from '@src/context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
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

export default App;
