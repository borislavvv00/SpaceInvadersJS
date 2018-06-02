function ShieldImage(i, angle1, angle2, angle3, angle4, square)
{
	if(Shield.position[i].angle == 1)
	{
		context.drawImage(angle1, Shield.position[i].x, Shield.position[i].y, Shield.size, Shield.size);
	}
	else if(Shield.position[i].angle == 2)
	{
		context.drawImage(angle2, Shield.position[i].x, Shield.position[i].y, Shield.size, Shield.size);
	}
	else if(Shield.position[i].angle == 3)
	{
		context.drawImage(angle3, Shield.position[i].x, Shield.position[i].y, Shield.size, Shield.size);
	}
	else if(Shield.position[i].angle == 4)
	{
		context.drawImage(angle4, Shield.position[i].x, Shield.position[i].y, Shield.size, Shield.size);
	}
	else
	{
		context.drawImage(square, Shield.position[i].x, Shield.position[i].y, Shield.size, Shield.size);
	}
}

function DrawShield()
{
	var shieldAngle1StateOfDecay0 = document.getElementById("shieldAngle1StateOfDecay0");
	var shieldAngle2StateOfDecay0 = document.getElementById("shieldAngle2StateOfDecay0");
	var shieldAngle3StateOfDecay0 = document.getElementById("shieldAngle3StateOfDecay0");
	var shieldAngle4StateOfDecay0 = document.getElementById("shieldAngle4StateOfDecay0");
	var shieldSquareStateOfDecay0 = document.getElementById("shieldSquareStateOfDecay0");
	
	var shieldAngle1StateOfDecay1 = document.getElementById("shieldAngle1StateOfDecay1");
	var shieldAngle2StateOfDecay1 = document.getElementById("shieldAngle2StateOfDecay1");
	var shieldAngle3StateOfDecay1 = document.getElementById("shieldAngle3StateOfDecay1");
	var shieldAngle4StateOfDecay1 = document.getElementById("shieldAngle4StateOfDecay1");
	var shieldSquareStateOfDecay1 = document.getElementById("shieldSquareStateOfDecay1");
	
	var shieldAngle1StateOfDecay2 = document.getElementById("shieldAngle1StateOfDecay2");
	var shieldAngle2StateOfDecay2 = document.getElementById("shieldAngle2StateOfDecay2");
	var shieldAngle3StateOfDecay2 = document.getElementById("shieldAngle3StateOfDecay2");
	var shieldAngle4StateOfDecay2 = document.getElementById("shieldAngle4StateOfDecay2");
	var shieldSquareStateOfDecay2 = document.getElementById("shieldSquareStateOfDecay2");
	for(var i = 0; i < Shield.position.length; i++)
	{
		switch(Shield.position[i].decay)
		{
			case 0:
				ShieldImage(i, shieldAngle1StateOfDecay0, shieldAngle2StateOfDecay0, shieldAngle3StateOfDecay0, shieldAngle4StateOfDecay0, shieldSquareStateOfDecay0);
				break;
			case 1:
				ShieldImage(i, shieldAngle1StateOfDecay1, shieldAngle2StateOfDecay1, shieldAngle3StateOfDecay1, shieldAngle4StateOfDecay1, shieldSquareStateOfDecay1);
				break;
			case 2:
				ShieldImage(i, shieldAngle1StateOfDecay2, shieldAngle2StateOfDecay2, shieldAngle3StateOfDecay2, shieldAngle4StateOfDecay2, shieldSquareStateOfDecay2);
				break;
		}
	}
}

function DrawAlien00()
{
	var alien1 = document.getElementById("alien10");
	var alien2 = document.getElementById("alien20");
	var alien3 = document.getElementById("alien30");
	var alien0 = document.getElementById("alien0");
	for(var i = 0; i < Alien.position.length; i++)
	{
		if(Alien.position[i].kind == 1)
		{
   		context.drawImage(alien1, Alien.position[i].x, Alien.position[i].y, Alien.size, Alien.size);
		}
		else if(Alien.position[i].kind == 2)
		{
			context.drawImage(alien2, Alien.position[i].x, Alien.position[i].y, Alien.size, Alien.size);
		}
		else if(Alien.position[i].kind == 3)
		{
			context.drawImage(alien3, Alien.position[i].x, Alien.position[i].y, Alien.size, Alien.size);
		}
		else if(Alien.position[i].kind == 0)
		{
			context.drawImage(alien0, Alien.position[i].x, Alien.position[i].y, Alien.size + 14, Alien.size);
		}
	}
}

function DrawAlien01()
{
	var alien1 = document.getElementById("alien11");
	var alien2 = document.getElementById("alien21");
	var alien3 = document.getElementById("alien31");
	var alien0 = document.getElementById("alien0");
   for(var i = 0; i < Alien.position.length; i++)
	{
		if(Alien.position[i].kind == 1)
		{	
    		context.drawImage(alien1, Alien.position[i].x, Alien.position[i].y, Alien.size, Alien.size);
		}
		else if(Alien.position[i].kind == 2)
		{
			context.drawImage(alien2, Alien.position[i].x, Alien.position[i].y, Alien.size, Alien.size);
		}
		else if(Alien.position[i].kind == 3)
		{
			context.drawImage(alien3, Alien.position[i].x, Alien.position[i].y, Alien.size, Alien.size);
		}
		else if(Alien.position[i].kind == 0)
		{
			context.drawImage(alien0, Alien.position[i].x, Alien.position[i].y, Alien.size + 14, Alien.size);
		}
	}
}