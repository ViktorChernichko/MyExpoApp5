import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const products = [
  { id: '1', name: 'Laptop', price: 900, rating: 4.8},
  { id: '2', name: 'Phone', price: 500, rating: 4.5},
  { id: '3', name: 'Headphones', price: 100, rating: 4.2},
];

export default function Products() {
  const [items, setItems] = useState(products);

  const sortByPrice = () => {
    setItems([...items].sort((a, b) => a.price - b.price));
  };

  const sortByRating = () => {
    setItems([...items].sort((a, b) => b.rating - a.rating));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Catalog</Text>

      <TouchableOpacity style={styles.btn} onPress={sortByPrice}>
        <Text>Sort By Price</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={sortByRating}>
        <Text>Sort By Rating</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Text>⭐ {item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  btn: { backgroundColor: '#ddd', padding: 10, marginBottom: 10 },
  card: { padding: 15, borderWidth: 1, marginBottom: 10 },
});