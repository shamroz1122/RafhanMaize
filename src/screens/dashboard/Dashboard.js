import React,{useEffect} from 'react'
import {View, StyleSheet,StatusBar,Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button,Card, CardItem, Text,Left,Icon,Right,Body,Thumbnail } from 'native-base'
import Rafhanlogo from '../../../assets/RafhanLogocolor.png'

function Dashboard(props){

    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#333333")
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

      const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
     return (
        <Container style={{backgroundColor:'#F5F5F5'}}>
        {/* <Header style={styles.header}>
            <Left>
              <Button  transparent>
                <Icon style={{color:'black'}}  name='menu' />
              </Button>
            </Left>
                <View style={styles.logoStyle}>
                  <Image  source={Rafhanlogo} style={{ height: 60,width: 100}} />
                </View>
            <Right>
              <Button transparent >
                <Thumbnail small source={{uri:uri}} />
              </Button>
            </Right>
          </Header> */}
          <Content padder>
          <Card>
          <CardItem style={{height:100,backgroundColor:'#508630',borderRadius:0}}>
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
            <CardItem  style={{height:100,backgroundColor:'#415927',borderRadius:0}}>
            <View style={styles.cardItemStyle}>
                  <Text style={styles.cardTextStyle}>
                    CORPORATION
                  </Text>
                  <Right>
                    <Button small transparent  onPress={()=>props.navigation.navigate('Corporation') }>
                      <Icon type="AntDesign" style={styles.icon} name="right"  />
                    </Button>
                  </Right>
             
                </View>
            </CardItem>
            <CardItem  style={{height:100,backgroundColor:'#B85D26',borderRadius:0}}>
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
            {/* <CardItem style={{height:100,backgroundColor:'#508630',borderRadius:0}}>
                <View style={styles.cardItemStyle}> 
                      <Text style={styles.cardTextStyle}>
                        NEW ORDERS
                      </Text>
                      <Right>
                      <Button small transparent >
                        <Icon type="AntDesign" style={styles.icon} name="right"  />
                      </Button>
                      </Right>
                </View>
            </CardItem>
            <CardItem  style={{height:100,backgroundColor:'#415927',borderRadius:0}}>
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
            <CardItem  style={{height:100,backgroundColor:'#B85D26',borderRadius:0}}>
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
            <CardItem  style={{height:100,backgroundColor:'#968223',borderRadius:0}}>
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
            <CardItem  style={{height:100,backgroundColor:'#7C212A',borderRadius:0}}>
            <View style={styles.cardItemStyle}>
                <Text style={styles.cardTextStyle}>
                   MY PROFILE
                </Text>
                <Right>
                <Button small transparent >
                  <Icon type="AntDesign" style={styles.icon} name="right"  />
                </Button>
                </Right>
                </View>
            </CardItem> */}

          </Card>
        </Content>
        
        </Container>
  )

}

export default Dashboard;