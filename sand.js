class Sand{
 constructor(x,y,r){
var a = {
    restitution:1.2,
    friction:0.5,
    density:3
}
this.body=Matter.Bodies.circle(x,y,r,a)
this.x=x
this.y=y
this.r=r
World.add(world,this.body)
 }
display(){
var sandpose=this.body.position;
push ();
translate(this.body.position.x,this.body.position.y)
rotate (this.body.angle)
fill("pink")
ellipse(0,0,this.r,this.r)

}


























}