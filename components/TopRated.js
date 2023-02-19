import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getTopRated } from "../services/services";
import { ChevronDownIcon } from "react-native-heroicons/solid";

const TopRated = ({ navigation }) => {
  const [TopRated, setTopRated] = useState([]);

  useEffect(() => {
    getTopRated()
      .then((series) => {
        const topRatedArray = [];
        series.forEach((item) => {
          topRatedArray.push(item);
        });
        setTopRated(topRatedArray);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <View className="flex-1 mb-10 ">
      <View>
        <Text className="font-bold text-gray-300 text-[25px] px-3 ">
          Top Rated Movies<ChevronDownIcon size={20} color="#FF6C00" />
        </Text>
      </View>
      <ScrollView horizontal className="">
        {TopRated.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              className="p-3 "
              onPress={() =>
                navigation.navigate("Discover", { movieDetail: item })
              }
            >
              <View className="items-center">
                <View className="w-40 h-60">
                  <Image
                    className="w-full h-full rounded-md mt-2 "
                    source={{
                      uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
                    }}
                  />
                </View>
                {/* <Text className="text-[16px] font-bold pt-2 pb-1 text-[#ffff] text-center">
                  {item.original_name}
                </Text>
                <Text className="text-center font-normal text-[#ffff]">
                  Rate: {item.vote_average}
                </Text> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TopRated;
