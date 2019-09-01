import React from 'react'
import Dashboard from '../screens/dashboard/Dashboard';
import MyOrders from '../screens/orders/MyOrders';
import OrderDetails from '../screens/orders/OrderDetails';
import MyProducts from '../screens/products/MyProducts';
import Reports from '../screens/reports/Reports';
import MyCustomers from '../screens/customers/MyCustomers';
import NewOrders from '../screens/dashboard/NewOrders';
import MyProfile from '../screens/dashboard/Profile';
import Corporation from '../screens/dashboard/Corporation';
import Login from '../screens/auth/Login';
import { Ionicons } from '@expo/vector-icons'
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation'
import Rafhanlogo from '../../assets/RafhanLogocolor.png'
import {Image,Text} from 'react-native'
import {Thumbnail,Icon} from 'native-base'



const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";



const DashboardStack = createStackNavigator({
  Dashboard:{screen:Dashboard,
    navigationOptions:({ navigation }) => {

      return {
        headerTitle: <Image source={Rafhanlogo} style={{ height: 60,width: 100,marginLeft:85,marginBottom:20}} />,
        headerLeft:(
          <Ionicons style={{paddingLeft:15,paddingBottom:20}} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
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
        headerBackTitle: null,
        headerBackImage:  <Icon type="AntDesign" style={{fontSize:15,color:'#ffffff',paddingBottom:20}} small name="left"  />
      }
    }
  },
  Corporation:{screen:Corporation,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>Malik Corporation</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerBackTitle: null,
        headerBackImage:  <Icon type="AntDesign" style={{fontSize:15,color:'#ffffff',paddingBottom:20}} small name="left"  />
      }
    }},
  MyProfile:{screen:MyProfile,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>My Profile</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerBackTitle: null,
        headerBackImage:  <Icon type="AntDesign" style={{fontSize:15,color:'#ffffff',paddingBottom:20}} small name="left"  />
      }
    }}
})

const MyOrdersStack = createStackNavigator({
  MyOrders:{screen:MyOrders,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,paddingLeft:30,fontSize:22}}>Orders</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
      }
    }},
  OrderDetails:{screen:OrderDetails,
    navigationOptions:({ navigation }) => {
      return {
        headerTitle: <Text style={{color:"#ffffff",paddingBottom:25,fontSize:22}}>Order #: PK0000517</Text>,
        headerStyle:{height:30,backgroundColor:'#6DB33F',color:"#ffffff"},
        headerBackTitle: null,
        headerBackImage:  <Icon type="AntDesign" style={{fontSize:15,color:'#ffffff',paddingBottom:20}} small name="left"  />
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

const DashboardTabNavigator = createBottomTabNavigator({
    Dashboard:{screen:DashboardStack},
    MyOrders:{screen:MyOrdersStack},
    MyProducts:{screen:MyProductsStack},
    MyCustomers:{screen:MyCustomersStack},
    Reports:{screen:ReportsStack}  
  },
  {
    navigationOptions:({ navigation }) => {
      const {routeName} = navigation.state.routes
      [navigation.state.index];

      // if(routeName=='Dashboard')
      // {
      //   return {
      //     headerTitle: <Image source={Rafhanlogo} style={{ height: 60,width: 100,marginLeft:85,marginBottom:20}} />,
      //     headerStyle:{height:30}
      //   }
      // }else{
        return {
          header:null,
          headerTitle: routeName
        };

    //  }
    
    }
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
        )
      }
    }
  })




  const AppDrawerNavigator = createDrawerNavigator({
    Home:{
      screen:DashboardStackNavigator
    }
  })

  const AppSwitchNavigator = createSwitchNavigator({
    Login:{screen:Login},
    Home:AppDrawerNavigator
  })

 export default createAppContainer(AppSwitchNavigator)