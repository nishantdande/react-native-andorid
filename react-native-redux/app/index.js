import React from 'react';
import { StyleSheet, View, Platform, NativeModules } from 'react-native';
import List from './components/listview/ListViewDemo'

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop : STATUSBAR_HEIGHT
  },
});
