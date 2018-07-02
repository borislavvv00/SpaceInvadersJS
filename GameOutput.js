var isGameSetUp = false;
var isGamePause = false;
var isAlienSetUp = false;
var isAutoPlayClicked = false;
var isPlayerAlive = true;
var isSoundOn = true;
var countStepsBeforeAlienChangeDirection = 0;
var periodBetweenAlienShoots = 0;
var score = 0;
var level = 1;

function DrawPlayerShip()
{
	var playerShip = document.getElementById("playerShip");
	context.drawImage(playerShip, PlayerShip.X, PlayerShip.Y, PlayerShip.size, PlayerShip.size);
}

function DrawAlien()
{
	for(var i = 0; i < Alien.position.length; i++)
	{
		context.fillStyle = Alien.color;
		context.fillRect(Alien.position[i].x, Alien.position[i].y, Alien.sizeHeight, Alien.sizeWidth);
	} 
}

function DrawBullet()
{
	context.fillStyle = Bullet.color;
	for(var i = 0; i < Bullet.position.length; i++)
	{	
		context.fillRect(Bullet.position[i].x, Bullet.position[i].y, 1, 10);
	}
}

function DrawExplosion(x, y, object)
{
	var explosion = document.getElementById("explosion");
	var playerShipExplosion = document.getElementById("playerShipExplosion");
	if(object == "player")
	{
		context.drawImage(playerShipExplosion, x, y, PlayerShip.size, PlayerShip.size);
	}
	else
	{	
		context.drawImage(explosion, x, y, Alien.size, Alien.size);
	}
}

function DrawGameStats()
{
	context.font = "30px Arial";
	context.fillStyle = "white";
	context.fillText("score = " + score + "		level = " + level, 5, 30);
	context.fillText("lives = ", 600, 30);
	var distanceBetweenShips = 20;
	for(var i = 0; i < PlayerShip.lives; i++)
	{
		context.drawImage(playerShip, 680 + distanceBetweenShips, 10, 20, 20);
		distanceBetweenShips += 20;
	}
}

function DrawGameObjects()
{
	if(isGameSetUp == false)
	{
		Alien.direction = "left";
		ShieldPiecesGetCoordinates();
		isGameSetUp = true;	
	}
	if(isAlienSetUp == false)
	{	
		AliensGetCoordinates();
		isAlienSetUp = true;
	}
//----------------------Draw functions---------------------
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
	DrawGameStats();
	DrawBullet();
	DrawShield();
	
	if(periodBetweenAlienShoots  >= 0 && periodBetweenAlienShoots  <= 20)//period to print first image
	{
		DrawAlien00();
	}
	else if(periodBetweenAlienShoots  >= 21 && periodBetweenAlienShoots  <= 31)//period to print second image
	{
		DrawAlien01();
	}
	if(periodBetweenAlienShoots == 31)
	{
		periodBetweenAlienShoots = 0;
	}
	periodBetweenAlienShoots++;
	if(isPlayerAlive == true)
	{	
		DrawPlayerShip();
	}
	else
	{
		GameOver();
		DrawExplosion(PlayerShip.X, PlayerShip.Y, "player");
	}
//------------------------------------------------------------------
	if(isGamePause == false)
	{
		var end = 0;
		if(level <= 7)
		{
			end = level;
		}
		else
		{
			end = 7;
		}
		if(periodBetweenAlienShoots  >= 0 && periodBetweenAlienShoots  <= end)//period for aliens shooting
		{	
			if(Alien.position.length > 1)
			{
				AlienShoot();
			}
		}
		AlienMovement();
		BulletMovement();
		LevelGeneration();
		AlienMoveLogic();
		GameElementGetHit();
		if(isAutoPlayClicked == true)
		{
			AutoPlay();
		}
	}
	else
	{
		Pause();
	}
} 
