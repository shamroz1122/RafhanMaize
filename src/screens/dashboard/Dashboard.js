import React, {useEffect} from 'react'
import { View, Text,StyleSheet,StatusBar,Image } from 'react-native'
import { Container,H1,Title, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
const Dashboard = () => {

    useEffect( ()=>{
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#60993A")
      },[]) 
      const styles = StyleSheet.create({
        header:{
            backgroundColor:'#6DB33F',
        },
    })

    return (
       <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon type="Octicons" name='three-bars' />
            </Button>
          </Left>
          <Body>
            <Title>Dashboard </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='user-circle' />
            </Button>
          </Right>
        </Header>
        <Content>

          <Card>
            <CardItem>
              <Left>
                <Button 
                 style={{ backgroundColor: '#5067FF' }}
                >
                <Icon name="share" />
                </Button>
                <Body>
                  <Text><H1>125</H1></Text>
                  <Text note>Delivered Orders</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

        </Content>
      </Container>
    )
}

export default Dashboard
