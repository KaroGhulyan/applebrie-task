import { UserInterface } from "../../../interfaces/interfaces";
import { DataActionTypes } from "./actions";

export type UseReducerType<S, A> = (state: S, action: A) => S;

export interface UserDataInitialStateInterface {
  users: UserInterface[];
}

export type userStoreActionType = {
  type: DataActionTypes.SetData;
  payload: UserInterface[];
};

export interface UserDataStateContextInterface {
  userDataState: UserDataInitialStateInterface;
  dispatchUserDataState: (props: userStoreActionType) => void;
}
