import React from "react";
import { UIConfigProvider } from "./store/context/UIConfigProvider";
import Theme from "./assets/styles/base/Theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes, Main } from "./components/layouts";

const App = () => {
  return (
    <UIConfigProvider>
      <Theme>
        <BrowserRouter>
          <Main>
            <AppRoutes />
          </Main>
        </BrowserRouter>
      </Theme>
    </UIConfigProvider>
  );
};

export default App;
