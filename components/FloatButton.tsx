import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export interface FloatButtonProps {
  iconName: string;
  onPress: () => void;
}

export default (props: FloatButtonProps) => {
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}>
      <Icon name={props.iconName} size={30} color="#01a699" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 100,
    borderWidth: 1,
    bottom: 10,
    height: 70,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    width: 70,
  }
});
