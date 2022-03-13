import React from 'react';
import {StyleSheet} from 'react-native';
import {Rating as ReactNativeRating} from 'react-native-ratings';
import {useTheme} from 'hooks/useTheme';
import starDark from 'assets/png/starDark.png';
import starLight from 'assets/png/starLight.png';

export default function Rating({startingValue, imageSize}) {
  const {isDarkTheme} = useTheme();

  return (
    <ReactNativeRating
      type="custom"
      ratingImage={isDarkTheme ? starDark : starLight}
      ratingColor="#ffc205"
      ratingBackgroundColor={isDarkTheme ? '#192734' : '#f0f0f0'}
      startingValue={startingValue}
      imageSize={imageSize}
      style={styles.rating}
    />
  );
}

const styles = StyleSheet.create({
  rating: {marginRight: 15},
});
