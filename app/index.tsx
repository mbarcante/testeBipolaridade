import { Text, View } from "react-native";
import React, { useState } from "react";
import CheckBox from 'expo-checkbox';

export default function Index() {
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0); // State variable to store the count

  const handleCheckboxChange = (newValue: boolean) => {
    setIsChecked(newValue);
    if (newValue) {
      setCount(count + 1); // Increment count only if checkbox is checked
    } else {
      setCount(Math.max(0, count - 1)); // Decrement count but prevent negative values
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ display: "flex" }}>
      <Text>1.Eu precisava de menos sono</Text>        
        <CheckBox
          disabled={false} // Set disabled to true if needed
          value={isChecked} // Pass the state variable to control the checkbox
          onValueChange={handleCheckboxChange} // Use the dedicated function
        />        
      </View>
      
     <Text>Count: {count}</Text>  
     {/* Display the current count */}
      </View>
  );
}