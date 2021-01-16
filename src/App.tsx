import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PropertyPage from "./containers/PropertyPage";

const App: FC = () => {
  return (
    <Provider store={store}>
      <PropertyPage />
    </Provider>
  );
};

export default App;
