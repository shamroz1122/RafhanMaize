import React from 'react'
import Dashboard from '../screens/dashboard/Dashboard';
import MyOrders from '../screens/orders/MyOrders';
import OrderDetails from '../screens/orders/OrderDetails';
import MyProducts from '../screens/products/MyProducts';
import Reports from '../screens/reports/Reports';
import MyCustomers from '../screens/customers/MyCustomers';
import NewOrders from '../screens/home/NewOrders';
import MyProfile from '../screens/home/Profile';
import Home from '../screens/home/Home';
import Corporation from '../screens/customers/Corporation';
import Login from '../screens/auth/Login';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation'
import Rafhanlogo from '../../assets/RafhanLogocolor.png'
import {Image,Text,Platform} from 'react-native'
import {Thumbnail,Icon} from 'native-base'
import { Ionicons, AntDesign,Entypo,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import NewOrder from '../screens/home/NewOrders';

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const HomeStack = createStackNavigator({
  Home:{screen:Home,
    navigationOptions:({ navigation }) => {

      var marginLeft = 0
      if(Platform.OS==='android')
      {
        marginLeft = 70
      }else{
        marginLeft = 40
      }

      return {
        headerTitle: <Image source={Rafhanlogo} style={{ height: 60,width: 100,marginLeft:Platform.OS === 'android' ? 70 : 0,marginBottom:20}} />,
        headerLeft:(
         <Icon style={{paddingLeft:15,paddingBottom:20}} onPress={() => navigation.openDrawer()} ios="ios-menu" android="md-menu" size={30} />
        ),
        headerRight:(
           <Thumbnail small source={{uri:uri}} style={{marginRight:15,marginBottom:20}} />
        ),
        headerStyle:{height:30},
      }
    }
  },
  NewOrders:{screen:NewOrders,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>Add Order</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerBackImage: Platform.OS === 'android'? <Icon type="AntDesign" style={{fontSize:20,color:'#ffffff',marginBottom:20}} small name="left"  /> :null,
        headerTintColor: '#ffffff',
      }
    }
  },
  // Corporation:{screen:Corporation,
  //   navigationOptions:({ navigation }) => {
  //     return {
  //       headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>Malik Corporation</Text>,
  //       headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
  //       headerBackTitle: null,
  //       headerBackImage:  <Icon type="AntDesign" style={{fontSize:20,color:'#ffffff',marginBottom:20}} small name="left"  />
  //     }
  //   }},
  MyProfile:{screen:MyProfile,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>My Profile</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerBackImage: Platform.OS === 'android'? <Icon type="AntDesign" style={{fontSize:20,color:'#ffffff',marginBottom:20}} small name="left"  /> :null,
        headerTintColor: '#ffffff',
      }
    }}
})

const DashboardStack = createStackNavigator({
  Dashboard:{screen:Dashboard,
    navigationOptions:({ navigation }) => {

      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,paddingLeft:30,fontSize:22}}>Dashbaord</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerLeft:(
          <Ionicons style={{paddingLeft:15,paddingBottom:20,color:'#ffffff'}} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        ),
      }
    }
  }
})

const MyOrdersStack = createStackNavigator({
  MyOrders:{screen:MyOrders,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,paddingLeft:30,fontSize:22}}>Orders</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        header:null
      }
    }},
  OrderDetails:{screen:OrderDetails,
    navigationOptions:({ navigation }) => {
      console.log(navigation.getParam('order'))
        let params =  navigation.getParam('order')
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>Order #: {params.id}</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerBackImage: Platform.OS === 'android'? <Icon type="AntDesign" style={{fontSize:20,color:'#ffffff',marginBottom:20}} small name="left"  /> :null,
        headerTintColor: '#ffffff',
      }
    }}
})

const MyProductsStack = createStackNavigator({
  MyProducts:{screen:MyProducts,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,paddingLeft:30,fontSize:22}}>My Products</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
      }
    }}
})

const MyCustomersStack = createStackNavigator({
  MyCustomer:{screen:MyCustomers,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,paddingLeft:30,fontSize:22}}>My Customers</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
      }
    }}
})

