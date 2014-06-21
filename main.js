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




	var office = new Image();
	var largeOffice = new Image();
	var studioApartment = new Image();
	var grandLobby = new Image();
	var apartmentGrn = new Image();
	var apartmentBlu = new Image();
	var apartmentRed = new Image();
	var studio = new Image();
	var luxStudio = new Image();
	var emptyFloor = new Image();
	var carpetHall = new Image();
	var condo1 = new Image();
	var condo2 = new Image();
	var condo3 = new Image();
	var studio1 = new Image();
	var studio2 = new Image();
	var studio3 = new Image();
	var studio4 = new Image();
	var placeHolder = new Image();
	var shop = new Image();
	var restaurant1 = new Image();
	var restaurant2 = new Image();
	var restaurant3 = new Image();
	var restaurant4 = new Image();
	var restaurant5 = new Image();
	var security = new Image();
	var restroom = new Image();
	var partyHall = new Image();
	var clinic = new Image();
	var fastFood1 = new Image();
	var fastFood2 = new Image();
	var fastFood3 = new Image();
	var fastFood4 = new Image();
	var fastFood5 = new Image();
	var fastFood6 = new Image();
	var fastFood7 = new Image();
	var fastFood8 = new Image();
	var skyLobby = new Image();
	var privateHousekeeping = new Image();

	office.src = 'Rooms/Default/office-0-day-0.png';
	largeOffice.src = 'Rooms/Default/largeOffice-0-day-0.png';
	condo1.src = 'Rooms/Default/condo-empty1-day-0.png';
	condo2.src = 'Rooms/Default/condo-empty2-day-0.png';
	condo3.src = 'Rooms/Default/condo-empty3-day-0.png';
	apartmentGrn.src = 'Rooms/Default/apartment_s-green-dayoccupied-0.png';
	apartmentBlu.src = 'Rooms/Default/apartment_s-blue-dayoccupied-0.png';
	apartmentRed.src = 'Rooms/Default/apartment_s-red-dayoccupied-0.png';
	studio.src = 'Rooms/Default/apartment-studio-day-0.png';
	studio1.src = 'Rooms/Default/apartment-studio-1-dayoccupied-0.png';
	studio2.src = 'Rooms/Default/apartment-studio-2-dayoccupied-0.png';
	studio3.src = 'Rooms/Default/apartment-studio-3-dayoccupied-0.png';
	luxStudio.src = 'Rooms/Default/apartment-luxestudio-day-0.png';
	emptyFloor.src = 'Lobbies/emptyfloor.png';
	carpetHall.src = 'Lobbies/carpeted_hallway-modern.png';
	grandLobby.src = 'Lobbies/MM_lobbyandMezz-3star.png';
	placeHolder.src = 'Lobbies/placeholder.png';
	shop.src = 'Rooms/Default/MM_shop-closed.png';
	restaurant1.src = 'Rooms/Default/MM_Restaurant-French-night.png'
	restaurant2.src = 'Rooms/Default/MM_Restaurant-Hibachi-night.png'
	restaurant3.src = 'Rooms/Default/MM_Restaurant-Indian-night.png'
	restaurant4.src = 'Rooms/Default/MM_Restaurant-pub-night.png'
	restaurant5.src = 'Rooms/Default/MM_Restaurant-steak-night.png'
	security.src = 'Rooms/HighriseDev/security_u.png'
	restroom.src = 'Rooms/Default/Restrooms-empty-day-0.png'
	partyHall.src = 'Rooms/ArtDeco/partyhall-0-night-0.png'
	clinic.src = 'Rooms/HighriseDev/MedicalClinic_u.png'
	fastFood1.src = 'Rooms/Default/MM_FastFood-burgers-night.png'
	fastFood2.src = 'Rooms/Default/MM_FastFood-chinese-night.png'
	fastFood3.src = 'Rooms/Default/MM_FastFood-coffee_shop-night.png'
	fastFood4.src = 'Rooms/Default/MM_FastFood-icecream-night.png'
	fastFood5.src = 'Rooms/Default/MM_FastFood-pizza-night.png'
	fastFood6.src = 'Rooms/Default/MM_FastFood-sushi-night.png'
	fastFood7.src = 'Rooms/Default/MM_FastFood-tacos-night.png'
	fastFood8.src = 'Rooms/Default/MM_FastFood-yogurt-night.png'
	skyLobby.src = 'Lobbies/MM_SkyLobby-3star.png'
	privateHousekeeping.src = 'Rooms/Default/MM_PrivateHousekeeping-day.png'

	var posX=1000;
	var posY=108;
	for (var i = 0; i < mapArray.length; i++) {
		for (var j = 0; j < mapArray[i].length; j++) {
			if (mapArray[i][j] == 0) {
				towerCtx.drawImage(placeHolder, posX, posY, 16, 72);
			}
			if (mapArray[i][j] == 1) {
				towerCtx.drawImage(emptyFloor, posX, posY, 16, 72);
			}
			if (mapArray[i][j] == 2) {
				towerCtx.drawImage(carpetHall, posX, posY, 16, 72);
			}
			if (mapArray[i][j] == 3) {
				towerCtx.drawImage(office, posX, posY, 144, 72);
			}
			if (mapArray[i][j] == 4) {
				towerCtx.drawImage(studio, posX, posY, 64, 72);
			}
			if (mapArray[i][j] == 5) {
				towerCtx.drawImage(studio1, posX, posY, 64, 72);
			}
			if (mapArray[i][j] == 6) {
				towerCtx.drawImage(studio2, posX, posY, 64, 72);
			}
			if (mapArray[i][j] == 7) {
				towerCtx.drawImage(studio3, posX, posY, 64, 72);
			}
			if (mapArray[i][j] == 8) {
				towerCtx.drawImage(condo1, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 9) {
				towerCtx.drawImage(condo2, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 10) {
				towerCtx.drawImage(condo3, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 11) {
				towerCtx.drawImage(grandLobby, posX, posY, 624,360);
			}
			if (mapArray[i][j] == 12) {
				towerCtx.drawImage(shop, posX, posY, 192, 72);
			}
			if (mapArray[i][j] == 13) {
				towerCtx.drawImage(restaurant1, posX, posY, 384, 72);
			}
			if (mapArray[i][j] == 14) {
				towerCtx.drawImage(restaurant2, posX, posY, 384, 72);
			}
			if (mapArray[i][j] == 15) {
				towerCtx.drawImage(restaurant3, posX, posY, 384, 72);
			}
			if (mapArray[i][j] == 16) {
				towerCtx.drawImage(restaurant4, posX, posY, 384, 72);
			}
			if (mapArray[i][j] == 17) {
				towerCtx.drawImage(restaurant5, posX, posY, 384, 72);
			}
			if (mapArray[i][j] == 18) {
				towerCtx.drawImage(security, posX, posY, 224, 72);
			}
			if (mapArray[i][j] == 19) {
				towerCtx.drawImage(restroom, posX, posY, 144, 72);
			}
			if (mapArray[i][j] == 20) {
				towerCtx.drawImage(partyHall, posX, posY, 384,144);
			}
			if (mapArray[i][j] == 21) {
				towerCtx.drawImage(largeOffice, posX, posY, 160, 72);
			}
			if (mapArray[i][j] == 22) {
				towerCtx.drawImage(clinic, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 23) {
				towerCtx.drawImage(fastFood1, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 24) {
				towerCtx.drawImage(fastFood2, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 25) {
				towerCtx.drawImage(fastFood3, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 26) {
				towerCtx.drawImage(fastFood4, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 27) {
				towerCtx.drawImage(fastFood5, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 28) {
				towerCtx.drawImage(fastFood6, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 29) {
				towerCtx.drawImage(fastFood7, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 30) {
				towerCtx.drawImage(fastFood8, posX, posY, 256, 72);
			}
			if (mapArray[i][j] == 31) {
				towerCtx.drawImage(skyLobby, posX, posY, 624, 72);
			}
			if (mapArray[i][j] == 32) {
				towerCtx.drawImage(privateHousekeeping, posX, posY, 240, 72);
			}
			posX += 16;
		}
		posX = 1000
		posY += 72;
	}

	//gradient 4, to be removed eventually
	var mygradient4 = transportCtx.createLinearGradient(30, 30, 90, 90);
	mygradient4.addColorStop(0, "#DD33CC");
	mygradient4.addColorStop(1, "#EEEEEE");
	transportCtx.fillStyle = mygradient4;
	transportCtx.fillRect(0, 0, 100, 100);
}
