import React,{useState,useEffect} from 'react'
import {View,Text,StatusBar,Platform,StyleSheet,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon,Content,H3,Card, CardItem,Item,Input } from 'native-base';
function MyProducts(props) {

      const [state,setState] = useState({
        searchBar:false,
        products: []
      })

     
    var allProducts =  [
      { itemCode: '01180001KY', reference:'01180001KY',itemName:'Rafhan Liquid Glucose 010800 TIN-R25kg',minimumOrderLimit:'01',maximumOrderLimit:'999',id:'01180001KY' },
      { itemCode: '02001001CM', reference:'02001001CM',itemName:'Cerelose Dextrose Mono-020010',minimumOrderLimit:'01',maximumOrderLimit:'999',id:'02001001CM' },
      { itemCode: '03003000DK', reference:'03003000DK',itemName:'Rfhan 034010 Maize(Corn) Starch PPW50KG',minimumOrderLimit:'01',maximumOrderLimit:'999',id:'03003000DK' },
      { itemCode: '05020000DK', reference:'05020000DK',itemName:'Penetrose 20 Maize(Corn)Strach PPW50KG',minimumOrderLimit:'01',maximumOrderLimit:'999',id:'05020000DK' },
      { itemCode: '13110000DK', reference:'13110000DK',itemName:'Rfhan Maize Gluten Feed 30% AFI PPW50KG',minimumOrderLimit:'01',maximumOrderLimit:'999',id:'13110000DK' },
    
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
            products : allProducts 
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
          backgroundColor:'#60993A',
          alignItems:'center',
          justifyContent:'center'
       
        },
        text:{
          fontSize:10,color:'#838383'
        },
        nestedText:{
          fontWeight:'bold',
          color:'#000000'
        },
        nestedBottomText:{
          fontWeight:'bold',
          color:'#000000',
          backgroundColor:'#DCECD2'
        }
      })

      const onSearch = (text) => {
  
                var value = text.toLowerCase()
                var products = state.products.filter(product=>{
                  return product.itemName.substring(0, value.length).toLowerCase() === value; 
                });
    
                if(text=='')
                {
              
                  setState(
                    (state) =>({ 
                      ...state,
                      products : allProducts 
                    })
                  )
                    
                }else{
             
                  setState(
                    (state) =>({ 
                      ...state,
                      products : products 
                    })
                  )
                }
            
      }


       const searchBar = state.searchBar==true? 
                        (
                              <Item>
                                <Input type="text" id="search" onChangeText={onSearch}  placeholder="Search" />
                                <Icon type="FontAwesome" name="cubes" /> 
                              </Item>
                        ):null

        const products =  state.products.length > 0 ? (

                              state.products.map(product => {
                                return (
                                         <TouchableOpacity key={product.id} activeOpacity={1} >
                                          
                                          
                                           <Card style={styles.card} >
                                       
                                                <CardItem  bordered>
                                                  <Left>
                                                    <Text style={styles.text}>Item Code: <Text style={styles.nestedText}>{product.itemCode}</Text> </Text>
                                                  </Left>
                                                  <Right>
                                                    <Text style={styles.text}>Reference: <Text style={styles.nestedText}>{product.reference}</Text> </Text>
                                                  </Right>
                                              
                                                </CardItem>
                                                <CardItem bordered>
                                                  <Body>
                                                    <Text style={styles.text}>
                                                        Name
                                                    </Text>
                                                    <Text style={{color:'#90C66E'}}>{product.itemName}</Text>
                                                  </Body>
                                                </CardItem>
                                                <CardItem  bordered>
                                                  <Left>
                                                    <Text style={styles.text}>Minimum Order Limit: <Text style={styles.nestedBottomText}>{product.minimumOrderLimit}</Text> </Text>
                                                  </Left>
                                                  <Right>
                                                    <Text style={styles.text}>Maximum Order Limit: <Text style={styles.nestedBottomText}>{product.maximumOrderLimit}</Text> </Text>
                                                  </Right>
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
            <Button onPress={()=>props.navigation.navigate('MyOrders') } transparent>
               <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
            </Button>
          </Left>
          <Body>
            <H3 style={{color:'#ffffff'}}>Products</H3>
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
                {products}
              </View>
            
        </Content>
      </Container>

    )
}
export default  MyProducts;