class Stone {
    constructor(x,y,width,height)

{
var options ={
    "restitution":0.8,
    "friction":0.9,
    "density":12
}
this.x=x;
this.y=y;
this.width=width;
this.height=height
this.body=Bodies. rectangle(this.x,this.y,this.width,this.height, options)
World.add(world, this.body);
}
display()
{
    var stone=this.body.position;
    push()
    translate(stone.x, stone.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("black");
                fill("green");
                rect(0,0,this.width,this.height)





pop()

}









}