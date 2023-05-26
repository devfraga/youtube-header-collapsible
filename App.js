import { View, Animated, StatusBar, Text, FlatList, StyleSheet } from "react-native";

const App = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#121212"} barStyle="light-content" translucent={false} />
      
      <Animated.View
        style={{
          width: "100%",
          height: 150,
          padding: 10,
          backgroundColor: "#121212",
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <Text style={styles.headerText}>Meu Header</Text>
      </Animated.View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item}) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  contentHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFF"
  },
  item: {
    height: 350,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});