import React, {useEffect,useState} from 'react'
import { View,StyleSheet,Text } from 'react-native';
import { Container,Header, Content, Card, CardItem,H3, Button, Icon, Left, Body, Right,Thumbnail  } from 'native-base';
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions/authActions';

function Profile(props){

    const [state,setState] = useState({
            "id": '',
            "name": "",
            "email": "",
            "created_at": "",
            "updated_at": "",
            "user_profile_img": "",
            "is_admin": 1,
            "is_dealer": null,
            "role_id": 1,
            "login_time": ""
    })

    useEffect( ()=>{
   
         setState(props.user)

    },[]) 

    useEffect( ()=>{
   
        console.log(state)

    },[props.user]) 

      const styles = StyleSheet.create({
          header:{
              backgroundColor:'#6DB33F',
          },
          title:{
              color:'#8D8D8D',
              fontSize:12
          },
          myButton :{
            padding: 5,
            height: 100,
            width: 100,  //The Width must be the same as the height
            borderRadius:200, //Then Make the Border Radius twice the size of width or Height   
            backgroundColor:'#6DB33F',
            alignItems:'center',
            justifyContent:'center'
         
          }
      })

      var user_role = "";

      if(state.is_admin==1)
      {
        user_role = "Admin"
      }else if(state.is_dealer==1)
      {
        user_role = "Dealer"
      }

      const uri = 'http://order.rafhanmaize.com/dev'+state.user_profile_img
    return (
          <Container style={{backgroundColor:"#DFEED7"}}>
          <Header androidStatusBarColor="#60993A" style={styles.header}>
          <Left>
                <Button onPress={()=>props.navigation.navigate('Home') } transparent>
                  <Icon  type="AntDesign" style={{fontSize:20,color:'#ffffff'}} small name="left"  />
                </Button>
          </Left>
          <Body>
            <H3 style={{color:'#ffffff'}}>My Profile</H3>
          </Body>
          <Right>
              
          </Right>
      
        </Header>
            <Content padder>
               <Card>
                    <CardItem>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                            { state.user_profile_img!==null ? <Thumbnail large source={{uri: uri}} />:<View style={styles.myButton}>
                                <Icon type="FontAwesome" name="user-circle" style={{fontSize:30,color:'#ffffff'}}/>
                              </View> 
                             }
                      
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <H3 style={{color:'#6DB340'}}>{state.name}</H3>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Email</Text>
                            <Text style={{color:'#333333'}}>{state.email} </Text>
                        </Body>
                   
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>User Role</Text>
                            <Text style={{color:'#333333'}}> {user_role} </Text>
                        </Body>
           
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Partner</Text>
                            <Text style={{color:'#333333'}}>None</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Street</Text>
                            <Text style={{color:'#333333'}}>None</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>City</Text>
                            <Text style={{color:'#333333'}}>None</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Country</Text>
                            <Text style={{color:'#333333'}}>None</Text>
                        </Body>
                    </CardItem>
                </Card>
             </Content>
           </Container>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getUser: (User) => dispatch(getUser(User))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile)


