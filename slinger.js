class thrower {

constructor(bodyA, pointB)
{

var oopp = {

    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.004,
    length:10
}

this.pointB = pointB

this.string = Constraint.create(oopp);
        World.add(world, this.string);


}

gone(){

this.string.bodyA = null

}

attach(body){

this.string.bodyA = body

}

display(){

    if(this.string.bodyA){

var pointA = this.string.bodyA.position
var pointB = this.pointB

stroke ("pink")
strokeWeight (4)
line(pointA.x, pointA.y, pointB.x, pointB.y)





}
}



}