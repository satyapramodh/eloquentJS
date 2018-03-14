// Your code here (and the code from the previous exercise)
class Group {
  // Your code here.
  constructor(){
  	this.list = [];
  }
  
  add(val){
  	if(!this.has(val)){
    	this.list.push(val);
    }
  }

  delete(val){
  	if(this.has(val)){
    	this.list = this.list.filter(v => v!==val );
    }
  }
  
  has(val){
  	return (this.list.indexOf(val) !== -1);
  }
  
  static from(items){
    let grp = new Group();
	  for(let item of items){
      	grp.add(item);
      }
    return grp;
  }
  
  [Symbol.iterator](){
  	return new GroupIterator(this);
  }
}

class GroupIterator{
	constructor(group){
    	this.group = group;
      	this.idx = 0;
    }
  next(){
  	if(this.idx >= this.group.list.length){
    	return {done: true};
    } else {
    	return {
        	done: false,
          	value: this.group.list[this.idx++]
        }
    }
  }
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
