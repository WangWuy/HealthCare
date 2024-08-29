/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
// import Config from 'react-native-config';

AppRegistry.registerComponent(appName, () => App);

// GoogleSignin.configure({
// 	webClientId: Config.GOOGLE_WEB_CLIENT_ID,
// 	offlineAccess: true,
// 	forceConsentPrompt: true,
// 	iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
// 	androidClientId: Config.GOOGLE_ANDROID_CLIENT_ID,
//     scopes: ['profile', 'email'],
// });