class Obstacle {
    constructor(color){
        this.x;
        this.y;
        this.color=color;
    }
    divObstacle(){
        context.fillStyle=this.color;
        context.fillRect(this.x,this.y,scale,scale);
    }
    setLocation(){
        
        this.x = (Math.floor(Math.random()* rows)) *scale;
        this.y = (Math.floor(Math.random()* columns)) *scale;
    }     
}
