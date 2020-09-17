class Triangle{
    constructor(x,y,sides,radius,options) {
      var options = {
        'isStatic':true,
        'friction':1.0,
        'density':1.0,
        
    }
        this.body = Bodies.polygon(x,y,sides,radius,options);
        this.sides=2;
        this.radius=3;
        console.log(this.body);
        World.add(world,this.body);
      }
      display(){
        push();
        triangle(this.body.position.x,this.body.position.y,100,40,40,50);
        pop();
      }
}