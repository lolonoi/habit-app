import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useAppContext from "../hooks/useAppContext";

export default function storageCRUD() {
  const {state : {habitList} , dispatch} = useAppContext();

  function setHabit(newList){
      dispatch({type : "HABIT_LIST_CHANGE", habitList : newList});

  }

  React.useEffect(() => {
      AsyncStorage.getItem('habitlist').then((saveList) => {
          if(saveList){
              let parsedlist = JSON.parse(saveList);
              setHabit(parsedlist);
          }
          console.log(saveList);
      });
  }, [])

  async function habitCreate(habit){
     const newList = [...habitList]; 
     newList.push(habit);
     const jsonValue = JSON.stringify(newList);
     await AsyncStorage.setItem("habitlist",jsonValue).catch((e)=>console.log(e));
     setHabit(newList);


  }

  async function habitUpdate(index, habit) {
      const newList = [...habitList]; 
      newList.splice(index,1,habit);
      const jsonValue = JSON.stringify(newList);
     await AsyncStorage.setItem("habitlist",jsonValue).catch((e)=>console.log(e));
     setHabit(newList);

  }

  async function habitDelete(index){
      const newList = [...habitList]; 
      newList.splice(index,1);
      const jsonValue = JSON.stringify(newList);
     await AsyncStorage.setItem("habitlist",jsonValue).catch((e)=>console.log(e));
     setHabit(newList);


  }

  return{habitList, habitCreate,habitUpdate, habitDelete};

}