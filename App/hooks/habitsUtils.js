import React from "react";

export function calculatePercentage(habitList) {
    const totalHabits = habitList.length;
    const checkedHabits = habitList.filter((habit) => habit.checked).length;
    if (totalHabits === 0) {
      return 0; // Éviter la division par zéro
    }
    return (checkedHabits / totalHabits) * 100;
  }