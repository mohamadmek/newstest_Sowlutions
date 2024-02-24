import {screen} from '@testing-library/react-native';

type TTextOption = {
  text: string;
};

export const expectTextToBePresent = (
  testID: string,
  options?: TTextOption | false,
) => {
  if (options === false) {
    expect(screen.queryByTestId(testID)).toBeNull();
    return;
  }

  const {text} = (options as TTextOption | undefined) ?? {};

  const target = screen.getByTestId(testID);
  expect(target.props.children).toBe(text);
};
