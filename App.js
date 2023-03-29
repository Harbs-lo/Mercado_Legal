import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderComp from './assets/components/HeaderComp'
import MainComp from './assets/components/MainComp'
import FooterComp from './assets/components/FooterComp'

export default function App() {
  return (
    <View style={styles.conteudo}>
    <ScrollView>
    <HeaderComp />
    <View>
      <Text style={styles.titulo}> 
        Recomendados 
      </Text>
    </View>
    <MainComp />
    <FooterComp />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    backgroundColor: '#E0E9EB',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
});
