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
        console.log(item)
      	grp.add(item);
      }
    return grp;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
