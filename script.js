var key1 = {
  nestedKey1:"hi!",
  nestedKey2: "bye!",
  nested: {
    key8: "b;a;a"
  }
}

console.log("time to add some firebase code!")
storeValue("key1/listKey1", "hola!" + "adios!")
storeValue("key1",key1)
