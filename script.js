var key1 = {
  nestedKey1:"hi!",
  nestedKey2: "bye!",
  nested: {
  
  }
}

var key2 = {
  nestedkey1: {
    nestedkey2: {nestedKey5: {notAsNestedKey: "I'm not as nested!"},
    nestedkey3: {nestedKey4: {reallyNestedKey: "I'm deeply nested!"}}
  }
}
}

var listKey1 = {

}

console.log("time to add some firebase code!")
storeValue("key1", key1)
storeValue("key2", key2)
storeValue("key3", "just me!")
addNewValue("listKey1", listKey1)