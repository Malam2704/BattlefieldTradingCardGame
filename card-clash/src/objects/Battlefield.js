// src/objects/Battlefield.js
export default class Battlefield {
    constructor(scene) {
        this.scene = scene;
        this.grid = [];
        this.init();
    }

    init() {
        // Create a 2x10 grid
        for (let row = 0; row < 2; row++) {
            this.grid[row] = [];
            for (let col = 0; col < 10; col++) {
                this.grid[row][col] = {
                    x: 100 + col * 80,
                    y: 300 + row * 100,
                    occupied: false,
                    unit: null
                };

                // Visualize the grid
                const cell = this.scene.add.rectangle(
                    this.grid[row][col].x,
                    this.grid[row][col].y,
                    75,
                    95,
                    0xffffff,
                    0.2
                );
                cell.setStrokeStyle(1, 0xffffff, 0.5);
            }
        }
    }

    placeUnit(unit, row, col) {
        if (row >= 0 && row < 2 && col >= 0 && col < 10) {
            if (!this.grid[row][col].occupied) {
                this.grid[row][col].occupied = true;
                this.grid[row][col].unit = unit;
                unit.setPosition(this.grid[row][col].x, this.grid[row][col].y);
                return true;
            }
        }
        return false;
    }

    // More methods for grid management...
}