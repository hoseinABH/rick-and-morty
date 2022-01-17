// containers
import Characters from './containers/Characters';

// theme provider
import { ThemeProvider } from 'styled-components';

// theme
import { theme } from './theme';

// global styles
import { GlobalStyles } from './global-styles';

// react query
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <Characters />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
