class Marker {
  constructor(size, color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write(inputString){
      let chars = inputString.split('');
      let result ='';
      chars.forEach(element => {
        if(element === ' '){
            result += element;
        } else if (this.remainingInk >0){
            this.remainingInk--;
            result += element;
        }
      });
      return result;
  }
}

module.exports = Marker
