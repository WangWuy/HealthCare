import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {
  LayoutChangeEvent,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../assets/colors/Colors';
import {FontSizes} from '../assets/dimens/FontsSize';
import {IconsSize} from '../assets/dimens/IconsSize';
import {Spacings} from '../assets/dimens/Spacing';
import IconBack from '../assets/icons/ic-back.svg';
import Divider from './Divider';

interface BaseContainerProps {
  children?: ReactNode;
  isHiddenStatusBar?: boolean;
  backgroundColorStatus?: string;
  statusBarStyleDark?: boolean;
  isShowHeader?: boolean;
  headerTittle?: string;
  subHeaderTittle?: string;  // New prop for subHeaderTitle
  headerTittleStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  headerTittleTextStyle?: StyleProp<TextStyle>;
  subHeaderTittleTextStyle?: StyleProp<TextStyle>;  // New prop for subHeaderTitle style
  onLeftIcon?: Function;
  isShowLeftIcon?: boolean;
  iconLeftStyle?: StyleProp<ViewStyle>;
  isHaveNavigate?: boolean;
  onLayoutView?: (event: LayoutChangeEvent) => void;
  renderRightContent?: ReactNode;
}

const BaseContainer = ({
  children = <></>,
  isHiddenStatusBar = false,
  backgroundColorStatus = Colors.light,
  statusBarStyleDark = true,
  isShowHeader = true,
  headerTittle = '',
  subHeaderTittle = '',  // Default value for subHeaderTitle
  headerTittleStyle = styles.defaultTittleStyle as StyleProp<ViewStyle>,
  titleContainerStyle = styles.titleContainer as StyleProp<ViewStyle>,
  headerTittleTextStyle = styles.defaultTittleTextStyle as StyleProp<TextStyle>,
  subHeaderTittleTextStyle = styles.defaultSubTittleTextStyle as StyleProp<TextStyle>,  // Default style for subHeaderTitle
  onLeftIcon,
  isShowLeftIcon = true,
  iconLeftStyle = styles.defaultIconLeftStyle,
  isHaveNavigate = false,
  onLayoutView = undefined,
  renderRightContent,
}: BaseContainerProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  function backPress() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarStyleDark ? Colors.light : Colors.dark,
      }}
      edges={
        isHaveNavigate
          ? ['right', 'left', 'top']
          : ['right', 'left', 'top', 'bottom']
      }>
      <StatusBar
        backgroundColor={backgroundColorStatus}
        barStyle={statusBarStyleDark ? 'dark-content' : 'light-content'}
        hidden={isHiddenStatusBar}
      />
      {isShowHeader && (
        <View onLayout={onLayoutView}>
          <View style={headerTittleStyle}>
            {isShowLeftIcon && (
              <TouchableOpacity
                onPress={() =>
                  onLeftIcon != undefined ? onLeftIcon() : backPress()
                }
                style={iconLeftStyle}>
                <IconBack width={IconsSize.sm} height={IconsSize.sm} />
              </TouchableOpacity>
            )}
            <View style={titleContainerStyle}>
              <Text style={headerTittleTextStyle}>{headerTittle}</Text>
              {subHeaderTittle && (
                <Text style={subHeaderTittleTextStyle}>{subHeaderTittle}</Text>
              )}
            </View>
            {renderRightContent ?? renderRightContent}
          </View>
          <Divider size={0} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};

export default BaseContainer;

const styles = StyleSheet.create({
  defaultTittleStyle: {
    width: '100%',
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
  },
  defaultTittleTextStyle: {
    color: Colors.primary,
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
    paddingVertical: Spacings.xm,
    paddingHorizontal: Spacings.md,
  },
  defaultSubTittleTextStyle: {
    color: Colors.gray[600],  // Lighter color for subHeaderTitle
    fontSize: FontSizes.sm,
    textAlign: 'left', // Changed from 'center' to 'left'
    paddingHorizontal: Spacings.md,
    paddingBottom: Spacings.xm,
  },
  defaultIconLeftStyle: {
    width: IconsSize.xl,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green[400],
  },
});