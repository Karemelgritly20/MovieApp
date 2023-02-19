import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import Discover from '../screens/Discover'
const screens = {
    Home : {
        screen: HomeScreen
    },
    Details : {
        screen: Discover
    },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);