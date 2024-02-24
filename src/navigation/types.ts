import type {StackScreenProps} from '@react-navigation/stack';

export type TMainStackParamList = {
  MainNews: undefined;
};

export type TRootStackParamList = TMainStackParamList;

export interface IRootStackParamList extends TMainStackParamList {}

export type RootStackScreenProps<T extends keyof TRootStackParamList> =
  StackScreenProps<TRootStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
