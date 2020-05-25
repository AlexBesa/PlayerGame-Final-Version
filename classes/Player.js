class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 10;
        this.ySpeed = 0;
        this.color = "green";
        this.life = 10;
    }

    display() {
        //to fill the rectangle
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, scale, scale);
        context.stroke()
    }
    notOutsideGameContainer() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > gameContainer.width - scale) {
            this.x = gameContainer.width - scale;
        } else if (this.y > gameContainer.height - scale) {
            this.y = gameContainer.height - scale;
        } else if (this.x < 0) {
            this.x = 0;
        } else if (this.y < 0) {
            this.y = 0;
        }
        // for game over
        // if (
        // this.x > gameContainer.width-scale || 
        // this.x < 0 || 
        // this.y<0 || 
        // this.y > gameContainer.width-scale){
        //     alert("Game Over!");
        //     location.reload()
        //     clearInterval(this.display())
        // }

    }
    changeDirection() {
        document.addEventListener('keydown', ((event) => {
            // console.log(event.keyCode);
            const dir = event.key.replace('Arrow', '');
            // console.log(dir)
            switch (dir) {
                case 'Up':
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                    break;
                case 'Down':
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                    break;
                case 'Left':
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                    break;
                case 'Right':
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    break;
            }
        }));
    }
    meetObstacle(obstacle) {
        //varianta sa intre in div  
        // if(this.x === obstacle.x && this.y === obstacle.y)

        //se ating colturile doar
        // if( (this.x === obstacle.x-scale ||this.x === obstacle.x+scale) &&
        //     (this.y === obstacle.y-scale || this.y === obstacle.y+scale )
        //  )
        if (
            (
                this.xSpeed &&
                this.x === obstacle.x - scale &&
                this.y === obstacle.y
            )
            ||
            (
                this.xSpeed &&
                this.x === obstacle.x + scale &&
                this.y === obstacle.y
            )
            ||
            (
                this.ySpeed &&
                this.x === obstacle.x &&
                this.y === obstacle.y - scale
            )
            ||
            (
                this.ySpeed &&
                this.x === obstacle.x &&
                this.y === obstacle.y + scale
            )
        ) {
            console.log("intalnirea se intampla acum ")
            this.color = "red";
            this.xSpeed = 0;
            this.ySpeed = 0;
            setTimeout(() => {
                this.color = "green";
            }, 1000)
            return true;
        }       
        return false;
    }
    reduceLife() {
        this.life--;
        context.font = '15px Arial';
        context.fillStyle = "black";
        context.fillText(`Life:${this.life}`, this.x, this.y - 3, scale * 10)
        console.log("life left is: ", this.life)
        if (this.life === 0) {
            alert("Game Over!")
        }
    }
}
