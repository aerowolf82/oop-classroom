class Student {
  constructor(name, skillLevel){
      this.name = name;
      this.skillLevel = skillLevel;
      this.assignments = [];
  }

  study(){
      if(this.skillLevel<100){
        this.skillLevel++;
      }
    return this;
  }

  doHomework(inputObject){
        if(inputObject){
            if(inputObject.skillLevel){
                if(inputObject.skillLevel<100){
                    if(inputObject.skillLevel < this.skillLevel){
                        inputObject.completed = true;
                    } else {
                        inputObject.completed = false;
                    }
                    this.assignments.push(inputObject);
                }           
            }            
        } else{
            this.assignments.forEach(element => {
                if(element.completed === false){
                    if(this.skillLevel > element.skillLevel){
                        element.completed = true;
                    }
                }
            });
        }


    }
}

module.exports = Student
