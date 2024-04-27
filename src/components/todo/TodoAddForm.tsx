import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

type T_TodoAddFormProps = {addHandler: Function};

export default function ({addHandler}: T_TodoAddFormProps): React.JSX.Element {
  const [text, setText] = useState<string>('');

  const onChange = (text: string) => {
    setText(text);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="добавить задачу..."
        placeholderTextColor="#444"
        value={text}
      />
      <Button
        title="добавить"
        onPress={() => {
          addHandler(text);
          setText('');
        }}
      />
      {/* <Text style={[styles.text]}>add todo</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#444',
    // color: 'yellow',
    // margin: 5,
    // borderBottomWidth: 2,
  },
  input: {
    // backgroundColor: '#444',
    // color: 'white',
    // placeholderTextColor: '#444',
    borderBottomWidth: 1,
    // borderStyle: 'solid',
    borderColor: 'black',
    // borderWidth: 2,
    padding: 10,
    marginHorizontal: '20%',
    width: '60%',
  },
  text: {
    // backgroundColor: '#444',
    color: '#444',
    textAlign: 'center',
  },
});
