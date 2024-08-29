import { Badge, Box, Text, VStack } from '@gluestack-ui/themed-native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useRecoilState } from 'recoil';
import { BaseResponse, isSuccess } from '../api/BaseResponse';

// Import Dimens, Colors
import { Colors } from '../assets/colors/Colors';
import { FontSizes } from '../assets/dimens/FontsSize';
import { Spacings } from '../assets/dimens/Spacing';

// Import Icon
import IconDiary from '../assets/icons/ic-diary.svg';
import IconDiaryActive from '../assets/icons/ic-diary-green.svg';
import IconStats from '../assets/icons/ic-stats.svg';
import IconStatsActive from '../assets/icons/ic-stats-green.svg';
import IconWorkout from '../assets/icons/ic-workout.svg';
import IconWorkoutActive from '../assets/icons/ic-workout-green.svg';
import IconProfile from '../assets/icons/ic-profile.svg';
import IconProfileActive from '../assets/icons/ic-profile-green.svg';

// Import Screens
import DiaryScreen from '../features/diary/screens/DiaryScreen';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import StatsScreen from '../features/stats/screens/StatsScreen';
import RecipesScreen from '../features/recipes/screens/RecipesScreen';

import { MODULE } from '../constants/ModuleConstants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabRoute = () => {

  function renderTabIcon(
    isSelected: boolean,
    iconColor: string,
    iconSize: number,
    IconActive: React.FC<SvgProps>,
    IconInActive: React.FC<SvgProps>,
  ) {
    return isSelected ? (
      <IconActive width={iconSize} height={iconSize} fill={iconColor} />
    ) : (
      <IconInActive width={iconSize} height={iconSize} fill={iconColor} />
    );
  }

  function renderTabLabel(labelColor: string, labelString: string) {
    return (
      <Text
        style={{
          color: labelColor,
          fontSize: FontSizes['2xs'],
          fontStyle: 'normal',
          fontWeight: 'bold',
        }}>
        {labelString}
      </Text>
    );
  }

  return (
        <Tab.Navigator
          initialRouteName={MODULE.DIARY_SCREEN}
          screenOptions={{
            headerShown: false,
            lazy: true,
          }}
        >
          <Tab.Screen
            name={MODULE.DIARY_SCREEN}
            component={DiaryScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                renderTabIcon(focused, color, size, IconDiaryActive, IconDiary),
              tabBarLabel: ({ color }) => renderTabLabel(color, 'Nhật ký'),
              tabBarActiveTintColor: Colors.green[600],
              tabBarInactiveTintColor: Colors.gray[400],
              tabBarStyle: styles.tabContainer,
            }}
          />
          <Tab.Screen
            name={MODULE.STATS_SCREEN}
            component={StatsScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                renderTabIcon(focused, color, size, IconStatsActive, IconStats),
              tabBarLabel: ({ color }) => renderTabLabel(color, 'Biểu đồ'),
              tabBarActiveTintColor: Colors.green[600],
              tabBarInactiveTintColor: Colors.gray[400],
              tabBarStyle: styles.tabContainer,
            }}
          />
          <Tab.Screen
            name={MODULE.RECIPES_SCREEN}
            component={RecipesScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                renderTabIcon(focused, color, size, IconWorkoutActive, IconWorkout),
              tabBarLabel: ({ color }) => renderTabLabel(color, 'Tập luyện'),
              tabBarActiveTintColor: Colors.green[600],
              tabBarInactiveTintColor: Colors.gray[400],
              tabBarStyle: styles.tabContainer,
            }}
          />
          <Tab.Screen
            name={MODULE.PROFILE_SCREEN}
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                renderTabIcon(focused, color, size, IconProfileActive, IconProfile),
              tabBarLabel: ({ color }) => renderTabLabel(color, 'Tài khoản'),
              tabBarActiveTintColor: Colors.green[600],
              tabBarInactiveTintColor: Colors.gray[400],
              tabBarStyle: styles.tabContainer,
            }}
          />
        </Tab.Navigator>
  );
};

export default HomeTabRoute;

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: Spacings.sm,
  },
});
