import React from 'react'
import {View, StyleSheet,StatusBar } from 'react-native';
import  { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base'

export default function Main() {
    return (
      
        <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>HOME</Text>
            </Button>
            <Button vertical>
              <Icon ios='ios-menu' android="md-menu" />
              <Text>DASHBOARD</Text>
            </Button>
            <Button vertical active>
              <Icon active name="shopping-cart" />
              <Text>MY ORDERS</Text>
            </Button>
            <Button vertical>
              <Icon name="cubes" />
              <Text>MY PRODUCTS</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>MY CUSTOMERS</Text>
            </Button>
            <Button vertical>
              <Icon name="bar-chart" />
              <Text>MY REPORTS</Text>
            </Button>
          </FooterTab>
        </Footer>

        </Container>
     
    )
}
