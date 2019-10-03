import React,{useEffect} from 'react'
import {View, StyleSheet,StatusBar,TouchableOpacity,Platform } from 'react-native';
import { Container, Content, Button,Card, CardItem, Text,Icon,Right } from 'native-base'


function Home(props){
  if(Platform.OS==='android')
  {
    var cardHeight = 105
  }else{
    var cardHeight = 125
  }
   
    useEffect( ()=>{
      
      if(Platform.OS==='android')
      {
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#333333")
       
      }
      
      },[])

      const styles = StyleSheet.create({
        header:{
            backgroundColor:'#ffffff',
          
        },
        logoStyle:{
          flex:1,textAlign:'center',justifyContent:'center',paddingLeft:70
        },
        cardItemStyle:{
          flex:1,
          flexDirection:'row',
          justifyContent:'flex-end',
          alignItems:'center'
        },
        cardTextStyle:{
          color:'#ffffff',
          width:'94%',
          textAlign:'center'
        },
        icon:{
          color:'#ffffff'
        }
      })

     return (
        <Container style={{backgroundColor:'#F5F5F5'}}>

          <Content padder contentContainerStyle={{ flexGrow: 1 }}>
          <Card> 
      
             <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('NewOrders') }>
                   <CardItem   style={{height:cardHeight,backgroundColor:'#508630',borderRadius:0}}>
                <View style={styles.cardItemStyle}> 
                      <Text style={styles.cardTextStyle}>
                        NEW ORDERS
                      </Text>
                      <Right>
                      <Button small transparent onPress={()=>props.navigation.navigate('NewOrders') }>
                        <Icon type="AntDesign" style={styles.icon} name="right"  />
                      </Button>
                      </Right>
                </View>
            </CardItem>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('MyOrders') }>
            <CardItem  style={{height:cardHeight,backgroundColor:'#415927',borderRadius:0}}>
            <View style={styles.cardItemStyle}>
                  <Text style={styles.cardTextStyle}>
                    MY ORDERS
                  </Text>
                  <Right>
                    <Button small transparent >
                      <Icon type="AntDesign" style={styles.icon} name="right"  />
                    </Button>
                  </Right>
             
                </View>
            </CardItem>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('MyProducts') }>
            <CardItem  style={{height:cardHeight,backgroundColor:'#B85D26',borderRadius:0}}>
            <View style={styles.cardItemStyle}>
                  <Text style={styles.cardTextStyle}>
                      MY PRODUCTS
                  </Text>
                  <Right>
                  <Button small transparent >
                    <Icon type="AntDesign" style={styles.icon} name="right"  />
                  </Button>
                  </Right>
                </View>
            </CardItem>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('MyCustomers') }>
            <CardItem  style={{height:cardHeight,backgroundColor:'#968223',borderRadius:0}}>
            <View style={styles.cardItemStyle}>
                <Text style={styles.cardTextStyle}>
                    MY CUSTOMERS
                </Text>
                <Right>
                <Button small transparent >
                  <Icon type="AntDesign" style={styles.icon} name="right"  />
                </Button>
                </Right>
                </View>
            </CardItem>
            </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('MyProfile') }>
            <CardItem   style={{height:cardHeight,backgroundColor:'#7C212A',borderRadius:0}}>
            <View style={styles.cardItemStyle}>
                  <Text style={styles.cardTextStyle}>
                      MY PROFILE
                  </Text>
                  <Right>
                  <Button small transparent  onPress={()=>props.navigation.navigate('MyProfile') }>
                    <Icon type="AntDesign" style={styles.icon} name="right"  />
                  </Button>
                  </Right>
                </View>
            </CardItem>
            </TouchableOpacity>

          </Card>
        </Content>
        
        </Container>
  )

}

export default Home;