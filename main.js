var ROOM_IMAGE_MAP = [
	'Lobbies/placeholder.png',
	'Lobbies/emptyfloor.png',
	'Lobbies/carpeted_hallway-modern.png',
	'Rooms/Default/office-0-day-0.png',
	'Rooms/Default/apartment-studio-day-0.png',
	'Rooms/Default/apartment-studio-1-dayoccupied-0.png',
	'Rooms/Default/apartment-studio-2-dayoccupied-0.png',
	'Rooms/Default/apartment-studio-3-dayoccupied-0.png',
	'Rooms/Default/condo-empty1-day-0.png',
	'Rooms/Default/condo-empty2-day-0.png',
	'Rooms/Default/condo-empty3-day-0.png',
	'Lobbies/MM_lobbyandMezz-3star.png',
	'Rooms/Default/MM_shop-closed.png',
	'Rooms/Default/MM_Restaurant-French-night.png',
	'Rooms/Default/MM_Restaurant-Hibachi-night.png',
	'Rooms/Default/MM_Restaurant-Indian-night.png',
	'Rooms/Default/MM_Restaurant-pub-night.png',
	'Rooms/Default/MM_Restaurant-steak-night.png',
	'Rooms/HighriseDev/security_u.png',
	'Rooms/Default/Restrooms-empty-day-0.png',
	'Rooms/ArtDeco/partyhall-0-night-0.png',
	'Rooms/Default/largeOffice-0-day-0.png',
	'Rooms/HighriseDev/MedicalClinic_u.png',
	'Rooms/Default/MM_FastFood-burgers-night.png',
	'Rooms/Default/MM_FastFood-chinese-night.png',
	'Rooms/Default/MM_FastFood-coffee_shop-night.png',
	'Rooms/Default/MM_FastFood-icecream-night.png',
	'Rooms/Default/MM_FastFood-pizza-night.png',
	'Rooms/Default/MM_FastFood-sushi-night.png',
	'Rooms/Default/MM_FastFood-tacos-night.png',
	'Rooms/Default/MM_FastFood-yogurt-night.png',
	'Lobbies/MM_SkyLobby-3star.png',
	'Rooms/Default/MM_PrivateHousekeeping-day.png',
];

window.onload = function() {
	var renderedCtx = document.getElementById("renderedCanvas").getContext('2d');
	var backgroundCtx = document.getElementById("backgroundCanvas").getContext('2d');
	var towerCtx = document.getElementById("towerCanvas").getContext('2d');
	var transportCtx = document.getElementById("transportCanvas").getContext('2d');

	// gradient 1, will eventually be removed
	var bggradient = renderedCtx.createLinearGradient(30, 30, 90, 90);
	bggradient.addColorStop(0, "#FF0000");
	bggradient.addColorStop(1, "#00FF00");
	renderedCtx.fillStyle = bggradient;
	renderedCtx.fillRect(0, 0, 100, 100);

	//gradient 2, background
	var skyGradient = backgroundCtx.createLinearGradient(0, 0, 0, 8200);
	skyGradient.addColorStop(0, '#2040D0');
	skyGradient.addColorStop(0.1, '#60A0D0');
	skyGradient.addColorStop(0.2, '#62A1F0');
	skyGradient.addColorStop(0.3, '#63A2F5');
	skyGradient.addColorStop(0.5, '#64A3FF');
	skyGradient.addColorStop(0.7, '#70B0FF');
	skyGradient.addColorStop(0.904, '#A4CCF0');
	skyGradient.addColorStop(0.904, '#A06018');
	skyGradient.addColorStop(1, '#200D00');
	backgroundCtx.fillStyle = skyGradient;
	backgroundCtx.fillRect(0, 0, 7000, 8200);

	var skyLine = new Image();

	skyLine.onload = function () {
		backgroundCtx.drawImage(skyLine, 0, 7125);
		backgroundCtx.drawImage(skyLine, 1024, 7125);
		backgroundCtx.drawImage(skyLine, 2048, 7125);
		backgroundCtx.drawImage(skyLine, 3072, 7125);
		backgroundCtx.drawImage(skyLine, 4096, 7125);
		backgroundCtx.drawImage(skyLine, 4096, 7125);
		backgroundCtx.drawImage(skyLine, 5120, 7125);
		backgroundCtx.drawImage(skyLine, 6144, 7125);
	};
	skyLine.src = 'UI/OT_skyline.png';

	//gradient 3, to be removed eventually
	var mygradient3 = towerCtx.createLinearGradient(60, 60, 120, 120);
	mygradient3.addColorStop(0, "#0000FF");
	mygradient3.addColorStop(.5, "#00FFDD");
	towerCtx.fillStyle = mygradient3;
	towerCtx.fillRect(60, 60, 120, 120);
	renderIfLoaded.ctx = towerCtx;

	var roomImages = renderIfLoaded.roomImages;
	for (var i = 0; i < ROOM_IMAGE_MAP.length; i++) {
		roomImages[i] = new Image();
		roomImages[i].src = ROOM_IMAGE_MAP[i];
		roomImages[i].onload = renderIfLoaded;
	}

	// gradient 4, to be removed eventually
	var mygradient4 = transportCtx.createLinearGradient(30, 30, 90, 90);
	mygradient4.addColorStop(0, "#DD33CC");
	mygradient4.addColorStop(1, "#EEEEEE");
	transportCtx.fillStyle = mygradient4;
	transportCtx.fillRect(0, 0, 100, 100);
}

renderIfLoaded.roomImages = [];
renderIfLoaded.ctx = null;
renderIfLoaded.numLoaded = 0;
function renderIfLoaded() {
	renderIfLoaded.numLoaded++;
	if (renderIfLoaded.numLoaded < ROOM_IMAGE_MAP.length - 1) {
		return;
	}
	var posX = 1000;
	var posY = 108;
	var ctx = renderIfLoaded.ctx;
	for (var i = 0; i < mapArray.length; i++) {
		for (var j = 0; j < mapArray[i].length; j++) {
			var roomIndex = mapArray[i][j];
			var img = renderIfLoaded.roomImages[roomIndex];
			ctx.drawImage(img, posX, posY, img.naturalWidth, img.naturalHeight);
			posX += 16;
		}
		posX = 1000
		posY += 72;
	}
}
