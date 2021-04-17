class SlingShot{
    constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:1,
    }
    this.sling=Constrain.create(options);
    this.pointB=pointB;
    World.add(World,this.sling);

    }
    fly(){
        this.sling.bodyA=null;

    }
    display(){
        if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position;
         var pointB = this.
        }
    }
}