import type {StackScreenProps} from '@react-navigation/stack';

export type TMainStackParamList = {
  MainNews: undefined;
  SearchNews: undefined;
  mohamad: undefined;
};

export type TRootStackParamList = TMainStackParamList;

export interface IRootStackParamList extends TMainStackParamList {}

export type RootStackScreenProps<T extends keyof TRootStackParamList> =
  StackScreenProps<TRootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
