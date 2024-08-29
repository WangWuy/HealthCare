import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import IconAdd from '../../../assets/icons/ic-add.svg';
import IconMoreMenu from '../../../assets/icons/ic-more-menu.svg';

import { Colors } from '../../../assets/colors/Colors';
import { useNavigation } from '@react-navigation/native';
import { MODULE } from '../../../constants/ModuleConstants';
import { UserCache } from '../../../storages/Storages';

const MealItem = ({ title, calories, handleNavigate }: { title: string; calories: string, handleNavigate: () => void }) => (
  <View style={styles.mealItem}>
    <View>
      <Text style={styles.mealTitle}>{title}</Text>
      <Text style={styles.mealCalories}>Gợi ý: {calories} Cal</Text>
    </View>
    <TouchableOpacity
      onPress={
        () => {
          handleNavigate();
        }
      }
    >
      <IconAdd width={24} height={24} />
    </TouchableOpacity>
  </View>
);

const WeightItem = ({ weight }: { weight: string }) => (
  <View style={styles.weightItem}>
    <View>
      <Text style={styles.weightTitle}>Cân nặng</Text>
      <Text style={styles.weightValue}>Gần nhất: {weight}kg</Text>
    </View>
    <TouchableOpacity>
      <Text style={styles.logWeight}>Cập nhật</Text>
    </TouchableOpacity>
  </View>
);

const WaterItem = ({ current, target }: { current: string; target: string }) => (
  <View style={styles.waterItem}>
    <View style={styles.waterHeader}>
      <Text style={styles.waterTitle}>Uống nước</Text>
      <IconMoreMenu width={24} height={24} />
    </View>
    <View style={styles.waterContent}>
      <Text style={styles.waterValue}>{current} / {target} ml</Text>
      <View style={styles.waterButtons}>
        <TouchableOpacity style={styles.waterButton}
          
        >
          <IconAdd width={24} height={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.waterButton}>
          <IconAdd width={24} height={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const MealList = () => {
  const navigation = useNavigation();

  function handleNavigate(tab: string) {
    switch (tab) {
      case 'foodScreen':
        navigation.navigate(MODULE.FOOD_SCREEN as never);
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
        <WaterItem current="0" target="2541" />
        <MealItem title="Bữa sáng" calories="892" handleNavigate={() => handleNavigate('foodScreen')} />
        <MealItem title="Bữa trưa" calories="1041" handleNavigate={() => handleNavigate('foodScreen')} />
        <MealItem title="Bữa tối" calories="743" handleNavigate={() => handleNavigate('foodScreen')} />
        <MealItem title="Ăn nhẹ" calories="297" handleNavigate={() => handleNavigate('foodScreen')} />
        <WeightItem weight="70,0" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.light,
  },
  shadowProps: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  mealItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray[300],
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
    }),
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealCalories: {
    color: 'gray',
  },
  weightItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray[300],
    padding: 15,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  weightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weightValue: {
    color: 'gray',
  },
  logWeight: {
    color: 'green',
    fontWeight: 'bold',
  },
  waterItem: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
    }),
  },
  waterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  waterTitle: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  waterContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  waterValue: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  waterButtons: {
    flexDirection: 'row',
  },
  waterButton: {
    marginLeft: 10,
  },
});

export default MealList;