import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Container, Select, Text } from './styles';

export default function MenuPopup({
  icon,
  style,
  labelText,
  data,
  onSelectOption,
}) {
  const [menuText, setMenuText] = useState('');

  useEffect(() => {
    function loadingLabelText() {
      setMenuText(labelText);
    }
    loadingLabelText();
  }, [labelText]);

  const handleSelected = value => {
    setMenuText(value);
    onSelectOption(value);
  };

  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <Select onSelect={handleSelected}>
        <MenuTrigger
          text={menuText}
          customStyles={{
            triggerText: {
              color: 'rgba(255,255,255,.6)',
              fontSize: 15,
              fontWeight: 'bold',
            },
            triggerWrapper: {
              height: 30,
              justifyContent: 'center',
            },
            TriggerTouchableComponent: TouchableOpacity,
          }}
        />
        <MenuOptions>
          <ScrollView style={{ maxHeight: 300 }}>
            {data &&
              data.map(item => (
                <MenuOption key={item.id} value={item.value}>
                  <Text>{item.label}</Text>
                </MenuOption>
              ))}
          </ScrollView>
        </MenuOptions>
      </Select>
    </Container>
  );
}

MenuPopup.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSelectOption: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
      ]),
    })
  ).isRequired,
  labelText: PropTypes.string,
};

MenuPopup.defaultProps = {
  icon: null,
  style: {},
  labelText: 'Selecione',
  onSelectOption: () => {},
};
