import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BaseContainer from '../../../components/BaseContainer';
import styles from '../../profile/screens/ProfileScreen.style';
import MenuItem from '../components/MenuItem';

// Import Icon 
import IconArrowRight from '../../../assets/icons/ic-arrow-right-gray.svg';
import IconProfile from '../../../assets/icons/ic-profile-green.svg';
import IconTarget from '../../../assets/icons/ic-trophy.svg';
import IconHealthData from '../../../assets/icons/ic-hand-holding-heart.svg';
import IconCollection from '../../../assets/icons/ic-collection.svg';
import IconGallery from '../../../assets/icons/ic-gallery.svg';
import IconFeedback from '../../../assets/icons/ic-feedback.svg';
import IconSetting from '../../../assets/icons/ic-settings.svg';

import { MODULE } from '../../../constants/ModuleConstants';
import { TitleMenuConstants } from '../../../constants/TitleMenuConstants';
import { UserCache } from '../../../storages/Storages';

const ProfileScreen = () => {
  const navigation = useNavigation();

  function handleNavigate(tab: string) {
    switch (tab) {
      case MODULE.DETAILED_PROFILE_SCREEN:
        navigation.navigate(MODULE.DETAILED_PROFILE_SCREEN as never);
        break;
      case MODULE.LOGIN_SCREEN:
        navigation.navigate(MODULE.LOGIN_SCREEN as never);
        break;
      case TitleMenuConstants.TOTAL_TARGET_TITLE:
        navigation.navigate(MODULE.TOTAL_TARGET_SCREEN as never);
        break;
      case TitleMenuConstants.HEALTH_DATA_TITLE:
        navigation.navigate(MODULE.HEALTH_DATA_SCREEN as never);
        break;
      case TitleMenuConstants.MY_COLLECTION_TITLE:
        navigation.navigate(MODULE.MY_COLLECTION_SCREEN as never);
        break;
      case TitleMenuConstants.PROCESS_IMAGE_TITLE:
        navigation.navigate(MODULE.PROCESS_IMAGE_SCREEN as never);
        break;
      case TitleMenuConstants.SETTING_APP_TITLE:
        navigation.navigate(MODULE.SETTING_APP_SCREEN as never);
        break;
      default:
        break;
    }
  }
  
  return (
    <BaseContainer
      headerTittle='Hồ sơ'
      headerTittleStyle={styles.headerStyle}
      headerTittleTextStyle={styles.headerTitleText}
      isShowLeftIcon={false}
    >
      <ScrollView>

        <View style={styles.accountInfo}>
          <Text style={styles.accountText}>Tài khoản HealthCare: {UserCache.getInstance.getUserCache().id}</Text>
          <TouchableOpacity>
            {/* <Copy size={20} /> */}
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Image
            source={{ uri: UserCache.getInstance.getUserCache().avatar }}
            style={styles.avatar}
          />
          <View style={styles.userTextInfo}>
            <Text style={styles.userName}>{UserCache.getInstance.getUserCache().last_name}</Text>
            <Text style={styles.userEmail}>{UserCache.getInstance.getUserCache().email}</Text>
          </View>
          <TouchableOpacity
            onPress={() => { handleNavigate(MODULE.DETAILED_PROFILE_SCREEN) }}
          >
            <IconArrowRight style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

        <View style={styles.upgradeCard}>
          <Text style={styles.upgradeTitle}>Nâng cấp HealthCare Pro</Text>
          <Text style={styles.upgradeDescription}>Truy cập không giới hạn mọi tính năng</Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Nâng cấp ngay</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItems}>
          <MenuItem icon={<IconTarget style={styles.iconStyle} />} title={TitleMenuConstants.TOTAL_TARGET_TITLE}
            handleNavigate={() => handleNavigate(TitleMenuConstants.TOTAL_TARGET_TITLE)}
          />
          <MenuItem icon={<IconHealthData style={styles.iconStyle} />} title={TitleMenuConstants.HEALTH_DATA_TITLE}
            handleNavigate={() => handleNavigate(TitleMenuConstants.HEALTH_DATA_TITLE)}
          />
          <MenuItem icon={<IconCollection style={styles.iconStyle} />} title={TitleMenuConstants.MY_COLLECTION_TITLE}
            handleNavigate={() => handleNavigate(TitleMenuConstants.MY_COLLECTION_TITLE)}
          />
          <MenuItem icon={<IconGallery style={styles.iconStyle} />} title={TitleMenuConstants.PROCESS_IMAGE_TITLE}
            handleNavigate={() => handleNavigate(TitleMenuConstants.PROCESS_IMAGE_TITLE)}
          />
        </View>

        <View style={styles.menuItems}>
          <MenuItem icon={<IconFeedback style={styles.iconStyle} />} title="Hỗ trợ và phản hồi"
            handleNavigate={() => handleNavigate('')}
          />
          <MenuItem icon={<IconSetting style={styles.iconStyle} />} title={TitleMenuConstants.SETTING_APP_TITLE}
            handleNavigate={() => handleNavigate(TitleMenuConstants.SETTING_APP_TITLE)}
          />
        </View>

        <TouchableOpacity style={styles.logoutButton}
          onPress={() => {
            console.log('logout');
            handleNavigate(MODULE.LOGIN_SCREEN); 
            UserCache.getInstance.deleteUserCache(); }}
        >
          <Text style={styles.logoutButtonText}>{TitleMenuConstants.LOGOUT}</Text>
        </TouchableOpacity>
      </ScrollView>
    </BaseContainer>
  );
}

export default ProfileScreen;
