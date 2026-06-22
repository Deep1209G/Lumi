import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';

function App() {
 

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    </ThemeProvider>
    
    
  );
}



export default App;
