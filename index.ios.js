/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ToDo from './app/components/toDo.js'

const ToDoAppReactNative = () =>
  <ToDo/>

AppRegistry.registerComponent('ToDoAppReactNative', () => ToDoAppReactNative);
