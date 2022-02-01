// import { View, Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

/* import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import TopRestaurants from '../screens/TopRestaurants';
import Account from '../screens/Account';
import Search from '../screens/Search'; */
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
// import { TabBarIOSItem } from 'react-native';

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="restaurants"
                component={RestaurantsStack}
                options={{title: "Restaurantes", headerShown:false}}
            />
            <Tab.Screen 
                name="favorites"
                component={FavoritesStack}
                options={{title: "Favoritos", headerShown:false}}
            />
            <Tab.Screen 
                name="top-restaurants"
                component={TopRestaurantsStack}
                options={{title: "Top 5", headerShown:false}}
            />
            <Tab.Screen 
                name="search"
                component={SearchStack}
                options={{title: "Buscar", headerShown:false}}
            />
            <Tab.Screen 
                name="account"
                component={AccountStack}
                options={{title: "Cuenta", headerShown:false}}
            />
        </Tab.Navigator>

    </NavigationContainer>

  );
}
