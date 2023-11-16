import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, Pressable} from "react-native";
import COLORS from "../constants/colors";
import Button from "../components/Button";

export default function Welcome({navigation}) {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1}}>
                <View style={{
                    marginTop: 20,
                }}>
                    <Image 
                        source={require("../assets/hero1.jpg")}
                        style = {{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                <View style={{
                    flex: 1,
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 450,
                    width: "100%",
                    // backgroundColor: "red",
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Go</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Start</Text>
                    <View style={{
                        marginVertical: 22,
                        // backgroundColor: "gray",
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Calling, Enjoy Safe and private texting</Text>
                    </View>

                    <Button 
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 20,
                        justifyContent: "center",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Already have an account ?</Text>
                        <Pressable onPress={
                            () => navigation.navigate("Login")
                        }>
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
        // <View>
        //     <Text>Welcome</Text>
        // </View>
    );
}

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         // backgroundColor : COLORS.primary,
//     },
// });