// render the list of library to user
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  //below will return the list
  renderItem(library) {
    return <ListItem library={library.item} />;
  }

  render() {
    /* the library is the returned from json file and we can access the id and etc
    the keyextracotr generatees its own key. because the react needs own key each component */
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// the below mehtod is the only or the way to get access or reach to our data json
//we are using the connect helper to get access of redux state
//2 step process
//it calls connect and it returns another function.
//then we call return function with Librarylist

export default connect(mapStateToProps)(LibraryList);
