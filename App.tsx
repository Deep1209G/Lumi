import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme/theme';
import { WishlistProvider } from './src/context/WishlistContext';
import { CartProvider } from './src/context/CardContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <WishlistProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
