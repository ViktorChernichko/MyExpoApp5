import { StyleSheet, Text, View } from 'react-native';

export default function ProductCard({
  name,
  price,
  rating,
}: {
  name: string;
  price: number;
  rating: number;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text>${price}</Text>
      <Text>⭐ {rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});