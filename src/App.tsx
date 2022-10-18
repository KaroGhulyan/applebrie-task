import React from "react";
import { UIConfigProvider } from "./store/context/configStore/UIConfigProvider";
import Theme from "./assets/styles/base/Theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes, Main } from "./components/layouts";
import { UserDataProvider } from "./store/context/UserDataStore/UserDataProvider";

const App = () => {
  return (
    <UIConfigProvider>
      <UserDataProvider>
        <Theme>
          <BrowserRouter>
            <Main>
              <AppRoutes />
            </Main>
          </BrowserRouter>
        </Theme>
      </UserDataProvider>
    </UIConfigProvider>
  );
};

export default App;
