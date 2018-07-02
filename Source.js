(function(window)
	{
		canvas = document.getElementById("map");
		context = canvas.getContext("2d");
		document.addEventListener("keydown", GetKeyboardCommands);
//---------------------------------------------------------------------------------------
		var pause = document.getElementById("pause");
		var pauseClick = 0;
		pause.onclick = function()
		{
			if(pauseClick % 2 == 0)// pause on
			{
				isGamePause = true;
				pause.innerHTML = "PauseOn";
			}
			else // pause off
			{
				isGamePause = false;
				pause.innerHTML = "PauseOff";
			}
			pauseClick++;
		}
//--------------------------------------------------------------------------------------
		var restart =  document.getElementById("restart");
		restart.onclick = function()
		{
			PlayerShip.lives = 3;
			isGameSetUp = false;
			isAlienSetUp = false;
			isGamePause = false;
			isPlayerAlive = true;
			level = 1;
			score = 0;
			numberOfAlienMoves = 0;
			countStepsBeforeAlienChangeDirection = 0;
			DestroyCurrentObjects();
		}
//---------------------------------------------------------------------------------------
		var audio = document.getElementById("audio");
		var audioClick = 0;
		audio.onclick = function()
		{
			if(audioClick % 2 == 0)// audio on
			{
				isSoundOn = false;
				audio.innerHTML = "soundOff";
			}
			else // audio off
			{
				isSoundOn = true;
				audio.innerHTML = "soundOn";
			}
			audioClick++;
		}
//---------------------------------------------------------------------------------------
		setInterval(DrawGameObjects, 80);
	}
)(window);
