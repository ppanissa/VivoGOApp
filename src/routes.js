import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { Feather as DrawerIcon } from '@expo/vector-icons';
import colors from './styles/colors';
// Side Bar Drawer
import SideBar from './components/SideBar';
// Auth Routes
import AuthLogin from '~/screens/Auth/Login';
/**
 * Drawer Routes Components
 */
import Main from '~/screens/Main';
import Reports from '~/screens/Reports';
import ConfigNotificacao from '~/screens/Config/Notificacao';
/**
 * Stack Routes Components
 */
import ReportMetaFilial from '~/screens/Reports/Meta/Filial';
import ReportMetaVendedor from '~/screens/Reports/Meta/Vendedor';

/**
 * Page Remove Drawer Menu
 */
const hiddenDrawerItems = [];

/**
 *
 * @param {*} drawerPosition
 */
const AppStack = createStackNavigator(
  {
    ReportMetaFilial,
    ReportMetaVendedor,
  },
  {
    headerMode: 'none',
  }
);

/**
 * Drawer
 * Registre aqui as screens
 * @param {state} drawerPosition left | right
 */
const AppDrawer = drawerPosition =>
  createDrawerNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Home',
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name="home" size={16} color={tintColor} />
          ),
        },
      },
      Reports: {
        screen: Reports,
        navigationOptions: {
          title: 'Relatórios',
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name="bar-chart-2" size={16} color={tintColor} />
          ),
        },
      },
      ConfigNotificacao: {
        screen: ConfigNotificacao,
        navigationOptions: {
          title: 'Configurações',
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name="settings" size={16} color={tintColor} />
          ),
        },
      },
      Stack: AppStack,
    },
    {
      contentComponent: props => {
        const updateProps = {
          ...props,
          items: props.items.filter(
            item => !hiddenDrawerItems.includes(item.key)
          ),
        };
        return <SideBar {...updateProps} />;
      },
      drawerPosition,
      contentOptions: {
        activeTintColor: colors.primary,
        activeBackgroundColor: colors.grey25,
        inactiveTintColor: colors.bgLoginContainer,
      },
    }
  );

export default (signedIn = false) => {
  const { drawer } = useSelector(state => state.settings.screen);
  return createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          AuthLogin,
        }),
        App: createSwitchNavigator({
          Drawer: AppDrawer(drawer),
          // Stack: AppStack,
          // AppStack,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Auth',
      }
    )
  );
};
