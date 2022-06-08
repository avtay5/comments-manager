/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { SEARCH_BY_MENU } from '../utils/Constants';

const styles = {
  menuItem: {
    fontSize: 10,
    height: 30,
  },
};

function SearchByMenu({ searchBy, setSearchBy }) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const onSelectSearchBy = select => {
    setSearchBy(select);
    closeMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity onPress={openMenu}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{`Search by: ${searchBy}`}</Text>
          </View>
        </TouchableOpacity>
      }
      contentStyle={{ marginTop: 20 }}
    >
      <Menu.Item
        style={styles.menuItem}
        onPress={() => onSelectSearchBy(SEARCH_BY_MENU.ALL)}
        title={SEARCH_BY_MENU.ALL}
      />
      <Menu.Item
        style={styles.menuItem}
        onPress={() => onSelectSearchBy(SEARCH_BY_MENU.NAME)}
        title={SEARCH_BY_MENU.NAME}
      />
      <Menu.Item
        style={styles.menuItem}
        onPress={() => onSelectSearchBy(SEARCH_BY_MENU.EMAIL)}
        title={SEARCH_BY_MENU.EMAIL}
      />
      <Menu.Item
        style={styles.menuItem}
        onPress={() => onSelectSearchBy(SEARCH_BY_MENU.COMMENT)}
        title={SEARCH_BY_MENU.COMMENT}
      />
    </Menu>
  );
}

SearchByMenu.propTypes = {
  searchBy: PropTypes.oneOf([
    SEARCH_BY_MENU.ALL,
    SEARCH_BY_MENU.EMAIL,
    SEARCH_BY_MENU.NAME,
    SEARCH_BY_MENU.COMMENT,
  ]),
  setSearchBy: PropTypes.func,
};

SearchByMenu.defaultProps = {
  searchBy: SEARCH_BY_MENU.ALL,
  setSearchBy: () => {},
};

export default SearchByMenu;
