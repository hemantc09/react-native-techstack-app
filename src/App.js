
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
/*
    1. we created a store and  pass to the provided tag
    2. We created one redcuer and pass to the store when it created
*/
  return (
    <Provider store={createStore(reducers)}>
    {/* because flex:1 view tag takes full height of viewport device  */}
      <View style={{ flex:1 }}>
        <Header headerText="TechStack" />
          <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
