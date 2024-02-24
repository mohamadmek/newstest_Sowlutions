import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  FlexBetween,
  FlexColumn,
  FlexStart,
  Text,
} from '../../../common/components';
import dayjs from 'dayjs';

export const Card = () => {
  return (
    <FlexBetween style={styles.card}>
      <FlexColumn style={styles.introduction}>
        <Text numberOfLines={3} type="SUBTITLE1" bold style={styles.title}>
          Fresh workers raises $150M Series H on $3.50 valuation
        </Text>
        <FlexStart>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.authorImage}
          />
          <FlexColumn style={styles.authorInfoContainer}>
            <Text>Ron Miller</Text>
            <Text>{dayjs('2024-02-22T17:24:01Z').format('MMM. DD, YYYY')}</Text>
          </FlexColumn>
        </FlexStart>
      </FlexColumn>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.image}
        />
      </View>
    </FlexBetween>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 12,
  },
  introduction: {
    flex: 1,
  },
  title: {lineHeight: 23},
  imageContainer: {flex: 0.8},
  image: {width: '100%', height: 110, borderRadius: 8},
  authorImage: {width: 40, height: 40, borderRadius: 8},
  authorInfoContainer: {gap: 4},
});
