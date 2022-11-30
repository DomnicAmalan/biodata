import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from 'app/globalcomponents/header';
import RiskScreen from 'app/screens/risk';
import RiskBySNP from 'app/screens/riskbysnp';
import SubHazards from 'app/screens/subhazards';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{ header: Header }}>
      <Tab.Screen name="Home" component={RiskScreen} initialParams={{ title: 'Genetics', RightHeaderCompFromProps: 'profile' }} />
      <Tab.Screen name="SubHazard" component={SubHazards} />
      <Tab.Screen name="RiskbySNP" component={RiskBySNP} />
    </Tab.Navigator>
  );
}

export default MainTab