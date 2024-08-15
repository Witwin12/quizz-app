import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>Time: {formatTime(elapsedTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Timer;
