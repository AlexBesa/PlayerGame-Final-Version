class Game {
    constructor(containerMap) {
        this.containerMap = containerMap;
    }
    startApp() {
        let player = new Player();
        const obs = [];
        for (let i = 0; i < 20; i++) {
            obs.push(new Obstacle("yellow"));
            obs[i].setLocation();
            obs[i].divObstacle();
        }
        window.setInterval(()=>{
            context.clearRect(0,0,gameContainer.width,gameContainer.height);
            player.notOutsideGameContainer();
            player.display();
            for(let i=0;i<obs.length;i++){
                obs[i].divObstacle()
                if(player.meetObstacle(obs[i])){
                    player.reduceLife();
                    obs[i].setLocation();  
                }
            } 
        },250);
        player.changeDirection(); 
        player.changeDirection();
    }
}
