import React from 'react';
import {CenteredView, Text} from '..';

export const NoData = ({text}: {text: string}) => {
  return (
    <CenteredView>
      <Text bold>{text}</Text>
    </CenteredView>
  );
};
