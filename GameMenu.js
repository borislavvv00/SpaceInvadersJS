var isMouseOnStart = false;
var isMouseOnCredits = false;
var isGameStart = false;
var isMouseOnBackToMenu = false;
var isMouseOnRules = false;
var isCreditsClicked = false;
var isRulesClicked = false;
var intervalMenu = setInterval(DrawGameMenu, 80);
var intervalCredits = null;
var intervalGame = null;
var intervalRules = null;

function DrawText(size, color, text, x, y)
{
	context.font = size;
	context.fillStyle = color;
	context.fillText(text, x, y);
}

function MouseOver(cursorX, cursorY)
{
	if(isCreditsClicked == false && isRulesClicked == false)
	{
		if(cursorX >= 430 && cursorX <= 535 && cursorY >= 270 && cursorY <= 310)
		{
			isMouseOnStart = true;
		}
		else
		{
			isMouseOnStart = false;	
		}
	}
//----------------------------------------------------------------------------------	
	if(isCreditsClicked == false)
	{
		if(cursorX >= 420 && cursorX <= 540 && cursorY >= 320 && cursorY <= 360)
		{
			isMouseOnRules = true;
		}
		else
		{
			isMouseOnRules = false;	
		}
	}
//------------------------------------------------------------------------------------
	if(cursorX >= 310 && cursorX <= 429 && cursorY >= 390 && cursorY <= 410)
	{
		isMouseOnBackToMenu = true;
	}
	else
	{
		isMouseOnBackToMenu = false;	
	}
//-----------------------------------------------------------------------------------
	if(isRulesClicked == false)
	{
		if(cursorX >= 400 && cursorX <= 560 && cursorY >= 370 && cursorY <= 410)
		{
			isMouseOnCredits = true;
		}
		else
		{
			isMouseOnCredits = false;	
		}
	}
}

function MenuOptionsClick()
{
	if(isGameStart == false)
	{
		if(isMouseOnStart == true)
		{
			DestroyCurrentObjects();
			clearInterval(intervalMenu);
			intervalGame = setInterval(DrawGameObjects, 80);
			isGameStart = true;
		}
		else if(isMouseOnCredits == true)
		{
			clearInterval(intervalMenu);
			intervalCredits = setInterval(Credits, 80);
			isCreditsClicked = true;
		}
		else if(isMouseOnBackToMenu == true)
		{
			clearInterval(intervalCredits);
			clearInterval(intervalRules);
			intervalMenu = setInterval(DrawGameMenu, 80);
			isCreditsClicked = false;
			isRulesClicked = false;
		}
		else if(isMouseOnRules)
		{
			clearInterval(intervalMenu);
			intervalRules = setInterval(Rules, 80);
			isRulesClicked = true;
		}
	}
}

function DrawMouseOverText(isMouseOn, size, text, x, y)
{
	if(isMouseOn == false)
	{	
		DrawText(size, "white", text, x, y);
	}
	else
	{
		DrawText(size, "yellow", text, x, y);
	}
}

function Rules()
{
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
	
	DrawText("30px Arial", "white", "To move use", 100, 100);
//---------------------------------------------------------------------------	
	let ad = document.getElementById("ad");
	context.drawImage(ad, 300, 70, 100, 50);
//---------------------------------------------------------------------------		
	DrawText("30px Arial", "white", "or", 430, 100);
//---------------------------------------------------------------------------		
	let mouseMove = document.getElementById("mouseMove");
	context.drawImage(mouseMove, 460, 30, 140, 100);
//---------------------------------------------------------------------------		
	DrawText("30px Arial", "white", "To shoot use", 100, 200);
//---------------------------------------------------------------------------		
	let space = document.getElementById("space");
	context.drawImage(space, 300, 170, 100, 30);
//---------------------------------------------------------------------------		
	DrawText("30px Arial", "white", "or", 430, 200);
//---------------------------------------------------------------------------		
	let mouse = document.getElementById("mouse");
	context.drawImage(mouse, 490, 150, 80, 100);
//---------------------------------------------------------------------------		
	context.fillStyle = "white";
	context.fillRect(620, 30, 5, 300);
	
	let alien1 = document.getElementById("alien10");
	let alien2 = document.getElementById("alien20");
	let alien3 = document.getElementById("alien30");
	let alien0 = document.getElementById("alien0");
	context.drawImage(alien1, 650, 50, 40, 40);
	context.drawImage(alien2, 650, 100, 40, 40);
	context.drawImage(alien3, 650, 150, 40, 40);
	context.drawImage(alien0, 630, 200, 80, 40);
	
	DrawText("30px Arial", "white", "=		20", 700, 80);
	DrawText("30px Arial", "white", "=		30", 700, 130);
	DrawText("30px Arial", "white", "=		40", 700, 180);
	DrawText("30px Arial", "white", "=		??", 730, 230);
//--------------------------------------------------------------------------------	
	DrawMouseOverText(isMouseOnBackToMenu, "20px Arial", "Back to Menu", 300, 400);
}

function Credits()
{
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
	
	let shoot = Math.floor(Math.random() * map.width);
	Bullet.position.push({ x : shoot, y : 0, id : "alien" });
//---------------------------------------------------------------------------		
	DrawBullet();
	BulletMovement();
//---------------------------------------------------------------------------		
	DrawText("50px Arial", "white", "Created by: Borislavvv", 300, 300);
	DrawMouseOverText(isMouseOnBackToMenu, "20px Arial", "Back to Menu", 300, 400);
}

function DrawGameMenu()
{
	context.fillStyle = "black";
	context.fillRect(0, 0, map.width, map.height);
	DrawText("100px Arial", "white", "Menu", 350, 180);
	
	DrawMouseOverText(isMouseOnStart, "50px Arial", "Start", 420, 300);
	DrawMouseOverText(isMouseOnRules, "50px Arial", "Rules", 410, 350);
	DrawMouseOverText(isMouseOnCredits, "50px Arial", "Credits", 395, 400);
}