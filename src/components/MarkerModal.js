import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import styles from './styles';
import { texts } from './../data/texts';
import { getContentIcons } from './MarkerIconList';
import Modal from 'react-native-modalbox';

const screen = Dimensions.get('window');

const isNULLorEmpty = obj => obj === 'NULL' || !obj;

const getTextLine = content => (<Text style={styles.line} key={content}>{'\u2022'} { content }</Text>);

const getOpeningHours = (content) => {
  let value;
  switch ((new Date()).getDay()) {
    case 0:
      value = content.tid_sondag;
      break;
    case 6:
      value = content.tid_lordag;
      break;
    default:
      value = content.tid_hverdag;
      break;
  }

  let result = null;
  if (!isNULLorEmpty(value)) {
    if (value !== 'ALL') {
      result = getTextLine(`Åpent ${value.replace(new RegExp('<br>', 'g'), '\n')}`);
    }
  } else {
    result = getTextLine('Stengt idag!');
  }

  return result;
};

const getDistanceLine = (distance) => {
  if (distance) {
    return getTextLine(texts.distance(distance));
  }
  return null;
};

const getContent = (content, distance) => {
  const result = [];

  const d = getDistanceLine(distance);
  if (d) {
    result.push(d);
  }

  const pris = content.pris;
  if (isNULLorEmpty(pris)) {
    result.push(getTextLine(texts.costNothing()));
  } else {
    result.push(getTextLine(texts.costSomething(pris)));
  }

  const onlyPissoir = content.pissoir_only;
  if (!isNULLorEmpty(onlyPissoir)) {
    result.push(getTextLine(texts.onlyPissoir()));
  }

  const wheelcharAccess = (!isNULLorEmpty(content.rullestol))
    ? texts.hasWheelcharAccess()
    : texts.hasNoWheelcharAccess();
  result.push(getTextLine(wheelcharAccess));

  const babyChangingRoom = (!isNULLorEmpty(content.stellerom))
    ? texts.hasBabyStuff()
    : texts.hasNoBabyStuff();
  result.push(getTextLine(babyChangingRoom));

  const open = getOpeningHours(content);
  if (open) {
    result.push(open);
  }

  return result;
};

const icons = {
  marginVertical: 15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
};

const styles2 = {
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: (screen.height/4)*2
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
};

const MarkerModal = ({ title, content, distance, onClosed }) => (
  <Modal isOpen={true} onClosed={onClosed} style={styles2.modal}>
    <Text style={styles.title}>{ title }</Text>
    <ScrollView style={styles2.scrollViewContainer}>
      <View style={icons}>
        { getContentIcons(content) }
      </View>
      { getContent(content, distance) }
    </ScrollView>
  </Modal>
);

export default MarkerModal;


