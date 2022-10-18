import {
  UserDataInitialStateInterface,
  UseReducerType,
  userStoreActionType,
} from "./interfaces";
import { DataActionTypes } from "./actions";

const UsersDataStateReducer: UseReducerType<
  UserDataInitialStateInterface,
  userStoreActionType
> = (state, action): UserDataInitialStateInterface => {
  switch (action.type) {
    case DataActionTypes.SetData:
      return { users: [...action.payload] };
    default:
      return state;
  }
};

export default UsersDataStateReducer;
