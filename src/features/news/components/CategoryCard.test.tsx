import React, {ComponentProps} from 'react';
import {CategoryCard} from './CategoryCard';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {expectTextToBePresent} from '../../../common/components';

const baseProps: ComponentProps<typeof CategoryCard> = {
  title: 'Title',
  isSelected: true,
  onPress: jest.fn(),
};

describe('CategoryCard', () => {
  it('should render correct values', () => {
    render(<CategoryCard {...baseProps} />);
    expectTextToBePresent('category-card-text', {text: baseProps.title});
  });

  it('should use correct styles if isSelected true', () => {
    render(<CategoryCard {...baseProps} />);
    const container = screen.getByTestId('category-card-container');
    const text = screen.getByTestId('category-card-text');
    expect(container.props.style).toStrictEqual([
      {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        marginRight: 5,
        padding: 8,
      },
      {backgroundColor: '#079E01'},
    ]);
    expect(text.props.style).toStrictEqual([
      {fontSize: 14, fontWeight: 'bold'},
      {textAlign: 'left'},
      [{color: '#079E01'}, {color: '#fff'}],
    ]);
  });

  it('should call on press', () => {
    render(<CategoryCard {...baseProps} />);
    const pressable = screen.getByTestId('category-card-pressable');
    fireEvent.press(pressable);
    expect(baseProps.onPress).toHaveBeenCalled();
  });
});
