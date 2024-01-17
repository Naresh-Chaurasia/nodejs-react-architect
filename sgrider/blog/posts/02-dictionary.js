const contacts = {
    "Alice": "123-456-7890",
    "Bob": "987-654-3210",
    "Charlie": "456-789-0123"
  };
  
  // Accessing values in the dictionary
  console.log(contacts["Alice"]); // Output: 123-456-7890
  console.log(contacts["Charlie"]); // Output: 456-789-0123
  
  // Adding a new entry to the dictionary
  contacts["David"] = "555-555-5555";
  
  // Modifying an existing entry
  contacts["Alice"] = "111-111-1111";
  
  // Deleting an entry
  delete contacts["Bob"];
  
  // Iterating through the dictionary
  for (let name in contacts) {
    console.log(`${name}: ${contacts[name]}`);
  }
  