import React from "react";
import storageCRUD from "../hooks/storageCRUD"

export default function newHabitManage() {
  const [title, titleChange] = React.useState("");
 const {habitCreate} = storageCRUD();

  const fieldsTab = [
    {
      value: title,
      onChange: (e) => titleChange(e),
      placeholder: "Boire 2L d'eau",
    },
  ];


  async function handleSubmit() {
    if(title.length === 0){
        return alert('Veuillez saisir un nom pour votre habitue');
    }
    await habitCreate({title, checked : false});
    titleChange("");

  }
  return {fieldsTab, handleSubmit};
}
