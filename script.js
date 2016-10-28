var key1 = {
  nestedKey1:"hi!",
  nestedKey2: "bye!",
  nested: {
  
  }
}

var key2 = {
  nestedkey1: {
    nestedkey2: {nestedKey5: {notAsNestedKey: "I'm not as nested!"}
  
  }
  }
}


console.log("time to add some firebase code!")
storeValue("key1",key1)
