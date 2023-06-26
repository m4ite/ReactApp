import { StyleSheet, View, Text } from 'react-native';

export default function Listagem() {
  
  return (
    <View style={styles.container}>
        <Text>Listagem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46387C',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  button: {
    backgroundColor: '#00D8FF',
    width: 156, 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttoText: {
    color: '#302850',
    fontSize: 16,
    fontWeight: 500
  }
});