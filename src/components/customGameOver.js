import React, { useState, useEffect } from 'react';
import { View, Text, Image, Modal, StyleSheet, Dimensions } from 'react-native';

const GameOverImage = require('../../assets/gameover.png');

const GameOverOverlay = ({ visible }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
      }, 2000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => {}} // No action needed when modal is closed
    >
      <View style={styles.container}>
        <Image source={GameOverImage} style={styles.image} />
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: Dimensions.get('window').width, // Set width to match window width
    height: Dimensions.get('window').height, // Set height to match window height
    resizeMode: 'contain', // Ensure the entire image fits within the dimensions
  },
});

export default GameOverOverlay;
