function MoveWithMouse(event)
{
	var cursorX = event.clientX;
	if(cursorX >= 0 && cursorX <= map.width && isPlayerAlive == true && isGamePause == false)
	{
		PlayerShip.X = cursorX - 27;	
	}
}

function GetKeyboardCommands()
{
	if(isGamePause == false && isPlayerAlive == true)
	{
		switch(event.keyCode)
		{
			case 32://space
				PlayerShoot();
				break;
			case 65://a
				PlayerShip.X-=3;
				break;
			case 68://d
				PlayerShip.X+=3;
				break;
		}
	}
}

function AlienMovement()
{
	for(var i = 0; i < Alien.position.length; i++)
	{
		if(Alien.position[i].kind == 0)//spacel alien
		{
			if(Alien.position.length != 0 && Alien.position[i].direction == "rigth")
			{
				Alien.position[i].x++;
			}
		}
		else//normal aliens
		{
			if(Alien.direction == "left")
			{
				Alien.position[i].x--;
			}
			else if(Alien.direction == "rigth")
			{
				Alien.position[i].x++;
			}
			else if(Alien.direction == "up")
			{
				Alien.position[i].y--;
			}	
			else if(Alien.direction == "down")
			{
				Alien.position[i].y++;
			}
		}
	}
}

function BulletMovement()
{
	for(var i = 0; i < Bullet.position.length; i++)
	{
		if(Bullet.position[i].id == "player")
		{
			Bullet.position[i].y-=5;
		}
		else if(Bullet.position[i].id == "alien")
		{
			Bullet.position[i].y+=5;
		}
	}
}