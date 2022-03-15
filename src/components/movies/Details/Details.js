import React from 'react';
import {StyleSheet, View} from 'react-native';
import Poster from './Poster';
import Play from './Play';
import Overview from './Overview';
import ReleaseDate from './ReleaseDate';

export default function Details({children}) {
  return <>{children}</>;
}

function Head({children}) {
  return <View style={styles.head}>{children}</View>;
}

function MoreInfo({children}) {
  return <View style={styles.moreInfo}>{children}</View>;
}

Details.Poster = Poster;
Details.Play = Play;
Details.Head = Head;
Details.MoreInfo = MoreInfo;
Details.Overview = Overview;
Details.ReleaseDate = ReleaseDate;

const styles = StyleSheet.create({
  head: {
    marginHorizontal: 30,
  },
  moreInfo: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
