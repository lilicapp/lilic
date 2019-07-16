/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from './TabBarIcon';

import HomePage from '../../pages/Home.page';
import CategoriesPage from '../../pages/Categories.page';
import ProfilePage from '../../pages/Profile.page';

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
  Categories: CategoriesPage,
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
  Shops: HomePage,
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
  Profile: ProfilePage,
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