const ReportsStack = createStackNavigator({
  Reports:{screen:Reports,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,paddingLeft:30,fontSize:22}}>Reports</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerLeft:(
          <Ionicons style={{paddingLeft:15,paddingBottom:20,color:'#ffffff'}} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        ),
      }
    }}
})

const IconStyle = function(myColor) {
  return {
    borderRadius: 10,
    background: myColor,
  }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  let IconComponent;
  

  if ( routeName === 'Home') {

    IconComponent = FontAwesome
    iconName = 'home'

    // IconComponent = Ionicons
    // IconType = "Ionicons"
    // androidIconName = 'md-home'
    // iosIconName = "ios-home"
  } 
  else if ( routeName === 'Dashboard') {

    IconComponent = AntDesign
    iconName = 'piechart'
    //  IconComponent = Ionicons
    //  IconType = "Ionicons"
    //  androidIconName = 'md-pie'
    //  iosIconName = "ios-pie"
  } 
  else if (routeName === 'MyOrders')  {

    IconComponent = Entypo
    iconName = 'shopping-cart'   
    // IconComponent = Ionicons
    // IconType = "Ionicons"
    // androidIconName = 'md-cart'
    // iosIconName = "ios-cart"  
  } 
  else if (routeName === 'MyProducts') {

    IconComponent = FontAwesome
    iconName = 'cubes'     
    // IconComponent = Ionicons
    // IconType = "Ionicons"
    // androidIconName = 'md-cube'
    // iosIconName = "ios-cube"  
  } 
  else if (routeName === 'MyCustomers') {
    // IconComponent = Ionicons
    // IconType = "Ionicons"
    // androidIconName = 'md-person'
    // iosIconName = "ios-person"  
    IconComponent = FontAwesome
    iconName = 'user'     
  } 
  else if (routeName === 'Reports') {

    IconComponent = FontAwesome5
    iconName = 'chart-bar'     
    // IconComponent = FontAwesome5
    // IconType = "FontAwesome5"
    // androidIconName = 'chart-bar'
    // iosIconName = "chart-bar" 
  } 
  // return <Icon style={{fontSize:20,color:tintColor}} type={IconType}  ios={iosIconName} android={androidIconName} />
    return <IconComponent style={{fontSize:20,color:tintColor}} name={iconName}   />
};


const DashboardTabNavigator = createBottomTabNavigator({

    Home:{screen:HomeStack,
      navigationOptions:({navigation})=>{
        return {
          headerBackTitle: null,
          headerBackTitleStyle:{color:'#ffffff'}
        }
      }
    
    },
    Dashboard:{screen:DashboardStack},
    MyOrders:{screen:MyOrdersStack,
      navigationOptions:({navigation})=>{
        return {
          tabBarLabel:'My Orders'
        }
      }
    },
    MyProducts:{screen:MyProductsStack,
      navigationOptions:({navigation})=>{
        return {
          tabBarLabel:'My Products'
        }
      }
    },
    MyCustomers:{screen:MyCustomersStack,
      navigationOptions:({navigation})=>{
        return {
          tabBarLabel:'My Customers'
        }
      }
    },
    Reports:{screen:ReportsStack}  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#3C4142',
      inactiveTintColor: '#ffffff',
      activeBackgroundColor:'#DBDBDD',
      inactiveBackgroundColor:'#3D4142',
      showIcon: true,
      style:{
        fontSize:15
      },
      labelStyle: {
        fontSize: 8,
    
      },
    },
   
  }
  )

  const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator:DashboardTabNavigator
  },{
    defaultNavigationOptions:({navigation})=>{
      return {
        headerLeft:(
          <Ionicons style={{paddingLeft:15,paddingBottom:20}} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        ),
        headerRight:(
           <Thumbnail small source={{uri:uri}} style={{marginRight:15,marginBottom:20}} />
        ),
        header:null
      }
    }
  })

  const AppDrawerNavigator = createDrawerNavigator({
    Home:{
      screen:DashboardStackNavigator
    }
  })

  const AppSwitchNavigator = createSwitchNavigator({
    Login:{screen:NewOrder},
    Home:AppDrawerNavigator
  })

 export default createAppContainer(AppSwitchNavigator)