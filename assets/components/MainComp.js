import { View, StyleSheet } from 'react-native';
import CardComp from './CardComp';

export default function App() {
  return ( 
    <View style={styles.main}>
    <CardComp
      NomeProduto="Lasanha Seara"
      ValorProduto={"12,93"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/547190.png'}}
    />
    <CardComp
      NomeProduto="Massa de Sêmola Ninfa"
      ValorProduto={"2,69"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/1339449.png'}}
    />
    <CardComp
      NomeProduto="Biscoito Marilan"
      ValorProduto={"2,27"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/1980390.png'}}
    />
    <CardComp
      NomeProduto="Sabão em Pó Surf"
      ValorProduto={"7,69"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/2041333.png'}}
    />
    <CardComp
      NomeProduto="Espinafre Gasparin"
      ValorProduto={"3,99"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/2070217.png'}}
    />
    <CardComp
      NomeProduto="Tomate Grape Gasparin"
      ValorProduto={"4,79"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/2070316.png'}}
    />
    <CardComp
      NomeProduto="Sorvete Nestlé"
      ValorProduto={"14,86"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/1924562.png'}}
    />
    <CardComp
      NomeProduto="Bife da Alcatra Bovina"
      ValorProduto={"39,85"}
      CaminhoImage={{uri:'https://api.cndr.me/images/png/1891761.png'}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-around",
    marginTop: 30,
  },
});