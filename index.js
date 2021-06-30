// Write your solution here!
var drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){ 
    return drivers.push("Ralph")
}

function destructivelyPrependDriver(name){
    return drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
    return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift();
}

function appendDriver(name){
    return [...drivers, name];
}

function prependDriver(name){
    return[name, ...drivers]
}

function removeFirstDriver () {
    return drivers.slice(1);
  }

  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
}
