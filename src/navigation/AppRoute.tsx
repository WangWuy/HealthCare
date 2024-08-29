import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MODULE } from '../constants/ModuleConstants';
import HomeTabRoute from './HomeTabRoute';
import { UserCache } from '../storages/Storages';

import LoginScreen from '../features/auth/screens/GoogleLoginScreen';
import FoodScreen from '../features/diary/screens/food-screen/FoodScreen';
import AddNewFoodScreen from '../features/diary/screens/add-new-food-screen/AddNewFoodScreen';
import CreateFoodScreen from '../features/diary/screens/create-food-screen/CreateFoodScreen';
import CreateMealScreen from '../features/diary/screens/create-meal-screen/CreateMealScreen';
import DetailedProfileScreen from '../features/profile/screens/detailed-profile/DetailedProfileScreen';
import TotalTargetScreen from '../features/profile/screens/setting-target/SettingTargetScreen';
import HealthDataScreen from '../features/profile/screens/health-data/HealthDataScreen';
import MyCollectionScreen from '../features/profile/screens/my-collection/MyCollectionScreen';
import ProcessImageScreen from '../features/profile/screens/process-image/ProcessImageScreen';
import SettingAppScreen from '../features/profile/screens/setting-app/SettingAppScreen';
import DiaryScreen from '../features/diary/screens/DiaryScreen';

const Stack = createStackNavigator();

const AppRoute: React.FC = () => {
  console.log(UserCache.getInstance.checkUserLogin() ? 'User login' : 'User not login');
  return (
    <Stack.Navigator
      initialRouteName={
        UserCache.getInstance.checkUserLogin()
        ? MODULE.HOME_TAB
        : MODULE.LOGIN_SCREEN
      } 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={MODULE.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={MODULE.HOME_TAB} component={HomeTabRoute} />
      
      <Stack.Screen name={MODULE.DIARY_SCREEN} component={DiaryScreen} />
      <Stack.Screen name={MODULE.FOOD_SCREEN} component={FoodScreen} />
      <Stack.Screen name={MODULE.ADD_NEW_FOOD_SCREEN} component={AddNewFoodScreen} />
      <Stack.Screen name={MODULE.CREATE_FOOD_SCREEN} component={CreateFoodScreen} />
      <Stack.Screen name={MODULE.CREATE_MEAL_SCREEN} component={CreateMealScreen} />
      <Stack.Screen name={MODULE.DETAILED_PROFILE_SCREEN} component={DetailedProfileScreen} />
      <Stack.Screen name={MODULE.TOTAL_TARGET_SCREEN} component={TotalTargetScreen} />
      <Stack.Screen name={MODULE.HEALTH_DATA_SCREEN} component={HealthDataScreen} />
      <Stack.Screen name={MODULE.MY_COLLECTION_SCREEN} component={MyCollectionScreen} />
      <Stack.Screen name={MODULE.PROCESS_IMAGE_SCREEN} component={ProcessImageScreen} />
      <Stack.Screen name={MODULE.SETTING_APP_SCREEN} component={SettingAppScreen} />

    </Stack.Navigator>
  );
};

export default AppRoute;