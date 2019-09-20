import React, {useEffect,useState} from 'react'
import { View, Text,StyleSheet,StatusBar,Platform,Image } from 'react-native'
import { Container,H1,Content,H2, Card, CardItem, Icon, Left, Body } from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux'
import { getDashboardSats } from '../../redux/actions/dashboardActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

const Dashboard = (props) => {

   const [state,setState] = useState({
     loadingScreen:true,
     delivered_orders:'',
     supply_channels:'',
     total_customer:'', 
     channels:'',
     total_products:'',
     users:'', 
     attachment:'',
     email_templates:''
   })

    useEffect( ()=>{
      if(Platform.OS==='android')
      {
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#333333")
      }
        //dispatch to get stats
        props.getDashboardSats()
      },[]) 

      useEffect( ()=>{
       if(props.error)
       {
          console.log('Error Occured: ',props.error)
       }else{
         
      
         if(Object.keys(props.upperSection).length)
         {
         
             setState((state)=>({
               ...state,
 
               delivered_orders: props.upperSection.delivery_orders,
               pending_orders: props.upperSection.pending_orders,
               supply_channels: props.upperSection.supply_channels,
               total_customer: props.upperSection.total_customer,
               channels: props.middleSection.Domestic,
               total_products: props.footerSection.total_products,
               users: props.footerSection.users,
               attachment: props.footerSection.attachment,
               email_templates: props.footerSection.email_templates,
               loadingScreen:false
 
             })
             )
         }
       }
   
      },[props.error,props.upperSection,props.middleSection,props.footerSection]) 


   
      const styles = StyleSheet.create({
        header:{
            backgroundColor:'#6DB33F',
        },
        container:{
          backgroundColor:'#E1EFD8',
       
        },
        firstTwoCardsStyle:{
          flex:1,
          flexDirection:'row',
          paddingLeft:15,
          paddingRight:15,
          paddingTop:10,
          paddingBottom:5,
          justifyContent:'space-between',
          alignItems:'center'
        },
        secondTwoCardsStyle:{
          flex:1,
          flexDirection:'row',
          paddingLeft:15,
          paddingRight:15,
          justifyContent:'space-between',
          alignItems:'center'
         },
        thirdCardStyle:{
          flex:2,
          paddingLeft:15,
          paddingRight:15,
          paddingTop:5
        },
        bottomStatsStyle:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingLeft:15,
          paddingRight:15,
          paddingTop:10,
          paddingBottom:10,
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
          fontWeight:'bold',
          fontSize:16
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

    // const cards = [
    //   {
    //     text: '12,250',
    //     name: 'Domestic',
    
    //   },
    //   {
    //       text: '11,250',
    //       name: 'Local',
    //     },
    //     {
    //       text: '10,250',
    //       name: 'WorldWide',
        
    //     },

    // ];
    const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  
  return (
       <Container style={styles.container}>
         
     
            <Spinner
              overlayColor="rgba(0, 0, 0, 0.3)"
              visible={state.loadingScreen}
              customIndicator={customIndicator}
            />
           
          <Content>
     
              <View style={styles.firstTwoCardsStyle}>
                 <View style={styles.cardSize}>
                     <Card>
                        <CardItem bordered>
                          <Left>
                          
                            <View style={styles.myButton}>
                              <Icon  style={styles.iconFont} type="FontAwesome5" name="calendar-check" />
                            </View>
                      
                            <Body>
                              <H2 style={styles.cardNumber}>{state.delivered_orders}</H2>
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
                                    <H2 style={styles.cardNumber}>{state.pending_orders}</H2>
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
                          <H2 style={styles.cardNumber}>{state.supply_channels}</H2>
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
                            <View style={styles.myButton4}>
                              <Icon style={styles.iconFont}  type="FontAwesome" name="users" />
                            </View>
                            <Body>
                              <H2  style={styles.cardNumber}>{state.total_customer}</H2>
                              <Text style={styles.buttonText}  note>Total Customers</Text>
                            </Body>
                          </Left>
                        </CardItem>
                    </Card>
               </View> 
            </View>
            <View style={styles.thirdCardStyle}>

                      <Card>
                      <CardItem bordered>
                        <Left>
                          <Text>YTD Sales by Sales Channel</Text>
                        </Left>
                       
                      </CardItem>
                      <CardItem bordered >
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                      
                            
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
                                          <H1 style={{fontWeight:'bold',textAlign:'center'}}>
                                            {state.channels} 
                                          </H1>
                                          <Text style={{textAlign:'center',color:'#707070'}}>
                                          Domestic
                                          </Text>
                                      </View>
                                      
                                    )
                                  }
                            </AnimatedCircularProgress>  
                        
                        </View>
                      </CardItem>
                    </Card>
                  </View>

              <View style={styles.bottomStatsStyle}>

                <View style={{width:'23%',height:85,backgroundColor:'#6DB33F',borderRadius:4,padding:4,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.bottomStatsTextStyle}>
                        Total Products
                    </Text>
                    <View style={{marginTop:5,height: 50,width: 50,borderRadius:100,backgroundColor:'#4E9827',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.bottomStatsInnerTextStyle}>{state.total_products}</Text>
                    </View>
                </View>
                <View style={{width:'23%',height:85,backgroundColor:'#B35644',borderRadius:4,padding:4,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.bottomStatsTextStyle}>
                        Users
                    </Text>
                    <View style={{marginTop:5,height: 50,width: 50,borderRadius:100,backgroundColor:'#973A2B',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.bottomStatsInnerTextStyle}>{state.users}</Text>
                    </View>
               
                </View>
                <View style={{width:'23%',height:85,backgroundColor:'#425EB2',borderRadius:4,padding:4,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.bottomStatsTextStyle}>
                        Attachment Files
                    </Text>
                    <View style={{marginTop:5,height: 50,width: 50,borderRadius:100,backgroundColor:'#284098',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.bottomStatsInnerTextStyle}>{state.attachment}</Text>
                    </View>
                
                </View>
                <View style={{width:'23%',height:85,backgroundColor:'#B3AF27',borderRadius:4,padding:4,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.bottomStatsTextStyle}>
                        Email Templates
                    </Text>
                    <View style={{marginTop:5,height: 50,width: 50,borderRadius:100,backgroundColor:'#989216',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.bottomStatsInnerTextStyle}>{state.email_templates}</Text>
                    </View>
                  
                </View>

              </View>


        </Content> 

      </Container>
    )
}


const mapStateToProps = (state) => {
  return {
    upperSection: state.dashboard.upperSection,
    middleSection: state.dashboard.middleSection,
    footerSection: state.dashboard.footerSection,
    error: state.dashboard.error,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
      getDashboardSats: () => dispatch(getDashboardSats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

