import React, {
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";
import {
  userStoreActionType,
  UserDataInitialStateInterface,
  UserDataStateContextInterface,
  UseReducerType,
} from "./interfaces";
import { ContextProviderPropsInterface } from "../../interfaces";
import { userDataInitialState } from "./initialState";
import UIConfigStateReducer from "./reducer";

export const UserDataContext = createContext<UserDataStateContextInterface>(
  {} as UserDataStateContextInterface
);

export const UserDataProvider: React.FC<ContextProviderPropsInterface> = ({
  children,
}): ReactElement => {
  const [userDataState, dispatchUserDataState] = useReducer<
    UseReducerType<UserDataInitialStateInterface, userStoreActionType>
  >(UIConfigStateReducer, userDataInitialState);

  return (
    <UserDataContext.Provider
      value={{
        userDataState,
        dispatchUserDataState,
      }}
    >
      {children as ReactNode}
    </UserDataContext.Provider>
  );
};
