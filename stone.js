class stn {

    constructor(x,y,r,angle){

var optt = {

   
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2

}

this.r=r

this.body = Bodies.circle(x,y,this.r,optt)
this.image = loadImage("image1/stone.png")

World.add(world, this.body)



    }

display(){

var angle = this.body.angle
var tt = this.body.position

imageMode (CENTER)
image (this.image, tt.x, tt.y, 40, 40)


push ();
translate(tt.x, tt.y)
rotate (angle)
pop ();





}














}