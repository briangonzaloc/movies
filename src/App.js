import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import Routes from './routes';
import Theme from './contexts/theme';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history }>
      <Theme>
        <Routes />
      </Theme>
    </ConnectedRouter>
  </Provider>
);

export default App
