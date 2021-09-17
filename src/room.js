class Room {
  constructor(name, description){
      this.name = name;
      this.description = description;
      this.contents = [];
  }

  add(item){
    this.contents.push(item);
    return this;
  }

  has(item){
      let isHere = false;
      this.contents.forEach(element => {
          if(element === item){
              isHere = true;
          }
      });
      return isHere;
  }
}

module.exports = Room
