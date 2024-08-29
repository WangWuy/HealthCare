import { View, Text, Image, FlatList, StyleSheet, Platform } from 'react-native';
import { Colors } from '../../../assets/colors/Colors';
import FoodItemData from '../../../types/FoodItemData';

const FoodItem: React.FC<{ item: FoodItemData }> = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{uri: item.avatar }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>{item.protein} · {item.calories} Calo</Text>
    </View>
  </View>
);

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