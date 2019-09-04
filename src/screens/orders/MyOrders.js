import React,{useEffect} from 'react'
import {View,Text,StatusBar,Platform,StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title,Content,H1,Tab,Tabs,Card, CardItem } from 'native-base';
export default function MyOrders(props) {
    useEffect( ()=>{
    
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
        
      },[]) 

      const styles = StyleSheet.create({

        header:{
            backgroundColor:'#6DB33F',
        }
      })

    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
        <Header style={styles.header}>
          <Left>
            <Button onPress={()=>props.navigation.navigate('Dashboard') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
            <Title><H1 style={{color:'#ffffff'}}>Orders</H1></Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{color:'#ffffff'}} name='search' />
            </Button>
            <Button onPress={()=>props.navigation.navigate('NewOrders') } transparent>
              <Icon style={{color:'#ffffff'}} ios='ios-add-circle-outline' android="md-add-circle-outline" />
            </Button>
           
          </Right>
        </Header>
        <Content>
              <Tabs tabBarUnderlineStyle={{backgroundColor:'#ffffff'}}>
                <Tab  heading="Delivered" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#60993A'}} tabStyle={{backgroundColor:'#60993A'}} textStyle={{color:'#ffffff'}}>
                <View style={{padding:15,backgroundColor:"#DFEED7"}}>
                        <Card >
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        </View>
                </Tab>

                <Tab heading="Pending" activeTextStyle={{color:"#ffffff"}} activeTabStyle={{backgroundColor:'#B35644'}}  tabStyle={{backgroundColor:'#B35644'}}  textStyle={{color:'#ffffff'}}>

                <View style={{padding:15,backgroundColor:"#DFEED7"}}>
                        <Card >
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at dolores ea quas fugiat incidunt ab optio sequi, et, dolorem, laborum vero! Nisi dolores modi aliquid delectus earum. Molestias, cumque?
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        </View>
                </Tab>
              </Tabs>

          

        </Content>
      </Container>

    )
}
