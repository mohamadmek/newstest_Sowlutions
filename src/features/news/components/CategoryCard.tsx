import {Pressable, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {Text} from '../../../common/components';

interface ICategoryCardProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export const CategoryCard = ({
  title,
  isSelected,
  onPress,
}: ICategoryCardProps) => {
  const containerStyles: ViewStyle = {
    backgroundColor: isSelected ? '#079E01' : '#fff',
  };
  const textStyles: TextStyle = {color: isSelected ? '#fff' : '#079E01'};
  return (
    <Pressable testID="category-card-pressable" onPress={onPress}>
      <View
        testID="category-card-container"
        style={[styles.container, containerStyles]}>
        <Text
          testID="category-card-text"
          bold
          style={[styles.text, textStyles]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 5,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#079E01',
  },
});
