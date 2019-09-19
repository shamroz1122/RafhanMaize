import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import { Container,Header, Content, Card, CardItem,H3, Button, Icon, Left, Body, Right } from 'native-base';
const Corporation = (props) => {

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
                          <View style={styles.myButton}>
                            <Icon type="FontAwesome" name="user-circle" style={{fontSize:30,color:'#ffffff'}}/>
                          </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <H3 style={{color:'#6DB340'}}>User Name</H3>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Email</Text>
                            <Text style={{color:'#333333'}}>username@gmail.com </Text>
                        </Body>
                   
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>User Role</Text>
                            <Text style={{color:'#333333'}}>Customer </Text>
                        </Body>
           
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Password</Text>
                            <Text style={{color:'#333333'}}>abc123456</Text>
                        </Body>
                    
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Partner</Text>
                            <Text style={{color:'#333333'}}>Imtiaz & Co</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Street</Text>
                            <Text style={{color:'#333333'}}>Your street address here.</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>City</Text>
                            <Text style={{color:'#333333'}}>Faisalabad</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Country</Text>
                            <Text style={{color:'#333333'}}>Pakistan</Text>
                        </Body>
                    </CardItem>
                </Card>
             </Content>
           </Container>
    )
}

export default Corporation
