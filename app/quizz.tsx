import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import QuizzCom from '@/components/QuizzCom';

// ข้อมูลคำถาม
const data = [
  { question: 'What is the capital of France?', choices: ['Paris', 'London', 'Berlin', 'Madrid']},
  { question: 'What is 2 + 2?', choices: ['3', '4', '5', '6'] }
];

const ITEMS_PER_PAGE = 1;

export default function Quizz() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <View style={styles.container}>
      <FlatList
        data={currentData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          // ใช้ QuizzCom แทนการแสดงผลข้อมูลตรงๆ
          <QuizzCom question={item} />
        )}
        ListFooterComponent={
          <View style={styles.paginationContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.paginationButtons}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.pageButton,
                      currentPage === index + 1 && styles.activePageButton,
                    ]}
                    onPress={() => setCurrentPage(index + 1)}
                  >
                    <Text
                      style={[
                        styles.pageButtonText,
                        currentPage === index + 1 && styles.activePageButtonText,
                      ]}
                    >
                      {index + 1}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  paginationButtons: {
    flexDirection: 'row',
  },
  pageButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#007BFF',
  },
  pageButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  activePageButton: {
    backgroundColor: '#0056b3',
  },
  activePageButtonText: {
    fontWeight: 'bold',
  },
});
