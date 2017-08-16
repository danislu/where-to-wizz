import React, { PropTypes } from 'react';
import {
  Text,
  View,
  ScrollView,
  Switch,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from './../Icon';

const filterStyle = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 3,
    borderRadius: 25
  },
  scroller: {
    padding: 10
  },
  wrapper: {
    flex: 1
  },
  icon: {
    marginHorizontal: 10,
    color: 'white'
  },
  text: {
    color: 'white'
  }
});

const getIcon = (icon, size = 30) =>
  (<Icon name={icon} key={icon} size={size} style={filterStyle.icon} />);


const Filter = ({ filters, changeFilter }) => (
  <View style={filterStyle.wrapper}>
    <ScrollView style={filterStyle.scroller}>
      {
        Object.entries(filters)
          .map(value => value[1])
          .map(filter => (
            <TouchableWithoutFeedback onPress={() => changeFilter(filter, !filter.value)} key={`filter-${filter.id}`}>
              <View style={filterStyle.row}>
                { getIcon(filter.icon) }
                <Text style={filterStyle.text}>{filter.title}</Text>
                <Switch
                  onValueChange={value => changeFilter(filter, value)}
                  value={filter.value}
                />
              </View>
            </TouchableWithoutFeedback>)
          )
      }
    </ScrollView>
  </View>
);

Filter.propTypes = {
  filters: PropTypes.shape({}),
  changeFilter: PropTypes.func.isRequired
};

Filter.defaultProps = {
  filters: []
};

export default Filter;
