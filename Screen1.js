import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Screen1 = () => {
  const [dishes, setDishes] = useState([]);
  const [popular, setPopular] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const date = new Date(); // Replace with your desired date
  const [selectedButton, setSelectedButton] = useState("italian");
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    // Add more image data as needed
  ];
  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const navigation = useNavigation();
  // Options for date formatting
  const options = { day: "2-digit", month: "long", year: "numeric" };

  // Format the date
  const formattedDate = date.toLocaleDateString(undefined, options);
  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      const data = await response.json();

      setDishes(data.dishes);
      setPopular(data.popularDishes);

      console.log(dishes);
      console.log(popular);
    } catch (error) {
      console.error(error);
    }
  };
  const RecipeCard = ({ recipe }) => {
    return (
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <View style={styles.titleView}>
            <Text style={styles.recipeTitle}>{recipe.name}</Text>
            <View
              style={{
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 3,
                borderColor: "#1ce80e",
                marginLeft: 5,
              }}
            >
              <Icon name="ellipse-sharp" color={"#1ce80e"} size={10} />
            </View>
            <View style={styles.ratingContainer}>
              <Text style={{ color: "white" }}>{recipe.rating} </Text>
              <Icon name="star" size={12} color={"white"} />
            </View>
          </View>
          <View>
            <Pressable
              android_ripple={"black"}
              onPress={() => navigation.navigate("Details")}
            >
              <Text style={{ color: "orange" }}>Show details</Text>
            </Pressable>
          </View>
          <Text style={styles.recipeDescription}>{recipe.description}</Text>
        </View>
        <View style={styles.rightBox}>
          <Image
            source={{ uri: recipe.image }} // Replace with your image URL
            style={styles.circularImage}
          />
          <Pressable onPress={null} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.circImage} />
      <Text style={styles.imageText}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.blackTopBox}></View>
      <View style={styles.dateTimeView}>
        <View
          style={{
            flexDirection: "row",
            borderRightWidth: 1,
            marginRight: 20,
            paddingRight: 10,
          }}
        >
          <Icon name="calendar-sharp" size={16} color="black" style={{}} />
          <Text> {formattedDate} </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="alarm-outline" size={16} color="black" style={{}} />
          <Text> 10:30 PM-12:30 PM </Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <View style={styles.tabButtonContainer}>
          <Pressable
            style={[
              styles.tabButton,
              selectedButton === "italian" && { borderColor: "orange" },
            ]}
            onPress={() => handleButtonPress("italian")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedButton === "italian" && { color: "orange" },
              ]}
            >
              Italian
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.tabButton,
              selectedButton === "indian" && { borderColor: "orange" },
            ]}
            onPress={() => handleButtonPress("indian")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedButton === "indian" && { color: "orange" },
              ]}
            >
              Indian
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.tabButton,
              selectedButton === "chinese" && { borderColor: "orange" },
            ]}
            onPress={() => handleButtonPress("chinese")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedButton === "chinese" && { color: "orange" },
              ]}
            >
              Chinese
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.popularContainer}>
        <View style={styles.popularTextContainer}>
          <Text style={styles.popularText}>Popular Dishes</Text>
        </View>
        <View
          style={{
            paddingLeft: 10,
            width: "100%",
            paddingBottom: 20,
          }}
        >
          <FlatList
            data={popular}
            horizontal
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 3,
          marginHorizontal: 10,
          borderColor: "#9d9e9b",
        }}
      ></View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 15,
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Recommended </Text>
        <Icon name="md-arrow-down-circle" size={20} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
            position: "absolute",
            right: 15,
            backgroundColor: "black",
            color: "white",
            paddingHorizontal: 16,
            paddingVertical: 5,
            borderRadius: 6,
            elevation: 8,
          }}
        >
          Menu
        </Text>
      </View>

      <View style={styles.flatlistView}>
        <FlatList
          data={dishes}
          keyExtractor={(recipe) => recipe.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => navigation.navigate("Details")}
            />
          )}
        />
      </View>
      <View style={styles.downButtonContainer}>
        <Pressable
          style={styles.downButton}
          onPress={() => console.log("Button pressed")}
        >
          <Icon name="fast-food-outline" size={16} color="white" style={{}} />
          <Text style={styles.downButtonText}>
            {" "}
            {count} food Items Selected
          </Text>
          <Icon
            name="arrow-forward-sharp"
            size={16}
            color="white"
            style={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  mainView: { backgroundColor: "#fff", flex: 1 },
  blackTopBox: {
    backgroundColor: "black",
    height: 50,
  },
  dateTimeView: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    backgroundColor: "white",
    height: 60,
    zIndex: 15,
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    width: 350,
    justifyContent: "center",
    elevation: 10,
  },
  tabContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  tabButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabButton: {
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  tabButtonText: {
    fontSize: 14,
    color: "grey",
  },
  flatlistView: {
    // paddingTop: 20,
  },
  recipeDescription: {
    fontSize: 11,
    color: "grey",
  },
  recipeTitle: {
    fontSize: 16,
  },
  ratingContainer: {
    backgroundColor: "#1ce80e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  titleView: { flexDirection: "row" },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 1,
    paddingVertical: 10,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: "#9d9e9b",
    minHeight: 170,
  },
  leftBox: {
    width: "60%",
    // padding: 16,
    // backgroundColor: "#f2f2f2",
  },
  rightBox: {
    width: "40%",
    alignItems: "center",
    marginTop: 16,
  },
  circularImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  textField: {
    marginBottom: 8,
  },
  button: {
    // marginTop: 16,
    backgroundColor: "#ffffff",
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderColor: "orange",
    borderWidth: 1,
    position: "absolute",
    bottom: -15,
    elevation: 10,
  },
  buttonText: {
    color: "orange",
    fontSize: 16,
  },

  downButtonContainer: {
    position: "absolute",
    bottom: 20, // adjust this value to position the button on the screen
    alignSelf: "center",
    zIndex: 999, // ensure a higher value than other components
  },
  downButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 260,
    height: 45,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  downButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
    marginRight: 5,
    flex: 9,
  },
  icon: {
    marginLeft: 5,
    flex: 1,
  },
  itemContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  circImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    opacity: 0.7,
  },
  imageText: {
    marginTop: 5,
    fontSize: 14,
    color: "white",
    position: "absolute",
    top: 25,
  },
  popularText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  popularTextContainer: {
    margin: 20,
  },
  popularContainer: {
    margin: 5,
  },
});
