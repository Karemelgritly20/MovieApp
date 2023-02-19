import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { getMovie, getVideo } from "../services/services";
import YoutubePlayer from "react-native-youtube-iframe";

const About = (props) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loded, setLoded] = useState(false);
  const [movieVideo, setMovieVideo] = useState([]);
  const [movieKey, setMovieKey] = useState("");

  const movieId = props.route.params.movieDetail.id;

  useEffect(() => {
    getMovie(movieId).then((movieData) => {
      setMovieDetails(movieData);
      setLoded(true);
    });
    getVideo(movieId).then((video) => {
      setMovieVideo(video.results[0]);
      setMovieKey(video.results[0].key);
    });
  }, [movieId]);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: "Trailer",
      headerStyle: { backgroundColor: "#A0204C" },
    });
  }, []);

  console.log(movieId)

  return (
    <View className="items-center justify-start flex-1  bg-[#282D4F]">
      
      {loded && (
<View>
          <TouchableOpacity  onPress={() => props.navigation.goBack()}>
            <Text className='text-[#ffff] text-[24px] p-2' key={movieId}>{movieDetails.title}</Text>
          </TouchableOpacity>
</View>
      )}
      <View >
        <YoutubePlayer height={400} width={400} key={movieId} videoId={movieKey} />
      </View>
      {movieDetails.genres && (
        <View className="flex-col space-x-2">
          <Text className='text-[24px] text-[#ffff]'>Genre :</Text>
          {movieDetails.genres.map((genre) => {
            return (
              <View>
                
                <Text className='text-[#ffff] text-[20px]'  key={genre.id}>
                  {genre.name}
                </Text>
              </View>
              
            );
          })}
          
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
    width: 320,
    height: 200,
  },
});
export default About;
