import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../services/services";
import { ChevronDownIcon } from "react-native-heroicons/solid";

export default function Card({ navigation }) {
  const [moviesState, setMoviesState] = useState([]);
  const [moviesTitleState, setmoviesTitleState] = useState([]);
  const [moviesReleaseState, setmoviesReleaseState] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUpcomingMovies()
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
    <View className="mr-2">
      <View >
        <Text className="font-bold text-gray-300 text-[25px] pt-5 px-3 ">
          Upcoming Movies <ChevronDownIcon size={20} color="#FF6C00" />
        </Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          padding: 1,
        }}
      >
        {moviesState.map((movie) => {
          return (
            <TouchableOpacity key={movie.id} className="p-3 mb-20" onPress={() => navigation.navigate('Discover' , {movieDetail : movie}) }>
              <View className="items-center">
                <View className='w-40 h-60'>
                <Image
                  className="w-full h-full rounded-md mt-2 "
                  source={{
                    uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                  }}
                />
                </View>
                {/* <View>
                  <Text className="text-[16px] font-bold pt-2 pb-1 text-[#ffff] text-center">
                    {movie.title}
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
    </View>
  );
}
