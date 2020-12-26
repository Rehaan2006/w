class Paper {
  constructor(x,y,r){
   var option={
    isStatic:false, 
   friction:0.5,
   restitution:0.3,
   density:1.2

   }
  
   this.x=200;
   this.y=200;
   this.r=10;
   this.body=Bodies.circle(200,200,10,option)
   World.add(world,this.body)
  
  }
  display(){
  var pos=this.body.position;
  push()
  translate(pos.x,pos.y);
  ellipseMode(CENTER)
  strokeWeight(3);
  fill(255,0,255);
  ellipse(0,0,this.radius)
  pop()
  }
}