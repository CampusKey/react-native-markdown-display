import {Linking} from 'react-native';

export default function openUrl(url, customCallback) {
  if (customCallback) {
    customCallback(url);
  } else if (url) {
    Linking.openURL(url);
  }
}
