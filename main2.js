var ROOM_IMAGE_MAP = [
	'Lobbies/placeholder.png',
	'Lobbies/emptyfloor.png',
	'Lobbies/carpeted_hallway-modern.png',
	'Rooms/Default/office-0-day-0.png',
	'Rooms/Default/apartment-studio-day-0.png',
	'Rooms/Default/apartment-studio-night-0.png',
	'Rooms/Default/apartment-luxestudio-day-0.png',
	'Rooms/Default/apartment-luxestudio-night-0.png',
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
	'Rooms/HighriseDev/Security_u.png',
	'Rooms/Default/Restrooms-empty-day-0.png',
	'Rooms/ArtDeco/partyhall-0-night-0.png',
	'Rooms/Default/largeOffice-0-day-0.png',
	'Rooms/HighriseDev/MedicalClinic_u.png',
	'Rooms/Default/MM_FastFood-burgers-night.png',
	'Rooms/Default/MM_FastFood-Chinese-night.png',
	'Rooms/Default/MM_FastFood-coffee_shop-night.png',
	'Rooms/Default/MM_FastFood-icecream-night.png',
	'Rooms/Default/MM_FastFood-pizza-night.png',
	'Rooms/Default/MM_FastFood-sushi-night.png',
	'Rooms/Default/MM_FastFood-tacos-night.png',
	'Rooms/Default/MM_FastFood-yogurt-night.png',
	'Lobbies/MM_SkyLobby-3star.png',
	'Rooms/Default/MM_PrivateHousekeeping-day.png',
	'Rooms/Default/officeBreakroom-0-day-0.png',
	'Rooms/Default/officeReception-0-day-0.png',
	'Rooms/Default/smallOffice-0-day-0.png',
	'Rooms/Default/MM_SodaMachines.png',
	'Rooms/Default/MM_VendingMachine.png',
	'Rooms/Default/Cigarette-Vending-Machine.png',
	'Rooms/Modern/Anti-Tobacco-Vending-Machine.png',
	'Rooms/Default/MM_Hotel-single-1-day-0.png',
	'Rooms/Default/MM_Hotel-single-2-day-0.png',
	'Rooms/Default/MM_Hotel-double-1-day-0.png',
	'Rooms/Default/MM_Hotel-double-2-day-0.png',
	'Rooms/Default/MM_Hotel-double-3-day-0.png',
	'Rooms/Default/MM_Hotel-Suite-1-day-0.png',
	'Rooms/Default/MM_Hotel-Suite-2-day-0.png',
	'Rooms/Default/MM_Hotel-Suite-3-day-0.png',
	'Rooms/Default/MM_familySuite-0-day-0.png',
	'Rooms/Default/MM_familySuite-1-day-0.png',
	'Rooms/Default/largeSuite-1-day-0.png',
	'Rooms/Default/MM_Hotel-LoveSuite-day-0.png',
	'Rooms/Default/MM_housekeeping-day-0.png',
	'Rooms/ArtDeco/CheckInDesk-1-day-0.png',
	'Rooms/HighriseDev/apartment_empty_1.png',
	'Rooms/Default/apartment_s-green-dayoccupied-0.png',
	'Rooms/Default/apartment_s-blue-dayoccupied-0.png',
	'Rooms/Default/apartment_s-red-dayoccupied-0.png',
	'Rooms/Default/HrD_condo-0-day-0.png',
	'Rooms/HighriseDev/Hotel_S_d_0.png',
	'Rooms/HighriseDev/Hotel_D_u.png',
	'Rooms/HighriseDev/Hotel_K_u.png',
	'Rooms/HighriseDev/Hotel_LS_u.png',
];

