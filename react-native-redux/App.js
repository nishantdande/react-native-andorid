// import Home from './app/screens/screen';
// import Home from './app/index';
import Home from './app/components/listview/FlatListDemo';
import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './app/config/configureStore'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default ReduxApp
