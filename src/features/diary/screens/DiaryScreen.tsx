import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import { Colors } from '../../../assets/colors/Colors';
import IconCalendar from '../../../assets/icons/ic-calendar.svg';
import IconArrowLeft from '../../../assets/icons/ic-arrow-left.svg';
import IconArrowRight from '../../../assets/icons/ic-arrow-right.svg';

import styles from './DiaryScreen.style';
import { PieChart } from 'react-native-svg-charts';
import MealList from '../components/MealList';
import { useNavigation } from '@react-navigation/native';
import { MODULE } from '../../../constants/ModuleConstants';
import { UserCache } from '../../../storages/Storages';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const DiaryScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const macroData = [
    {
      key: 1,
      value: 278,
      svg: { fill: '#FF6384' },
      arc: { cornerRadius: 5 },
      label: 'Carbs'
    },
    {
      key: 2,
      value: 208,
      svg: { fill: '#36A2EB' },
      arc: { cornerRadius: 5 },
      label: 'Chất đạm'
    },
    {
      key: 3,
      value: 93,
      svg: { fill: '#FFCE56' },
      arc: { cornerRadius: 5 },
      label: 'Chất béo'
    }
  ];

  const totalCalories = macroData.reduce((sum, item) => sum + item.value, 0);

  // function handleNavigate(tab: string) {
  //   switch (tab) {
  //     case 'foodScreen':
  //       navigation.navigate(MODULE.FOOD_SCREEN as never);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  const renderHeader = () => (
    <View style={styles.headerRightContent}>
      <TouchableOpacity onPress={() => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 1);
        setSelectedDate(newDate);
      }}>
        <IconArrowLeft width={24} height={24} />
      </TouchableOpacity>
      <Text style={styles.dateText}>{selectedDate.toLocaleDateString()}</Text>
      <TouchableOpacity onPress={() => {
          }}>
        <IconCalendar
          style={styles.calendarIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 1);
        setSelectedDate(newDate);
      }}>
        <IconArrowRight width={24} height={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <BaseContainer
      isShowHeader={true}
      headerTittle="Hôm nay"
      isShowLeftIcon={false}
      headerTittleStyle={styles.headerStyle}
      headerTittleTextStyle={styles.headerTitleText}
      renderRightContent={renderHeader()}
      backgroundColorStatus={Colors.green[600]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.chartAndStatsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statText}>đã nạp</Text>
            </View>
            <View style={styles.chartContainer}>
              <PieChart
                style={styles.chart}
                data={macroData}
                innerRadius="70%"
                padAngle={0.01}
              />
              <View style={styles.chartCenter}>
                <Text style={styles.totalCalories}>{totalCalories}</Text>
                <Text style={styles.caloriesLabel}>cần nạp</Text>
              </View>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statText}>tiêu hao</Text>
            </View>
          </View>

          <View style={styles.macrosContainer}>
            {macroData.map((item) => (
              <MacroItem
                key={item.key}
                name={item.label}
                current={0}
                total={item.value}
                color={item.svg.fill}
              />
            ))}
          </View>
        </View>

        <MealList/>

      </ScrollView>
    </BaseContainer>
  );
};

const MacroItem = ({ name, current, total, color }: { name: string; current: number; total: number; color: string }) => (
  <View style={styles.macroItem}>
    <View style={styles.macroHeader}>
      <View style={[styles.macroColor, { backgroundColor: color }]} />
      <Text style={styles.macroName}>{name}</Text>
    </View>
    <View style={styles.macroBar}>
      <View style={[styles.macroProgress, { width: `${(current / total) * 100}%`, backgroundColor: color }]} />
    </View>
    <Text style={styles.macroText}>{current} / {total}</Text>
  </View>
);

export default DiaryScreen;