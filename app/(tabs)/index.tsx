import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizz app</Text>
      
      {/* ปุ่มที่ใช้ Link */}
      <Link href="/quizz" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // สีพื้นหลัง
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF', // สีของปุ่ม
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // สีของข้อความบนปุ่ม
    fontSize: 16,
  },
});
