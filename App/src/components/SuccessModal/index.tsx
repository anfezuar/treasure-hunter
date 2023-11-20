import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

interface Props {
  isVisible: boolean;
  handleNextClue: () => void;
}
function SuccessModal({isVisible, handleNextClue}: Props) {
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent>
      <View style={styles.modalStyle}>
        <View style={styles.bodyModal}>
          <Text style={styles.title}>{'Felicitaciones!!'}</Text>
          <Text>{'Lo lograste, estas mas cerca sigue jugando'}</Text>
          <TouchableOpacity style={styles.button} onPress={handleNextClue}>
            <Text style={styles.buttonText}>{'Siguiente pista'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default SuccessModal;
