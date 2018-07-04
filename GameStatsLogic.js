function GetPoints(kind)
{
	switch(kind)
	{
		case 0:
			score += 50;
			break;
		case 1:
			score += 10;
			break;
		case 2:
			score += 20;
			break;
		case 3:
			score += 30;
			break;
	}
}

function LevelGeneration()
{
	if(Alien.position.length == 0)
	{
		isAlienSetUp = false;
		level++;
		countStepsBeforeAlienChangeDirection = 0;
		numberOfAlienMoves = 0;
		while(Bullet.position.length != 0)
		{
			Bullet.position.splice(0, 1);
		}
	}
}

function GameOver()
{
	DrawText("100px Arial", "red", "GAME OVER ", map.height / 2 - 100, map.width / 2 - 100);
	isGamePause = false;
}

function Pause()
{
	DrawText("100px Arial", "blue", "PAUSE ", map.height / 2, map.width / 2 - 100);
}

function DestroyCurrentObjects()
{
	while(Alien.position.length != 0)
	{
		Alien.position.splice(0, 1);
	}
	while(Bullet.position.length != 0)
	{
		Bullet.position.splice(0, 1);
	}
	while(Shield.position.length != 0)
	{
		Shield.position.splice(0, 1);
	}
}

function Sound(src) 
{
    this.Sound = document.createElement("audio");
    this.Sound.src = src;
    this.play = function()
    {
    	if(isSoundOn == true)
    	{
        this.Sound.play();
    	}
    }
    this.stop = function()
    {
        this.Sound.pause();
    }
}

var shootSound = new Sound("shoot.wav");
var playerExplosionSound = new Sound("explosion.wav");
var alienExplosionSound = new Sound("alienExplosion.wav");
