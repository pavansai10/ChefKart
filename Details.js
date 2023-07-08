import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Details = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: "row", padding: 15 }}>
        <Text style={styles.recipeTitle}>Mashala Muglai</Text>
        <View style={styles.ratingContainer}>
          <Text style={{ color: "white", fontSize: 8 }}>4.2 </Text>
          <Icon name="star" size={8} color={"white"} />
        </View>
      </View>
      <View>
        <Text style={styles.descText}>
          Mughal Masala is a style of cookery developed
        </Text>
        <Text style={styles.descText}>in the Indian Subcontinent by</Text>
        <Text style={styles.descText}>
          the imperial kitchens of the Mughal Empire.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 25,
          alignItems: "center",
        }}
      >
        <Icon name="alarm-outline" size={27} color={"black"} />
        <Text style={{ paddingLeft: 20 }}>1 hour</Text>
      </View>

      <View
        style={{
          borderBottomWidth: 2,
          marginHorizontal: 5,
          borderColor: "grey",
          marginTop: 35,
          marginBottom: 35,
        }}
      />
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
          Ingredients
        </Text>
        <Text style={{ color: "grey", fontSize: 10 }}>For 2 people</Text>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderWidth: 0.2,
            borderColor: "grey",
          }}
        ></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            Vegetable(05)
          </Text>
          <Icon
            name="caret-down"
            size={18}
            style={{ paddingBottom: 8, paddingLeft: 20 }}
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.text}>Cauliflower</Text>
          <Text style={styles.text}>01 Pc</Text>
        </View>
        <View style={styles.items}>
          <Text style={styles.text}>Tomato</Text>
          <Text style={styles.text}>10 Pc</Text>
        </View>
        <View style={styles.items}>
          <Text style={styles.text}>Spinach</Text>
          <Text style={styles.text}>1/2 Kg</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            Spices(10)
          </Text>
          <Icon
            name="caret-down"
            size={18}
            style={{ paddingBottom: 8, paddingLeft: 20 }}
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.text}>Coriander</Text>
          <Text style={styles.text}>100 gram</Text>
        </View>
        <View style={styles.items}>
          <Text style={styles.text}>Mustard Oil</Text>
          <Text style={styles.text}>1/2 litres</Text>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Appliances
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: "#f5f5f5",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,marginHorizontal: 10
            }}
          >
            <Image
              source={require("./assets/refrigi.png")}
              style={{ height: 100, width: 100 }}
            />
            <Text style={{ fontSize: 14 }}>Refrigirator</Text>
          </View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: "#f5f5f5",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,marginHorizontal: 10
            }}
          >
            <Image
              source={require("./assets/refrigi.png")}
              style={{ height: 100, width: 100 }}
            />
            <Text style={{ fontSize: 14 }}>Refrigirator</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ratingContainer: {
    backgroundColor: "#1ce80e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginLeft: 15,
    height: 15,
    marginTop: 10,
  },
  descText: {
    color: "grey",
    fontSize: 12,
    marginLeft: 15,
    marginTop: 7,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontSize: 12,
    color: "grey",
    marginBottom: 15,
  },
});
