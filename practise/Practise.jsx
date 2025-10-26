import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');
  return (
    <View style={styles.container}>

      {/*Box Container */}
      <View style={styles.boxContainer} >
        <View style={[styles.box, {backgroundColor: color1}]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
      <View style={[styles.box, {backgroundColor: color2}]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
      </View>

      {/*Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'red'}]}
          onPress={()=>{
            setColor1('red');
            setColor2('red');
          }}
        >
        <Text style={styles.buttonText}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'blue'}]}
          onPress={()=>{
            setColor1('blue');
            setColor2('blue');
          }}
        >
        <Text style={styles.buttonText}>Blue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 40
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white'
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

})