import { StyleSheet, Text, View,Button,TouchableOpacity,FlatList } from 'react-native';
import React , { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from "react-redux";
import { removeConsumption } from '../store/feul-action';


const FuelList = ({navigation}) =>{
    const dispatch = useDispatch();
    const fuelList = useSelector(state => state.fuel.usedList);
    const userAllowance = useSelector(state => state.fuel.userAllowance)

    const removeFuel = (fuelObj) => {
        dispatch(removeConsumption(fuelObj));
    }

return(
    <View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={()=>navigation.navigate('CreateList')}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
  </View>
        <Text style={styles.allowanceText}>User Allowance Remaining: {userAllowance}</Text>

        <FlatList
        data ={fuelList}
        renderItem={
            itemData=>(
                <View style={styles.listContainer}>
                    <Text style={styles.text}>{itemData.item.fuelType}</Text>
                    <Text style={styles.text}>{itemData.item.price}</Text>
                    <Text style={styles.text}>{itemData.item.useAmount}</Text>
                    <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='Remove' onPress={removeFuel.bind(this, itemData.item)}/>
                    </View>
                </View>
            )
        }
        />
    </View>
    
)
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: '55%'
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    allowanceText:{
        marginLeft:'45%'
    },
    listContainer:{
            width: "70%",
            borderWidth: 1,
            borderColor: "black",
            padding: 8,
            margin: "15%",
          },
    text:{
        textAlign:'center'
    }
  });

  export default FuelList;