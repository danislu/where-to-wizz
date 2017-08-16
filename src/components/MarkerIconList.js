import React from 'react';
import Icon from './Icon';

const iconStyle = {
  marginHorizontal: 10
};

const isNULLorEmpty = obj => obj === 'NULL' || !obj;

const getIcon = (icon, size = 30) =>
  (<Icon name={icon} key={icon} size={size} style={iconStyle} />);

export const getContentIcons = (content, size = 30) => {
  const result = [];

  if (!isNULLorEmpty(content.pris)) {
    result.push(getIcon('dollar', size));
  }

  if (!isNULLorEmpty(content.pissoir_only)) {
    result.push(getIcon('mars', size));
  } else {
    result.push(getIcon('venus-mars', size));
  }

  if (!isNULLorEmpty(content.rullestol)) {
    result.push(getIcon('wheelchair', size));
  }

  if (!isNULLorEmpty(content.stellerom)) {
    result.push(getIcon('child', size));
  }

  return result;
};