var skyLine = new Image();
var roomImages = [];
var drawOffset = {x: 0, y: 0};
function drawBackground(ctx, rect) {
	var skyGradient = ctx.createLinearGradient(0, 0, 0, 8200);
	skyGradient.addColorStop(0, '#2040D0');
	skyGradient.addColorStop(0.1, '#60A0D0');
	skyGradient.addColorStop(0.2, '#62A1F0');
	skyGradient.addColorStop(0.3, '#63A2F5');
	skyGradient.addColorStop(0.5, '#64A3FF');
	skyGradient.addColorStop(0.7, '#70B0FF');
	skyGradient.addColorStop(0.904, '#A4CCF0');
	skyGradient.addColorStop(0.904, '#A06018');
	skyGradient.addColorStop(1, '#200D00');
	ctx.fillStyle = skyGradient;
	ctx.fillRect(0, 0, 7168, 8200);

	ctx.drawImage(skyLine, 0, 7125);
	ctx.drawImage(skyLine, 1024, 7125);
	ctx.drawImage(skyLine, 2048, 7125);
	ctx.drawImage(skyLine, 3072, 7125);
	ctx.drawImage(skyLine, 4096, 7125);
	ctx.drawImage(skyLine, 4096, 7125);
	ctx.drawImage(skyLine, 5120, 7125);
	ctx.drawImage(skyLine, 6144, 7125);
}
// Depends on global mapArray, defined in map.js
function drawRooms(ctx, rect) {
	var FLOOR_HEIGHT = 72;
	var SECTION_WIDTH = 16;
	var MAX_ROOM_HEIGHT = FLOOR_HEIGHT * 5;
	for (var floor = 0; floor < mapArray.length; floor++) {
		var y = FLOOR_HEIGHT * floor;

		// Bail out early to avoid drawing the whole tower every time
		if (y > rect.h + rect.y) continue;
		if (y + MAX_ROOM_HEIGHT < rect.y) continue;

		var floorSections = mapArray[floor];
		for (var section = 0; section < floorSections.length; section++) {
			var x = SECTION_WIDTH * section;
			if (x > rect.w + rect.x) continue;

			var roomIndex = mapArray[floor][section];
			var img = roomImages[roomIndex];
			var w = img.naturalWidth;
			var h = img.naturalHeight;
			if (x + w < rect.x) continue;
			if (y + h < rect.y) continue;

			ctx.drawImage(img, x, y, w, h);
		}
	}
}
function draw(ctx, rect) {
	drawBackground(ctx, rect);
	drawRooms(ctx, rect);
}

var ctx;
function drawFrame() {
	var x = -drawOffset.x;
	var y = -drawOffset.y;
	var w = ctx.canvas.width;
	var h = ctx.canvas.height;
	ctx.save();
	ctx.fillStyle = 'black';
	ctx.translate(-x, -y);
	ctx.fillRect(x, y, w, h);
	draw(ctx, {x: x, y: y, w: w, h: h});
	ctx.restore();
	console.log("drawing...");
	requestAnimationFrame(drawFrame);
}

window.onload = function() {
	var canvas = document.getElementById("gameCanvas");

	var dragStart = {x: 0, y: 0, started: false};
	window.onmousedown = function (e) {
		dragStart.x = e.x;
		dragStart.y = e.y;
		window.onmousemove = drag;
		return false;
	};
	window.onmouseup = function (e) {
		window.onmousemove = null;
		return false;
	};
	function drag(e) {
		drawOffset.x += e.x - dragStart.x;
		drawOffset.y += e.y - dragStart.y;
		dragStart.x = e.x;
		dragStart.y = e.y;
		return false;
	};
	window.onresize = fillWindow;
	function fillWindow() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	fillWindow();

	skyLine.src = 'UI/OT_skyline.png';
	waitFor(skyLine);

	for (var i = 0; i < ROOM_IMAGE_MAP.length; i++) {
		var roomImage = new Image();
		roomImage.src = ROOM_IMAGE_MAP[i];
		waitFor(roomImage);
		roomImages.push(roomImage);
	}

	ctx = canvas.getContext('2d');
	waitForAll();
}

waitFor.queue = [];
waitFor.loaded = 0;
function waitFor(img) {
	waitFor.queue.push(img);
}
function waitForAll() {
	for (var i = 0; i < waitFor.queue.length; i++) {
		waitFor.queue[i].onload = function () {
			waitFor.loaded++;
			if (waitFor.loaded == waitFor.queue.length - 1) {
				requestAnimationFrame(drawFrame);
			}
		}
	}
}
