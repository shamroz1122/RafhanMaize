import React,{useEffect,useState} from 'react'
import { View,Image,StyleSheet,Platform,StatusBar,Text } from 'react-native';
import { Container, Content, Card, CardItem,H3,Body } from 'native-base';
import uploadImage from '../../../assets/image_upload.png'
import { connect } from 'react-redux'
import { getCustomerDetail } from '../../redux/actions/customerActions'
import Spinner from 'react-native-loading-spinner-overlay';
import loaderImage from '../../../assets/loader-gif.gif'

const Corporation = (props) => {

      const [state,setState] = useState({
        customer:{
            "id": "",
            "code": "",
            "name": "",
            "dealer_id": "",
            "sale_channel": "",
            "order_type": "",
            "partner_category_id": "",
            "email": "",
            "phone": "",
            "mobile": "",
            "city": "",
            "country_id": "",
            "country": "",
            "user_id": "",
            "street": "",
            "street2": "",
            "sap_partner_id": "",
            "created_at": "",
            "updated_at": "",
            "category": "",
            "supply_channel": "",
            "order_types": "",
            "sale_chanl": ""
        },  
        loadingScreen:false
      })
      
      useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }

         setState((state)=>({
            ...state,
             loadingScreen:true
          }))

        const params =  props.navigation.getParam('customer')
        let customer_id = {'customer_id':params.id}
        props.getCustomerDetail(customer_id)

      },[]) 

      useEffect( ()=>{
  
        if(props.error)
        {
           console.log('Error Occured: ',props.error)
           setState((state)=>({
            ...state,
             loadingScreen:false
          }))
        }else{
          //console.log('new products: ',props.products)
          if(Object.keys(props.customerDetail).length)
          {
              setState((state)=>({
                ...state,
                customer: props.customerDetail,
                loadingScreen:false
              }))
          }
       
        }

       },[props.error,props.customerDetail]) 



      const styles = StyleSheet.create({
                title:{
                    color:'#8D8D8D',
                    fontSize:12
                }
      })

  
      const customIndicator = <Image source={loaderImage} style={{height: 50, width: 50,position:'absolute'}}/>
  

    return (
          <Container style={{backgroundColor:"#DFEED7"}}>
            <Content padder>
            <Spinner
              overlayColor="rgba(0, 0, 0, 0.3)"
              visible={state.loadingScreen}
              customIndicator={customIndicator}
            />

               <Card>
                    <CardItem cardBody>
                       <Image source={uploadImage} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <H3 style={{color:'#6DB340'}}>{state.customer.name}</H3>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Code</Text>
                            <Text style={{color:'#333333'}}>{state.customer.code} </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>ID</Text>
                            <Text style={{color:'#333333'}}>{state.customer.id}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Supply Channel</Text>
                            <Text style={{color:'#333333'}}>{state.customer.supply_channel} </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Reference</Text>
                            <Text style={{color:'#333333'}}>{state.customer.sap_partner_id}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Sales Channel</Text>
                            <Text style={{color:'#333333'}}>{state.customer.sale_chanl} </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Email</Text>
                            <Text style={{color:'#333333'}}>{state.customer.email} </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Category</Text>
                            <Text style={{color:'#333333'}}>{state.customer.category}  </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Order Type</Text>
                            <Text style={{color:'#333333'}}>{ state.customer.order_types!==''? state.customer.order_types:'None'}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Mobile</Text>
                            <Text style={{color:'#333333'}}>{state.customer.mobile} </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Phone</Text>
                            <Text style={{color:'#333333'}}>{state.customer.phone}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Street</Text>
                            <Text style={{color:'#333333'}}>{state.customer.street}</Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Street 2</Text>
                            <Text style={{color:'#333333'}}>{state.customer.street2}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>City</Text>
                            <Text style={{color:'#333333'}}>{state.customer.City}</Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Country</Text>
                            <Text style={{color:'#333333'}}>{state.customer.country}</Text>
                        </Body>
                    </CardItem>
                </Card>
             </Content>
           </Container>
    )
}




const mapStateToProps = (state) => {
    return {
      customerDetail: state.customer.customerDetail,
      error: state.customer.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getCustomerDetail: (id) => dispatch(getCustomerDetail(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Corporation)
  

