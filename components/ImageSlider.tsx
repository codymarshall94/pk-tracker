import React, { useRef } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";

const { width } = Dimensions.get("screen");

const SlideItem = ({ image }: { image: any }) => {
  return <Image source={image} style={styles.image} contentFit="cover" />;
};

const ImageSlider = ({ images }: { images: any }) => {
  const flatListRef = useRef<FlatList | null>(null);

  return (
    <View style={styles.container}>
      <Carousel
        mode="parallax"
        width={width - 32}
        height={200}
        data={images}
        renderItem={({ item }) => <SlideItem image={item} />}
        onSnapToItem={(index) => {
          flatListRef.current?.scrollToIndex({ index });
        }}
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
});

export default ImageSlider;
