import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme/theme';
import { WishlistProvider } from './src/context/WishlistContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;
