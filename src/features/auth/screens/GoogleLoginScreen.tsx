import React, { useState, useEffect } from 'react';
import { GoogleSigninButton, GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import BaseContainer from '../../../components/BaseContainer';
import auth from '@react-native-firebase/auth';

import IconGoogle from '../../../assets/icons/ic-google.svg';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Colors } from '../../../assets/colors/Colors';
import { FontSizes } from '../../../assets/dimens/FontsSize';
import { UserCache } from '../../../storages/Storages';
import { MODULE } from '../../../constants/ModuleConstants';
import { getDetaiUserApi, postLoginApi } from '../api/LoginApi';
import { BaseResponse, isSuccess } from '../../../api/BaseResponse';
import { useSetRecoilState } from 'recoil';
import { loadingState } from '../../../states/States';
import { showToast } from '../../../utils/ToastUtils';

interface GoogleLoginScreenProps {
  navigation: any;
}

const GoogleLoginScreen: React.FC<GoogleLoginScreenProps> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  const setLoadingState = useSetRecoilState(loadingState);

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const configureGoogleSignIn = async () => {
    try {
      await GoogleSignin.configure({
        webClientId: process.env.GOOGLE_CLIENT_ID,
        offlineAccess: true,
        scopes: ['profile', 'email']
      });
    } catch (error) {
      console.error('Google Sign-In configuration error:', error);
    }
  };

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      // const { idToken } = await GoogleSignin.signIn();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;
      if (idToken) {
        handleLoginApi(idToken);
        
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      } else {
        throw new Error('Failed to get ID token');
      }
    } catch (error) {
      console.error('Google Sign-In error:', error);
      throw error;
    }
  }

  const handleLoginApi = (idToken: string) => {
    postLoginApi(idToken)
      .then((res: BaseResponse<any>) => {        
        if (isSuccess(res)) {
          UserCache.getInstance.saveAccessTokenCache(idToken);
          handleGetDetailUserApi();
          setLoadingState(false);
          showToast('Đăng nhập thành công', 3000, 'success');
        } else {
          setLoadingState(false);
          showToast('Đã có lỗi xảy ra', 3000, 'error');
        }
      })
      .catch(error => {
        setLoadingState(false);
        console.log(error);
        showToast('Đã có lỗi xảy ra, vui lòng thử lại sau');
      });
  };

  const handleGetDetailUserApi = () => {
    getDetaiUserApi()
      .then((res: BaseResponse<any>) => {
        if (isSuccess(res)) {
          UserCache.getInstance.saveUserCache(res.data);
          navigation.navigate(MODULE.HOME_TAB as never);
        }
      })
      .catch(error => {
        setLoadingState(false);
        console.log(error);
        showToast('Đã có lỗi xảy ra, vui lòng thử lại sau');
      });
  };

  return (
    <BaseContainer
      isShowHeader={false}
      isHiddenStatusBar={true}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>H</Text>
        </View>
        <Text style={styles.appName}>Health Care</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.input}
            onPress={() => onGoogleButtonPress()}
          >
            <IconGoogle width={FontSizes['5xl']} height={FontSizes['5xl']} />
            <Text style={styles.buttonText}>Đăng nhập với Google</Text>
          </TouchableOpacity>
        </View>
      </View>

    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    color: Colors.light,
    fontSize: 150,
  },
  appName: {
    fontSize: FontSizes['5xl'],
    fontWeight: 'bold',
    marginBottom: 40,
    color: Colors.light,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  input: {
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    color: Colors.light,
    textDecorationLine: 'underline',
  },
  buttonText: {
    color: Colors.blue[500],
    marginLeft: 10,
    fontSize: FontSizes.lg,
  },
});

export default GoogleLoginScreen;