import React from 'react';
import { Searchbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import Colors from '../utils/Colors';
import { SEARCH_BY_MENU } from '../utils/Constants';

const styles = {
  searchBarStyle: {
    shadowRadius: 0,
    shadowOpacity: 0,
    borderWidth: 0.2,
    borderColor: Colors.mediumGrey,
    marginBottom: 10,
    marginTop: 3,
    height: 40,
  },
};

function SearchBar({
  searchQuery,
  setSearchQuery,
  comments,
  setFilteredComments,
  searchBy,
}) {
  const getSearchFilter = (item, qry) => {
    if (searchBy === SEARCH_BY_MENU.ALL) {
      return (
        item?.name?.toLowerCase().includes(qry) ||
        item?.email?.toLowerCase().includes(qry) ||
        item?.body?.toLowerCase().includes(qry)
      );
    }
    if (searchBy === SEARCH_BY_MENU.NAME) {
      return item?.name?.toLowerCase().includes(qry);
    }
    if (searchBy === SEARCH_BY_MENU.EMAIL) {
      return item?.email?.toLowerCase().includes(qry);
    }
    if (searchBy === SEARCH_BY_MENU.COMMENT) {
      return item?.body?.toLowerCase().includes(qry);
    }
    return null;
  };

  const onSearch = query => {
    setSearchQuery(query);
    const qry = query.toLowerCase();

    const filtered = comments.filter(item => getSearchFilter(item, qry));

    if (filtered?.length > 0) {
      setFilteredComments(filtered);
    } else {
      setFilteredComments([]);
    }
  };
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onSearch}
      value={searchQuery}
      inputStyle={{ fontSize: 14 }}
      style={styles.searchBarStyle}
    />
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  comments: PropTypes.array,
  setFilteredComments: PropTypes.func,
  searchBy: PropTypes.oneOf([
    SEARCH_BY_MENU.ALL,
    SEARCH_BY_MENU.EMAIL,
    SEARCH_BY_MENU.NAME,
    SEARCH_BY_MENU.COMMENT,
  ]),
};

SearchBar.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => {},
  comments: [],
  setFilteredComments: () => {},
  searchBy: SEARCH_BY_MENU.ALL,
};

export default SearchBar;
