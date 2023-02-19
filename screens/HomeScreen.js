import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { getPopularMovies } from "../services/services";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import Card from "../components/Card";
import TopRated from "../components/TopRated";
import Discover from "./Discover";

const dimensions = Dimensions.get("screen");
const HomeScreen = ({ navigation }) => {
  const [moviesState, setMoviesState] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        const moviesArray = [];
        movies.forEach((movie) => {
          moviesArray.push(movie);
        });
        setMoviesState(moviesArray);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <ScrollView className="bg-[#282D4F] h-full">
      {/* Header */}
      {/* <View className="bg-[#A0204C] rounded-xl ">
        <Text className="font-bold text-[30px] text-center pt-6 text-[#ffffff]">
          Hello to Movie App
        </Text>
        <Text className="font-bold text-[15px] pb-2 text-center text-[#ffffff]">
          Developed by Karem ElGritly{" "}
        </Text>
        
      </View> */}
      {/* Popular Movies Tag */}
      <View className="flex-row items-center">
        <Text className="font-bold text-gray-300 text-[25px] pt-5 px-3 ">
          Popular Movies <ChevronDownIcon size={20} color="#FF6C00" />
        </Text>
      </View>

      {/* Popular Movies Cards */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          padding: 1,
        }}
      >
        {moviesState.map((movie) => {
          return (
            <TouchableOpacity
              key={movie.id}
              className="p-3"
              onPress={() =>
                navigation.navigate("Discover", { movieDetail: movie })
              }
            >
              <View className="items-center">
                <View className="w-40 h-60">
                  <Image
                    className="w-full h-full mt-1 rounded-md"
                    source={{
                      uri:
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                    }}
                  />
                </View>

                {/* <View>
                  <Text className="text-[16px] font-bold pt-2 pb-1 text-[#ffff] text-center">
                    {movie.title}
                  </Text>
                  <Text className="text-center font-normal pb-1 text-[#ffff]">
                    Released: {movie.release_date}
                  </Text>
                  <Text className="text-center font-normal text-[#ffff]">
                    Rate: {movie.vote_average}
                  </Text>
                </View> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* Upcoming movies */}
      <View>
        <Card navigation={navigation} />
      </View>
      {/* Popular Tv Series */}
      <View>
        <TopRated navigation={navigation} />
      </View>
    </ScrollView>
  );
};


export default HomeScreen;
