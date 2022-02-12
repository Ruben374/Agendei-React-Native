import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar'
import Home from '../screens/Home'
import Appointments from '../screens/Appointments'
import Search from '../screens/Search'

const Tab= createBottomTabNavigator()

export default ()=>(
       <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Appointments' component={Appointments}/>
    </Tab.Navigator>
)
 
