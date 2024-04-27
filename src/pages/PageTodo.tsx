import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import {themeStyles} from '~/assets/styles/themeStyles';
import ListItem from '~/components/todo/ListItem';
import TodoAddForm from '~/components/todo/TodoAddForm';
import TodoHeader from '~/components/todo/TodoHeader';

export type T_TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export default function (): React.JSX.Element {
  const [todos, setTodos] = useState<T_TodoItem[]>([
    {id: 1, text: 'купить молоко', completed: true},
    {id: 2, text: 'помыть машину', completed: false},
    {id: 3, text: 'Купить картошку', completed: true},
    {id: 4, text: 'Стать миллионером', completed: false},
  ]);

  const getId = (): number => {
    return todos.reduce((v, cur) => Math.max(v, cur.id), 0) + 1;
  };

  const onAdd = (text: string) => {
    if (text.trim().length < 1) return;
    const newTodo = {
      id: getId(),
      text,
      completed: false,
    };
    setTodos(todos => [newTodo, ...todos]);
    // console.log('add ', newTodo);
  };

  const onDelete = (id: number): void => {
    setTodos(todos => todos.filter(v => v.id !== id));
  };

  const onToggle = (id: number): void => {
    setTodos(todos =>
      todos.map(v => {
        if (v.id === id) {
          v.completed = !v.completed;
          return v;
        } else {
          return v;
        }
      }),
    );
  };

  return (
    <View>
      <TodoHeader />
      <TodoAddForm addHandler={onAdd} />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <ListItem
              item={item}
              deleteHandler={onDelete}
              toggleHandler={onToggle}
            />
          )}
        />
        {/* <TodoList todos={todos} setTodos={setTodos} /> */}
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#fff',
    // color: 'blue',
  },
});
