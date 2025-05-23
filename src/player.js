import { Gameboard } from "./gameboard";

class Player {
	constructor(playerStatus) {
		this.Gameboard = new Gameboard();
		this.lost = false;
		this.turn = false;
		this.name = playerStatus;
	}
	placeShip() {
		this.Gameboard.carrier.place(5, 10, 9, 10);
		this.Gameboard.battleship.place(7, 1, 10, 1);
		this.Gameboard.cruiser.place(4, 1, 4, 3);
		this.Gameboard.submarine.place(6, 3, 8, 3);
		this.Gameboard.destroyer.place(7, 6, 7, 7);
	}
	checkLost() {
		if (this.Gameboard.lost === true) {
			return true;
		}
	}
}
export { Player };
