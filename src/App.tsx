import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PropertyPage from './components/PropertyPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PropertyPage />
    </Provider>
  );
}

export default App;
