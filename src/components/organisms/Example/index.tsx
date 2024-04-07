import {View, Text, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import React from 'react';
import {Button, Icon} from '../../atoms';
import {useUIContext, Label, ComponentID, ColorCode} from '@neur0base/app-sdk-core';

export declare type WordDetailScreenProps = {
  wordTitle: string;
  pronunciation: string;
  meaning: string;
  examples: string[];
  onBack: () => void;
  onPlayPronunciation: () => void;
  onSelectExample: (example: string) => void;
  componentID: ComponentID;
};

export declare type WordDetailScreenLabels = {
  backButton: Label; // default: "Back"
  playButton: Label; // default: "Play"
};

export declare type WordDetailScreenThemeColors = {
  backgroundColor?: ColorCode;
  textColor?: ColorCode;
  buttonColor?: ColorCode;
};

export default function WordDetailScreen(props: WordDetailScreenProps): JSX.Element {
  const {wordTitle, pronunciation, meaning, examples, onBack, onPlayPronunciation, onSelectExample, componentID} = props;
  const {getThemeColor, getUILabel, getNewComponentID} = useUIContext(componentID);

  const styles = StyleSheet.create({
    container: tailwind('flex-1 bg-white p-4'),
    title: tailwind('text-2xl font-bold'),
    pronunciationContainer: tailwind('flex-row items-center my-2'),
    pronunciationText: tailwind('text-lg'),
    playButton: tailwind('ml-2'),
    meaningContainer: tailwind('my-4'),
    meaningText: tailwind('text-base'),
    examplesContainer: tailwind('my-4'),
    exampleItem: tailwind('mb-2 p-2 rounded-lg bg-gray-100'),
    backButtonContainer: tailwind('my-4'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{wordTitle}</Text>
      <View style={styles.pronunciationContainer}>
        <Text style={styles.pronunciationText}>{pronunciation}</Text>
        <Button
          styleName="normal"
          componentID={getNewComponentID('playPronunciationButton')}
          children={getUILabel('Play', 'Play')}
          onClick={onPlayPronunciation}
        />
        <Icon name="fa_volume-up" styleName="normal" color={getThemeColor('iconColor', 'textColor')} />
      </View>
      <View style={styles.meaningContainer}>
        <Text style={styles.meaningText}>{meaning}</Text>
      </View>
      <View style={styles.examplesContainer}>
        {examples.map((example, index) => (
          <Text key={index} style={styles.exampleItem} onPress={() => onSelectExample(example)}>
            {example}
          </Text>
        ))}
      </View>
      <View style={styles.backButtonContainer}>
        <Button
          styleName="normal"
          componentID={getNewComponentID('backButton')}
          children={getUILabel('Back', 'Back')}
          onClick={onBack}
        />
      </View>
    </View>
  );
}