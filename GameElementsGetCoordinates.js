function AliensGetCoordinates()
{
	var distanceBetweenAliensHorizontal = 20;
	var distanceBetweenAliensVertical = 80;
	for(var i = 0; i < Alien.number; i++)
	{
//----------------------------------------------------First line of aliens from top to bottom-----------------------------------------------------------------------
		if(i == 0)//first alien of the line 
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal, y : distanceBetweenAliensVertical, kind : 1 });
		}
		else if(i <= 20)//the rest aliens of the first line
		{	
			Alien.position.push({ x : distanceBetweenAliensHorizontal + Alien.position[i - 1].x + Alien.size , y : distanceBetweenAliensVertical, kind : 1 });
		}
//-------------------------------------------------------Second line------------------------------------------------------------------------------------------------
		else if(i == 21)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal, y : distanceBetweenAliensVertical + Alien.size * 2, kind : 2 });
		}
		else if(i >= 22 && i <= 41)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal + Alien.position[i - 1].x + Alien.size , y : distanceBetweenAliensVertical  + Alien.size * 2, kind : 2 });
		}
//------------------------------------------------------Third line---------------------------------------------------------------------------------------------------
		else if(i == 42)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal, y : distanceBetweenAliensVertical + Alien.size * 4, kind : 2 });
		}
		else if(i >= 43 && i <= 62)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal + Alien.position[i - 1].x + Alien.size , y : distanceBetweenAliensVertical  + Alien.size * 4, kind : 2 });
		}
//-------------------------------------------------------Fourth line--------------------------------------------------------------------------------------------------
		else if(i == 63)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal, y : distanceBetweenAliensVertical + Alien.size * 6, kind : 3 });
		}
		else if(i >= 64 && i <= 83)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal + Alien.position[i - 1].x + Alien.size , y : distanceBetweenAliensVertical  + Alien.size * 6, kind : 3 });
		}
//-------------------------------------------------------Fifth line--------------------------------------------------------------------------------------------------
		else if(i == 84)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal, y : distanceBetweenAliensVertical + Alien.size * 8, kind : 3 });
		}
		else if(i >= 85 && i <= 104)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal + Alien.position[i - 1].x + Alien.size , y : distanceBetweenAliensVertical  + Alien.size * 8, kind : 3 });
		}
//------------------------------------------------------Special alien--------------------------------------------------------------------------------------------------
		else if(i == 105)
		{
			Alien.position.push({ x : distanceBetweenAliensHorizontal, y : distanceBetweenAliensVertical / 2, kind : 0, direction : "rigth" });
		}
	}
}

function ShieldPiecesGetCoordinates()
{
	var distanceBetweenShieldHorizontal = 40;
	var firstPiece = 0;
	for(var n = 0; n < Shield.number; n++)
	{
		for(var i = firstPiece; i < firstPiece + 14; i++)
		{
//----------------------------------------------------First line of shield's pieces from top to bottom---------------------------
		if(i == firstPiece)//first piece of the line
		{
   	 		Shield.position.push({ x : distanceBetweenShieldHorizontal, y : 450, angle : 1, decay : 0 });
		}
   	 	else if(i >= firstPiece + 1 && i < firstPiece + 3)
   	 	{
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size, y : Shield.position[i - 1].y, decay : 0 });
   	 	}
   	 	else if(i == firstPiece + 3)//last piece of the line
   	 	{
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size, y : Shield.position[i - 1].y, angle : 2, decay : 0 });
   	 	}
//-------------------------------------------------Second line-------------------------------------------------------------------
   	 	else if(i == firstPiece + 4)
   	 	{
   	 		Shield.position.push({ x : Shield.position[firstPiece].x, y : 450 + Shield.size, decay : 0 });
   	 	}
   	 	else if(i >= firstPiece +  5 && i <= firstPiece +  7)
   	 	{
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size, y : Shield.position[i - 1].y, decay : 0 });
   	 	}
//--------------------------------------------------Third line-------------------------------------------------------------------
   	 	else if(i == firstPiece +  8)
   	 	{
   	 		Shield.position.push({ x : Shield.position[firstPiece].x, y : 450 + Shield.size * 2, decay : 0 });
   	 	}
   	 	else if(i == firstPiece +  9)
   	 	{	
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size, y : Shield.position[i - 1].y, angle : 3, decay : 0 });
   	 	}
   	 	else if(i == firstPiece + 10)
   	 	{
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size, y : Shield.position[i - 1].y, angle : 4, decay : 0});
   	 	}
   	 	else if(i == firstPiece + 11)
   	 	{
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size, y : Shield.position[i - 1].y, decay : 0 });
   	 	}
//-------------------------------------------------Fourth line-------------------------------------------------------------------
   	 	else if(i == firstPiece +  12)
   	 	{
   	 		Shield.position.push({ x : Shield.position[firstPiece].x, y : 450 + Shield.size * 3, decay : 0 });
   	 	}
   	 	else if(i >= firstPiece +  13)
   	 	{
   	 		Shield.position.push({ x : Shield.position[i - 1].x + Shield.size * 3, y : Shield.position[i - 1].y, decay : 0 });
   	 	}
   	}
   	distanceBetweenShieldHorizontal += 140;
   	firstPiece += 14;//every shield's first piece is 14 positions after previouse shield first piece
   }
}
