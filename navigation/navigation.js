import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import TimeScreen from '../screens/TimeScreenDisplay';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../components/LoginScreen';

const StackNav = createStackNavigator({
	Login: LoginScreen,
	SetTime: TimeScreen,
	SetCategories: CategoriesScreen,
	Profile: ProfileScreen
})

export default createAppContainer(StackNav);