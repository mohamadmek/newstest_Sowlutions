import React, {ComponentProps} from 'react';
import {render} from '@testing-library/react-native';
import {Card} from './Card';
import {expectTextToBePresent} from '../../../common/components';

const baseProps: ComponentProps<typeof Card> = {
  article: {
    title: 'Title',
    image: 'https://www.google.com',
    url: 'https://www.google.com',
    content: 'Content',
    description: 'Description',
    source: {
      name: 'Source',
      url: 'https://www.google.com',
    },
    publishedAt: '2024-02-24T00:00:00Z',
  },
};

it('should render correct values', () => {
  render(<Card {...baseProps} />);
  expectTextToBePresent('card-title', {text: baseProps.article.title});
  expectTextToBePresent('card-source-name', {
    text: baseProps.article.source.name,
  });
  expectTextToBePresent('card-date', {text: 'Feb. 24, 2024'});
});
