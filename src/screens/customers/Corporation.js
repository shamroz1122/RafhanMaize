import React,{useEffect} from 'react'
import { View,Image,StyleSheet,Platform,StatusBar,Text } from 'react-native';
import { Container, Content, Card, CardItem,H3,Body } from 'native-base';
import uploadImage from '../../../assets/image_upload.png'
const Corporation = (props) => {
    useEffect( ()=>{
        if(Platform.OS==='android')
        {
          StatusBar.setBarStyle('light-content',true)
          StatusBar.setBackgroundColor("#60993A")
        }
      },[]) 

      const styles = StyleSheet.create({
                title:{
                    color:'#8D8D8D',
                    fontSize:12
                }
      })

     const params =  props.navigation.getParam('customer')
    return (
          <Container style={{backgroundColor:"#DFEED7"}}>
            <Content padder>
               <Card>
                    <CardItem cardBody>
                       <Image source={uploadImage} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <H3 style={{color:'#6DB340'}}>{params.customerName}</H3>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Code</Text>
                            <Text style={{color:'#333333'}}>12001048 </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>ID</Text>
                            <Text style={{color:'#333333'}}>100047</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Supply Channel</Text>
                            <Text style={{color:'#333333'}}>12001048 </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Reference</Text>
                            <Text style={{color:'#333333'}}>12001048</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Sales Channel</Text>
                            <Text style={{color:'#333333'}}>Domestic </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Email</Text>
                            <Text style={{color:'#333333'}}>malikcorp@yahoo.com</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Category</Text>
                            <Text style={{color:'#333333'}}>Dealer / Trader </Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Order Type</Text>
                            <Text style={{color:'#333333'}}>None</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Mobile</Text>
                            <Text style={{color:'#333333'}}>123456789</Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Phone</Text>
                            <Text style={{color:'#333333'}}>087-87451587</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>Street</Text>
                            <Text style={{color:'#333333'}}>Your street address here.</Text>
                        </Body>
                        <Body>
                            <Text style={styles.title}>Street 2</Text>
                            <Text style={{color:'#333333'}}>2nd address if have</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>City</Text>
                            <Text style={{color:'#333333'}}>Faisalabad</Text>
                        </Body>
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
