/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from './TabBarIcon';

import HomePage from '../../pages/Home.page';

const HomeStack = createStackNavigator({
  Home: HomePage,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
    />
  ),
};

const CategoriesStack = createStackNavigator({
  Categories: HomePage,
});

CategoriesStack.navigationOptions = {
  tabBarLabel: 'Categorias',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'md-pricetags'}
    />
  ),
};

const ShopsStack = createStackNavigator({
  Settings: HomePage,
});

ShopsStack.navigationOptions = {
  tabBarLabel: 'Tiendas',
  headerTintColor: 'red',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'md-basket'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Settings: HomePage,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'md-contact'}
    />
  ),
};

const bottomTabNavigator = createBottomTabNavigator({
  HomeStack,
  CategoriesStack,
  ShopsStack,
  ProfileStack
},
{
  initialRouteName: 'HomeStack',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray'
  }
});

export default bottomTabNavigator;