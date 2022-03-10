import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical(props) {
  const {data, renderItem} = props;
  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
}
