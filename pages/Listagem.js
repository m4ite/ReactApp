import { StyleSheet, View, Text } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Listagem() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/transactions");
        if(response.status == 200)
        {
          setTransactions(response.data)
        }
      } catch (err) {
        console.log(err);
      }

    };
    getTransactions()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Listagem</Text>
      { transactions.map((transaction, index) =>
      {
        return (
          <View>
            <Text>{ transaction.reference }</Text>
            <Text>{ transaction.amount }</Text>
            <Text>{ transaction.date }</Text>
          </View>
        )
      }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#46387C",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  button: {
    backgroundColor: "#00D8FF",
    width: 156,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttoText: {
    color: "#302850",
    fontSize: 16,
    fontWeight: 500,
  },
});
