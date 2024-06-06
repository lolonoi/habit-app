import React from "react";
import storageCRUD from "../hooks/storageCRUD"

export default function newHabitManage() {
  const [title, titleChange] = React.useState("");
 const {habitCreate, habitUpdate} = storageCRUD();

  const fieldsTab = [
    {
      value: title,
      onChange: (e) => titleChange(e),
      placeholder: "Boire 2L d'eau",
    },
  ];
  function sanitizeInput(input) {
    // Remove potentially dangerous characters
    return input.replace(/[^a-zA-Z0-9 ]/g, "").trim();
  }

  function isValidInput(input) {
    // Ensure input is not empty and not excessively long
    return input.length > 0 && input.length <= 50;
  }

  async function handleSubmit() {
    const sanitizedTitle = sanitizeInput(title);
    
    if (!isValidInput(sanitizedTitle)) {
      return alert("Veuillez saisir un nom valide pour votre habitude (1-50 caractères)");
    }

    await habitCreate({ title: sanitizedTitle, checked: false });
    titleChange("");
  }

  async function handleUpdate(index) {
    const habitToUpdate = habitList[index];
    const sanitizedTitle = sanitizeInput(habitToUpdate.title);
  
    if (!isValidInput(sanitizedTitle)) {
      return alert("Veuillez saisir un nom valide pour votre habitude (1-50 caractères)");
    }
  
    // Mettre à jour l'habitude avec le nouveau titre sécurisé
    habitToUpdate.title = sanitizedTitle;
  
    // Mettre à jour l'habitude dans votre liste d'habitudes
    await habitUpdate(index, habitToUpdate);
  
    // Réinitialiser le champ de saisie du titre
    titleChange("");
  }

  return { fieldsTab, handleSubmit };
}
