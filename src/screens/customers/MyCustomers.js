import React,{useState,useEffect} from 'react'
import {View,Text,StatusBar,Platform,StyleSheet,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Card, CardItem,Item,Input } from 'native-base';
function MyCustomers(props) {

      const [state,setState] = useState({
        searchBar:false,
        customers: []
      })

     
    var allCustomers =  [
      { customerName: 'Malik Corporation',customerAddress:'Street Address: None | City: None', id:'PK0000517',code:'12001048' },
      { customerName: 'Sahara Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000518',code:'12001048' },
      { customerName: 'Sitara Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000519',code:'12001048' },
      { customerName: 'Dina Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000520',code:'12001048' },
      { customerName: 'Lahore Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000521',code:'12001048' },
      { customerName: 'Ziarat Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000522',code:'12001048' },
      { customerName: 'Anwar Corporation',customerAddress:'Street Address: None | City: None',id:'PK0000523',code:'12001048' }
    ]

    useEffect( ()=>{
    
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle( 'light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
      
        setState(
          (state) =>({ 
            ...state,
            customers : allCustomers 
          })
        )


      },[]) 

      const styles = StyleSheet.create({

        header:{
            backgroundColor:'#6DB33F',
        },
        card :{
          elevation: 4
        },
        cardView:{
          padding:15,
          backgroundColor:"#DFEED7"
        },
        myButton :{
          padding: 5,
          height: 50,
          width: 50,  //The Width must be the same as the height
          borderRadius:100, //Then Make the Border Radius twice the size of width or Height   
          backgroundColor:'#6DB33F',
          alignItems:'center',
          justifyContent:'center'
       
        }
      })

      const onSearch = (text) => {
  
                var value = text.toLowerCase()
                var customers = state.customers.filter(customer=>{
                  return customer.customerName.substring(0, value.length).toLowerCase() === value; 
                });
    
                if(text=='')
                {
              
                  setState(
                    (state) =>({ 
                      ...state,
                      customers : allCustomers 
                    })
                  )
                    
                }else{
             
                  setState(
                    (state) =>({ 
                      ...state,
                      customers : customers 
                    })
                  )
                }
            
      }


       const searchBar = state.searchBar==true? 
                        (
                              <Item>
                                <Input type="text" id="search" onChangeText={onSearch}  placeholder="Search" />
                                <Icon type="FontAwesome" name="user-circle" /> 
                              </Item>
                        ):null

        const customers =  state.customers.length > 0 ? (

                              state.customers.map(customer => {
                                return (
                                         <TouchableOpacity key={customer.id} activeOpacity={1} onPress={()=>props.navigation.navigate('Corporation',{customer:customer}) }>
                                            <Card style={styles.card} >
                                                <CardItem style={{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>

                                                <View style={{flex:1,flexDirection:'row'}}>
                                                      <View style={{flex:5,alignItems:'center',justifyContent:'center',padding:15}}>
                                                            <Left>
                                                            <View style={styles.myButton}>
                                                              <Icon type="FontAwesome" name="user-circle" style={{color:'#ffffff'}}/>
                                                            </View>
                                                            <Body>
                                                              <Text style={{fontSize:10,color:'#838383'}}>Code {customer.code}</Text>
                                                              <H3 style={{color:'#6DB33F'}}>{customer.customerName}</H3>
                                                              <Text style={{fontSize:10,color:'#838383'}}>{customer.customerAddress}</Text>
                                                            </Body>
                                                          </Left>
                                                      </View>
                                                      <View style={{backgroundColor:'#6DB33F',flex:1,alignItems:'center',justifyContent:'center'}} >
                                                    
                                                               <Text>
                                                                  <Icon  type="AntDesign" style={{fontSize:15,color:'#ffffff'}}  name="right"  />
                                                               </Text>
                                                         
                                                                <Text style={{fontSize:12,color:'#ffffff'}}>VIEW</Text>
                                                          
                                                     
                                                      </View>
                                                </View>
                                   
                                                </CardItem>
                                              </Card>
                                            </TouchableOpacity>
                                        )
                                    })

                          ) : null 
        
    const changeSearchBar = (e) => {
   //   alert('hello')
      setState((state)=>({
        ...state,
        searchBar:!state.searchBar
      })
      )
    }

    return (
     <Container style={{backgroundColor:"#DFEED7"}}>
        <Header style={styles.header}>
          <Left>
            <Button onPress={()=>props.navigation.navigate('MyProducts') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
            <H3 style={{color:'#ffffff'}}>My Customers</H3>
          </Body>
          <Right>
            <Button onPress={changeSearchBar} transparent>
              <Icon style={{color:'#ffffff'}} name='search' />
            </Button>
          </Right>
        </Header>
        <Content>
        
              {searchBar}
      
              <View style={styles.cardView}>
                {customers}
              </View>
           

          

        </Content>
      </Container>

    )
}
export default  MyCustomers;