import { StyleSheet, Text, TextInput, View } from "react-native";
import{ Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Image source = {{uri:"https://images.unsplash.com/photo-1751256743518-5836ec5154e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"}}
      style={{ width: 200, height: 200}}
      />
      <TextInput placeholder="Type here to translate!" style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 20 }} />
      <Link href="/about" style={{ marginTop: 20, color: 'blue' }}> Go to About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: "blue",
      }
    });
