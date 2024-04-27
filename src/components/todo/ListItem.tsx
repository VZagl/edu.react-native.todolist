import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Button,
  Touchable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import {themeStyles} from '~/assets/styles/themeStyles';
import {T_TodoItem} from '~/pages/PageTodo';

type T_TodoListItemProps = {
  item: T_TodoItem;
  deleteHandler: Function;
  toggleHandler: Function;
};

export default function ({
  item,
  deleteHandler,
  toggleHandler,
}: T_TodoListItemProps): React.JSX.Element {
  return (
    <TouchableOpacity onPress={() => toggleHandler(item.id)}>
      <View style={[themeStyles.containerRow, styles.header]}>
        {/* <View style={styles.blockList}> */}
        <Text
          style={[
            styles.completedText,
            styles.blockLeft,
            item.completed ? styles.completed : null,
          ]}>
          {item.completed ? '+' : ''}
        </Text>
        <Text
          style={[
            styles.text,
            styles.blockList,
            item.completed ? styles.completed : null,
          ]}>
          {item.text}
        </Text>
        {/* </View> */}
        {/* <View style={styles.blockRight}> */}
        <Text
          style={[styles.closeButton, styles.blockRight]}
          onPress={() => {
            deleteHandler(item.id);
          }}>
          X
        </Text>
        {/* </View> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    // color: 'blue',
    justifyContent: 'center',
  },
  blockLeft: {
    flex: 1,
    // backgroundColor: 'cyan',
  },
  blockRight: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'blue',
    // color: 'yellow',
  },
  blockList: {
    flex: 7,
    // backgroundColor: 'cyan',
  },
  text: {
    // flex: 8,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#ddd',
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    alignSelf: 'center',
  },
  completed: {
    backgroundColor: '#bfb',
  },
  completedText: {
    // flex: 1,
    margin: 5,
    // padding: 5,
    textAlign: 'center',
    borderRadius: 10,
    // borderWidth: 1,
    // backgroundColor: '#fbb',
    color: 'black',
    // width: 10,
    alignSelf: 'center',
  },
  closeButton: {
    // flex: 1,
    margin: 5,
    // padding: 5,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fbb',
    color: 'black',
    width: 20,
    alignSelf: 'center',
  },
});
