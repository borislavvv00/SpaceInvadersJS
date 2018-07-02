var numberOfAlienMoves = 0;
function AlienMoveLogic()
{
//------------------------------------------normal alien-------------------------------------------
	countStepsBeforeAlienChangeDirection++;
	if(numberOfAlienMoves >= 0 && numberOfAlienMoves <= 1)//moving down
	{
		switch(countStepsBeforeAlienChangeDirection)
		{
			case 10:
				Alien.direction = "rigth";
				break;
			case 30:
				Alien.direction = "down";
				break;
			case 40:
				Alien.direction = "left";
				break;
			case 60:
				Alien.direction = "down";
				break;
			case 70 : 
				numberOfAlienMoves++;
				countStepsBeforeAlienChangeDirection = 0;
				break;
		}
	}
	else if(numberOfAlienMoves >= 2 && numberOfAlienMoves <= 4)//moving up
	{
		switch(countStepsBeforeAlienChangeDirection)
		{
			case 10:
				Alien.direction = "rigth";
				break;
			case 30:
				Alien.direction = "up";
				break;
			case 40:
				Alien.direction = "left";
				break;
			case 60:
				Alien.direction = "up";
				break;
			case 70 : 
				numberOfAlienMoves++;
				countStepsBeforeAlienChangeDirection = 0;
				if(numberOfAlienMoves == 4)
				{
					numberOfAlienMoves = 0;
				}
				break;
		}
	}
//------------------------------------------spacial alien-------------------------------------------	
	if(Alien.position[Alien.position.length - 1].x == map.width)
	{
		Alien.position[Alien.position.length - 1].x = 0;
	}
}

function GameElementGetHit()
{
	for(var s = 0; s < Shield.position.length; s++)
	{
		for(var j = 0; j < Alien.position.length; j++)
		{
			for(var i = 0; i < Bullet.position.length; i++)
			{
//------------------------------------------------------------------player's bullet hit alien-------------------------------------------------------------------
				if(Bullet.position[i].id == "player")
				{
					if(Bullet.position[i].y >= Alien.position[j].y && Bullet.position[i].y <= Alien.position[j].y + Alien.size && Bullet.position[i].x >= Alien.position[j].x && Bullet.position[i].x <= Alien.position[j].x + Alien.size)
					{
						DrawExplosion(Alien.position[j].x, Alien.position[j].y, "alien");
						GetPoints(Alien.position[j].kind);
						Alien.position.splice(j, 1);
						Bullet.position.splice(i, 1);
						alienExplosionSound.play();
					}
				}
//------------------------------------------------------------------alien's bullet hit shield's piece or player's ship------------------------------------------
				if(Bullet.position[i].id == "alien")
				{
					if(Bullet.position[i].y >= Shield.position[s].y && Bullet.position[i].y <= Shield.position[s].y + Shield.size && Bullet.position[i].x >= Shield.position[s].x && Bullet.position[i].x <= Shield.position[s].x + Shield.size)
					{
						DrawExplosion(Shield.position[s].x, Shield.position[s].y, "shield");
						if(Shield.position[s].decay == 2)
						{
							Shield.position.splice(s, 1);
						}
						else
						{
							Shield.position[s].decay++;
						}
						Bullet.position.splice(i, 1);
						playerExplosionSound.play();
					}
					if(Bullet.position[i].y >= PlayerShip.Y && Bullet.position[i].y <= PlayerShip.Y +  PlayerShip.size && Bullet.position[i].x >= PlayerShip.X && Bullet.position[i].x <= PlayerShip.X + PlayerShip.size)
					{
						DrawExplosion(PlayerShip.X, PlayerShip.Y, "player");
						Bullet.position.splice(i, 1);
						PlayerShip.lives--;
						playerExplosionSound.play();
						if(PlayerShip.lives == 0)
						{	
							isPlayerAlive = false;
						}
					}
				}
			}
		}
	}
}

function PlayerShoot()
{
	if(isPlayerAlive == true)
	{
		Bullet.position.push({ x : PlayerShip.X + 20, y : PlayerShip.Y - 6, id : "player" });
		shootSound.play();
	}
}

function AlienShoot()
{
	var alienShooted = Math.floor(Math.random() * Alien.position.length - 1);
	Bullet.position.push({ x : Alien.position[alienShooted].x + Alien.size / 2, y : Alien.position[alienShooted].y + Alien.size, id : "alien" });
	shootSound.play();
}
