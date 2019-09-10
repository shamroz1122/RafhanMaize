import React, {useEffect} from 'react'
import { View, Text,StyleSheet,StatusBar,Platform } from 'react-native'
import { Container,H1,DeckSwiper,H2, Card, CardItem, Button, Icon, Left, Body, Right } from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const Dashboard = () => {

    useEffect( ()=>{
      if(Platform.OS==='android')
      {
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#333333")
      }
      },[]) 
  
      const styles = StyleSheet.create({
        header:{
            backgroundColor:'#6DB33F',
        },
        container:{
          backgroundColor:'#E1EFD8'
        },
        firstTwoCardsStyle:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          paddingLeft:15,
          paddingRight:15,
          marginBottom:-7

        },
        secondTwoCardsStyle:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingLeft:15,
          paddingRight:15,
          marginBottom:-20
        },
        thirdCardStyle:{
          flex:2,
          paddingLeft:15,
          paddingRight:15,
          paddingTop:10
        },
        bottomStatsStyle:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingLeft:15,
          paddingRight:15,
          paddingTop:30
        },
        bottomStatsTextStyle:{
          color:'#ffffff',
          fontSize:8,
          textAlign:'center'
        },
        bottomStatsInnerTextStyle:{
          color:'#fff',
          textAlign:'center',
          fontSize:22,
          fontWeight:'bold',
          marginStart:10
        },
        cardSize:{
          width:'48%'
        },
        buttonText:{
          fontSize:11
        },
        iconFont:{
          fontSize:27,
          color:'#ffffff'
        },
        cardNumber:{
          fontWeight:'bold'
        },
        icon:{
          color:'#cccccc',
          fontSize:18
        },
        myButton :{
          padding: 5,
          height: 60,
          width: 60,  //The Width must be the same as the height
          borderRadius:120, //Then Make the Border Radius twice the size of width or Height   
          backgroundColor:'#6DB33F',
          alignItems:'center',
          justifyContent:'center'
       
        },
        myButton2 :{
          padding: 5,
          height: 60,
          width: 60,  //The Width must be the same as the height
          borderRadius:120, //Then Make the Border Radius twice the size of width or Height   
          backgroundColor:'#B35644',
          alignItems:'center',
          justifyContent:'center'
       
        },
        myButton3 :{
          padding: 5,
          height: 60,
          width: 60,  //The Width must be the same as the height
          borderRadius:120, //Then Make the Border Radius twice the size of width or Height   
          backgroundColor:'#425EB2',
          alignItems:'center',
          justifyContent:'center'
       
        },
        myButton4 :{
          padding: 5,
          height: 60,
          width: 60,  //The Width must be the same as the height
          borderRadius:120, //Then Make the Border Radius twice the size of width or Height   
          backgroundColor:'#B3AF27',
          alignItems:'center',
          justifyContent:'center'
       
        }

    })

    const cards = [
      {
        text: '12,250',
        name: 'Domestic',
    
      },
      {
          text: '11,250',
          name: 'Local',
        },
        {
          text: '10,250',
          name: 'WorldWide',
        
        },

    ];

    return (
       <Container style={styles.container}>
        <View style={{flex:1}}>

            <View style={styles.firstTwoCardsStyle}>
              <View style={styles.cardSize}>
                  <Card>
                    <CardItem bordered>
                      <Left>
                      
                        <View style={styles.myButton}>
                           <Icon  style={styles.iconFont} type="FontAwesome5" name="calendar-check" />
                        </View>
                   
                        <Body>
                          <H2 style={styles.cardNumber}>125</H2>
                          <Text style={styles.buttonText} note>Dilvered Orders</Text>
                        </Body>
                      </Left>
                    </CardItem>
                  </Card>
               </View> 
               <View style={styles.cardSize}>
                    <Card>
                        <CardItem bordered>
                        <Left>
                            <View style={styles.myButton2}>
                              <Icon  style={styles.iconFont} type="Feather" name="clock" />
                            </View>
                            <Body>
                              <H2 style={styles.cardNumber}>30</H2>
                              <Text style={styles.buttonText} note>Pending Orders</Text>
                            </Body>
                          </Left>
                        </CardItem>
                    </Card>
               </View>
            </View>

            <View style={styles.secondTwoCardsStyle}>
              <View style={styles.cardSize}>
                  <Card>
                    <CardItem bordered>
                      <Left>
                        <View style={styles.myButton3}>
                          <Icon style={styles.iconFont} type="MaterialIcons" name="device-hub" />
                        </View>
               
                        <Body>
                          <H2 style={styles.cardNumber}>125</H2>
                          <Text style={styles.buttonText} note>Supply Channels</Text>
                        </Body>
                      </Left>
                    </CardItem>
                  </Card>
               </View> 
               <View style={styles.cardSize}>
                    <Card>
                        <CardItem bordered>
                        <Left>
                            <View style={styles.myButton3}>
                              <Icon style={styles.iconFont}  type="FontAwesome" name="users" />
                            </View>
                            <Body>
                              <H2  style={styles.cardNumber}>30</H2>
                              <Text style={styles.buttonText}  note>Total Customers</Text>
                            </Body>
                          </Left>
                        </CardItem>
                    </Card>
               </View> 
            </View>

            <View style={styles.thirdCardStyle}>

            <DeckSwiper
                  dataSource={cards}
                  renderItem={item =>
                    <Card>
                <CardItem bordered>
                  <Left>
                    <Text>YTD Sales by Sales Channel</Text>
                  </Left>
                  <Right>
                    <Text style={{fontSize:10,color:'#777777'}}>Swipe</Text>
                  </Right>
                </CardItem>
                <CardItem bordered >
                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      
                      <Icon small type="AntDesign" style={styles.icon} name="left"  />
                      
                        <AnimatedCircularProgress
                            size={150}
                            width={5}
                            fill={65}
                            backgroundWidth={2}
                            backgroundColor="#E1EFD8"
                            tintColor="#6DB33F"
                            duration={2000}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            rotation={120}
                      >
                            {
                              (fill) => (
                                <View>
                                    <H1 style={{fontWeight:'bold'}}>
                                      {item.text} 
                                    </H1>
                                    <Text style={{textAlign:'center',color:'#707070'}}>
                                      {item.name}
                                    </Text>
                                </View>
                                
                              )
                            }
                      </AnimatedCircularProgress>  
                   
                    <Icon type="AntDesign" style={styles.icon} name="right"  />
                  </View>
                </CardItem>
              </Card>
                  }
                />

            </View>

            <View style={styles.bottomStatsStyle}>

                    <View style={{width:'23%',height:85,backgroundColor:'#6DB33F',borderRadius:4,padding:4,alignItems:'center'}}>
                        <Text style={styles.bottomStatsTextStyle}>
                            Total Products
                        </Text>
                        <Button style={{backgroundColor:'#4E9827',width: 50,height: 50,borderRadius: 50/2,marginTop:5}} >
                            <Text style={styles.bottomStatsInnerTextStyle}>74</Text>
                        </Button>
                    </View>
                    <View style={{width:'23%',height:85,backgroundColor:'#B35644',borderRadius:4,padding:4,alignItems:'center'}}>
                        <Text style={styles.bottomStatsTextStyle}>
                             Users
                        </Text>
                        <Button style={{backgroundColor:'#973A2B',width: 50,height: 50,borderRadius: 50/2,marginTop:5}} >
                            <Text style={styles.bottomStatsInnerTextStyle}>87</Text>
                        </Button>
                    </View>
                    <View style={{width:'23%',height:85,backgroundColor:'#425EB2',borderRadius:4,padding:4,alignItems:'center'}}>
                        <Text style={styles.bottomStatsTextStyle}>
                            Attachment Files
                        </Text>
                        <Button style={{backgroundColor:'#284098',width: 50,height: 50,borderRadius: 50/2,marginTop:5}} >
                            <Text style={styles.bottomStatsInnerTextStyle}>25</Text>
                        </Button>
                    </View>
                    <View style={{width:'23%',height:85,backgroundColor:'#B3AF27',borderRadius:4,padding:4,alignItems:'center'}}>
                        <Text style={styles.bottomStatsTextStyle}>
                            Email Templates
                        </Text>
                        <Button style={{backgroundColor:'#989216',width: 50,height: 50,borderRadius: 50/2,marginTop:5}} >
                            <Text style={styles.bottomStatsInnerTextStyle}>10</Text>
                        </Button>
                    </View>

            </View>

           </View>
      </Container>
    )
}

export default Dashboard
