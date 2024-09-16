import { View, Text, Image, FlatList, StyleSheet, Platform, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';

import { Colors } from '../../../assets/colors/Colors';
import FoodItemData from '../../../types/FoodItemData';
import { MODULE } from '../../../constants/ModuleConstants';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const FoodItem: React.FC<{ item: FoodItemData }> = ({ item }) => {
  const navigation = useNavigation<any>();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleNavigateToDetailFood = () => {
    navigation.navigate(MODULE.DETAIL_FOOD_SCREEN, {
      foodItem: item,
    });
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedTouchable
      onPress={handleNavigateToDetailFood}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.itemContainer,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.protein} · {item.calories} Calo</Text>
      </View>
    </AnimatedTouchable>
  );
}

export default FoodItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.gray[300],
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 12,
    ...Platform.select({
      ios: {
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: Colors.gray[500],
  },
});