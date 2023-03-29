import { Text, View, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { Component } from "react";

export default class CardComp extends Component {
   state = {
        count: 0,
        step:1,
    };
    incrementar() {
        if (this.state.count < this.props.max || this.props.max == undefined){
            this.setState({
                count: this.state.count + this.state.step,
            });
        }
    }
  render () {
    return (
      <View style={styles.container}>
        <Image  style={styles.imagem} source={this.props.CaminhoImage}/>
        <Text style={styles.nomeproduto}>
          {this.props.NomeProduto}
        </Text>
        <Text style={styles.paragraph}>
          Preço: {this.props.ValorProduto}
        </Text>
        <TouchableOpacity  onPress={() => this.incrementar()}>
          <Text style={styles.button} > Adicionar ao carrinho  {this.state.count} </Text>
        </TouchableOpacity>
        
      </View>
  );} 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "row",
    borderRadius: 20,
    width: 140,
    height: 260,
    margin: 10,
    padding: 5,
  },
  paragraph: {
    fontWeight: 'bold',
    margin: "5%",
    fontSize: 11,
  },
  nomeproduto: {
    fontWeight: 'bold',
    margin: "5%",
    fontSize: 15,
  },
  imagem: {
    width: 130,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    fontSize: 11,
    fontWeight: 'bold',
    borderRadius: 20,
    backgroundColor:'#000000',
    color: "#fff",
    height: 35,
    textAlign: 'center',
    margin: 10,
    padding: 5,
  },
});