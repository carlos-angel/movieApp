import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useTheme} from 'hooks/useTheme';

export default function ButtonLoadMore(props) {
  const {disabled, loading, onPress, children} = props;
  const {isDarkTheme} = useTheme();
  return (
    <Button
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      mode="contained"
      contentStyle={styles.buttonMoreMovies}
      style={styles.loadMoreMovies}
      labelStyle={
        isDarkTheme ? styles.labelButtonDark : styles.labelButtonLight
      }>
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonMoreMovies: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  loadMoreMovies: {
    backgroundColor: 'transparent',
  },
  labelButtonDark: {
    color: '#fff',
  },
  labelButtonLight: {
    color: '#000',
  },
});
