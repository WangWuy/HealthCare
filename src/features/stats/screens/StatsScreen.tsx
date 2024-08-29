import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import { Colors } from '../../../assets/colors/Colors';
import styles from './StatsScreen.style';
import IconCaretDown from '../../../assets/icons/ic-caret-down.svg';
import CalorieIntakeChart from '../components/CalorieIntakeChart';
import MacroBalanceChart from '../components/MacroBalanceChart';

 const renderHeader = () => (
  <View style={styles.headerRightContent}>
    <TouchableOpacity onPress={() => { }}>
      <IconCaretDown width={24} height={24} />
    </TouchableOpacity>
  </View>
);

const StatsScreen = () => {
  return (
    <BaseContainer
      isShowHeader={true}
      headerTittle="Tuần này"
      isShowLeftIcon={false}
      headerTittleStyle={styles.headerStyle}
      headerTittleTextStyle={styles.headerTitleText}
      renderRightContent={renderHeader()}
      backgroundColorStatus={Colors.green[600]}
    >
      <ScrollView style={styles.scrollView}>
        <CalorieIntakeChart/>
        <MacroBalanceChart/>
      </ScrollView>
    </BaseContainer>
  );
}
export default StatsScreen;