import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

import JobScreen from "./jobs";
import ProviderScreen from "./providers";

const TabNavigator = createBottomTabNavigator({
    JobScreen:{
        screen:JobScreen,
        navigationOptions:{
            tabBarLabel:"Jobs",
        }
    },
    ProviderScreen:{
        screen:ProviderScreen,
        navigationOptions:{
            tabBarLabel:"Provider"
        }
    }
})

export default createAppContainer(TabNavigator)