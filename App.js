import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem.js';
//k
export default class App extends Component {
  state= {
    placeName: "",
    places: []
  };

  placeNameChangedChanger = val => {
    this.setState({
      placeName: val
    });
  };
placeSubmitHandler = () => {
  if (this.state.placeName.trim() === ""){
    return;
//if empty just returns
  }

  this.setState(prevState => {
    return {
      places: prevState.places.concat(prevState.placeName)
    };
  });
};

  render() {

    const placesOutput = this.state.places.map((place, i )=> (
      <ListItem 
      key={i} 
      placeName={place}
      onItemPressed={() => alert("Item pressed ID = " + i)}
      />
    ));
//logic for outputting array place
//ListItem custom component

    return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedChanger}
        />
        <Button
         title="Add" 
         style={styles.placeButton} 
         onPress={this.placeSubmitHandler}
         />
      </View>
      <View style={styles.listContainer}>
          {placesOutput}
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
  
});
