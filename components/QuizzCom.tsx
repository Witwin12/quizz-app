import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageSourcePropType } from 'react-native';

// กำหนดประเภทของตัวเลือก
interface Question {
  question: string;
  choices: string[];
}

// กำหนดประเภทของ props
interface QuizzProps {
  question: Question;
}

// คอมโพเนนต์ Quizz ที่รับ props เป็นคำถาม
const QuizzCom: React.FC<QuizzProps> = ({ question }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.question}</Text>


      {question.choices.map((choice, index) => (
        <Pressable
          key={index}
          style={styles.choiceButton}
          onPress={() => console.log(`Selected: ${choice}`)}
        >
          <Text style={styles.choiceText}>
            {String.fromCharCode(65 + index)}. {choice}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choiceButton: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  choiceText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default QuizzCom;
