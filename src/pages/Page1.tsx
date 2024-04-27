import React from 'react';
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
} from 'react-native';

import {themeStyles} from '~/assets/styles/themeStyles';
import Section from '~/components/Section';

export default function (): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const isDarkMode = true;

  const handleButtonPress = () => {
    Alert.alert('button ', 'pressed', [
      {text: 'yes', onPress: () => console.log('button YES')},
      {text: 'no', onPress: () => console.log('button NO')},
    ]);
  };

  return (
    <View style={themeStyles.containerRow}>
      <View style={styles.blockLeft}></View>
      <View style={[themeStyles.container, styles.blockCenter]}>
        <Text
          style={styles.sectionTitle}
          onPress={e => console.log('\r\npressed text')}>
          Hello!!!
        </Text>
        <Button title={'Кнопка'} onPress={handleButtonPress} color="red" />
        <TouchableWithoutFeedback
          onPressOut={() => console.log('touchable press')}>
          <Image
            source={require('~/assets/images/sticker_splash2x.png')}
            // style={{height: '100%'}}
          />
        </TouchableWithoutFeedback>

        <Section title="123">
          <Text>123456</Text>
        </Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  blockMain: {backgroundColor: 'green'},
  blockLeft: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
  },
  blockCenter: {
    flex: 7,
    backgroundColor: 'cyan',
  },
});
