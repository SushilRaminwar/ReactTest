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
console.log('asd');
console.log(nathan.hello());