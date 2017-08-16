import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity as Touchable
} from 'react-native';
import styles from './styles';
import { texts } from './../data/texts';
import { getContentIcons } from './MarkerIconList';
import Dialog from './utils/Dialog';

const isNULLorEmpty = obj => obj === 'NULL' || !obj;

const getTextLine = content => (<Text style={styles.line} key={content}>...{ content }</Text>);

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
      result = getTextLine(`åpent ${value.replace(new RegExp('<br>', 'g'), '\n')}`);
    }
  } else {
    result = getTextLine('er stengt idag!');
  }

  return result;
};

const getContent = (content) => {
  const result = [];
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

  result.push(getOpeningHours(content));

  return result;
};

const icons = {
  marginVertical: 15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end'
};

const styles2 = {
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
};

const getDistanceLine = (distance) => {
  if (distance) {
    return <Text style={styles.line}>...{ texts.distance(distance) }</Text>;
  }
  return null;
};

const MarkerInfo = ({ title, content, distance }) => (
  <Dialog>
    <View style={styles2.container}>
      <Text style={styles.title}>{ title }</Text>
      <ScrollView style={styles2.scrollViewContainer}>
        <View style={icons}>
          { getContentIcons(content) }
        </View>
        { getDistanceLine(distance) }
        { getContent(content) }
      </ScrollView>
    </View>
  </Dialog>
);

export default MarkerInfo;
