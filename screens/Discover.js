import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  PlayIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";

export default function Discover(props) {
  const movie = props.route.params.movieDetail;
  const [movieDetails, setMovieDetails] = useState([]);
  const [loded, setLoded] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: movie.original_title,
      headerStyle: { backgroundColor: "#A0204C" },
    });
  }, []);

  //   const movieId = props.route.params.movieDetail.id
  // console.log(movieId)
  //   useEffect(() => {
  //     getMovie(movieId).then(movieData =>{
  //       setMovieDetails(movieData)
  //       setLoded(true)
  //     })
  //   },[movieId])
  //   console.log(movieDetails)

  return (
    <SafeAreaView className=" bg-[#282D4F] relative flex-1">

      {/* Poster */}

      <View className="items-center justify-center space-y-2 ">
        <View className=" flex-1 mt-2">
          <Pressable
            onPress={() =>
              props.navigation.navigate("About", { movieDetail: movie })
            }
          >
            <Image
              className="w-60 h-80 items-center  border-[#FF6C00] rounded-xl "
              source={{
                uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              }}
            />
          </Pressable>
        </View>
        {/* Description */}
        <View className="flex-1 p-2 justify-center items-center">
          <Text className="text-[#FF6C00] text-[20px] mt-10">
            {movie.original_title}
          </Text>
          <View className='justify-center items-center'>
          <Text className="font-bold text-[20px] text-[#ffff] pt-2 flex-row">
            Overview
          </Text>
          <ChevronDownIcon color="#ffff" size={22} /></View>
          <Text className="items-center text-center text-[#ffff] pt-2">
            {movie.overview}
          </Text>
          <Text className="text-[#ffff] pt-5">
            Released In: {movie.release_date}{" "}
          </Text>
          <View className="flex-row space-x-2 bg-[#A0204C] rounded-lg p-1 mt-2">
            <StarIcon size={20} color="#FFE15D" />
            <Text>{movie.vote_average}</Text>
          </View>
        </View>
        <TouchableOpacity
          className="w-full  flex-row items-center space-x-6"
          onPress={() =>
            props.navigation.navigate("About", { movieDetail: movie })
          }
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-28 h-28 bg-[#A0204C] rounded-full float-left mb-20 ml-5 text-center items-center justify-center"
          >
            <PlayIcon size={60} color="#ffff" />
          </Animatable.View>
          <Text className="mb-20 text-[40px] text-[#ffff]">PLay Trailer!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
