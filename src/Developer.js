class Developer {
    constructor(name){
      this.name = name;
    }
  
    hello(){
      return 'Hello World! I am ' + this.name + ' and I am a web developer';
    }
  }
  
  var nathan = new Developer('Nathan');
nathan.hello(); // Hello World! I am Nathan and I am a web developer
console.log('%casd asd', 'color: blue');
console.log(nathan.hello());

class ReactDeveloper extends Developer {
  installReact(){
    return 'installing React .. Done.';
  }
}

var nathanasd = new ReactDeveloper('Nathan');
console.log(nathanasd.hello()); // Hello World! I am Nathan and I am a web developer
console.log(nathanasd.installReact()); // installing React .. Done.
