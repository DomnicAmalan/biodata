import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RiskScreen from 'app/screens/risk';
import SubHazards from 'app/screens/subhazards';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={RiskScreen} />
      <Tab.Screen name="SubHazard" component={SubHazards} />
    </Tab.Navigator>
  );
}

export default MainTab