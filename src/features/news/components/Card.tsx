import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  FlexBetween,
  FlexColumn,
  FlexStart,
  Text,
} from '../../../common/components';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';
import {IArticle} from '../types';

interface ICardProps {
  article: IArticle;
}

export const Card = ({article}: ICardProps) => {
  return (
    <FlexBetween style={styles.card}>
      <FlexColumn style={styles.introduction}>
        <Text numberOfLines={3} type="SUBTITLE1" bold style={styles.title}>
          {article.title}
        </Text>
        <FlexStart>
          <Image
            source={{
              uri: article.image,
            }}
            style={styles.authorImage}
          />
          <FlexColumn style={styles.authorInfoContainer}>
            <Text type="BODY4" numberOfLines={1} bold>
              {article.source.name}
            </Text>
            <Text style={styles.date}>
              {dayjs(article.publishedAt).format('MMM. DD, YYYY')}
            </Text>
          </FlexColumn>
        </FlexStart>
      </FlexColumn>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: article.image,
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
  title: {lineHeight: 23, color: '#494949'},
  imageContainer: {flex: 0.8},
  image: {width: '100%', height: 110, borderRadius: 8},
  authorImage: {width: 40, height: 40, borderRadius: 8},
  authorInfoContainer: {gap: 4},
  date: {color: '#929292'},
});
