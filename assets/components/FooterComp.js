import { Text, View, StyleSheet} from 'react-native';

export default function app() {
  return(
    <View style={styles.footer}>
      <Text style={styles.titulo}>
        Mercado Show
      </Text>
      <View style={styles.infofooter}>
        <Text style={styles.textfooter}>
          R. Aristides Rudnick 
        </Text> 
        <Text  style={styles.textfooter}>
          merlegal@gmail.com
        </Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
    margin: 30,
  },
  footer: {
    backgroundColor: '#000000',
    marginTop: 40,
  },
  infofooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textfooter: {
    color: '#fff',
    fontSize: 16,
  },
})
