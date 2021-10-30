import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Colors from '../../constants/Colors';
import { FunctionWithNoParam } from '../../utils/types';
interface UserModalProps {
  longBio: string;
  closeModal: FunctionWithNoParam;
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 20,
    minHeight: '50%',
    height: 500,
    maxHeight: '90%',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  userBioContainer: {
    marginTop: 40,
    flexGrow: 1,
  },
  userHandle: {
    alignItems: 'center',
    flexGrow: 1,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: 150,
    flex: 1,
    marginBottom: 10,
  },
  scrollView: { flexGrow: 1 },
  contentContainerStyle: {
    flex: 1,
  },
});

export function UserModal({ longBio, closeModal }: UserModalProps) {
  return (
    <View style={styles.modalView}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <Pressable onPress={closeModal}>
          <View style={styles.closeButton}>
            <AntDesign name="close" size={20} color={Colors.GREY_4} />
          </View>
        </Pressable>
        <View style={styles.userBioContainer}>
          <Text>{longBio}</Text>
          <View style={styles.userHandle}>
            <View style={styles.rowContainer}>
              <Foundation name="web" color={Colors.GREY_5} size={20} />
              <AntDesign name="twitter" color={Colors.GREY_5} size={20} />
              <AntDesign name="instagram" color={Colors.GREY_5} size={20} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
