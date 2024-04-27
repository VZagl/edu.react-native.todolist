import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from '~/components/Section';
import {themeStyles} from '~/assets/styles/themeStyles';

export default function (): React.JSX.Element {
  return (
    <View>
      <Header />
      <Section title="Step One">
        Edit <Text style={themeStyles.highlight}>App.tsx</Text> to change this
        screen and then come back to see your edits.
      </Section>
      <Section title="See Your Changes">
        <ReloadInstructions />
      </Section>
      <Section title="Debug">
        <DebugInstructions />
      </Section>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section>
      <LearnMoreLinks />
    </View>
  );
}
