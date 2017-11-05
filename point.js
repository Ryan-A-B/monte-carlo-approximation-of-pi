class Point {
    constructor ({x, y}) {
        this.x = x;
        this.y = y;
    }

    getDistanceTo (point) {
        const dx = this.x - point.x;
        const dy = this.y - point.y;

        return Math.sqrt(
            Math.pow(dx, 2) + Math.pow(dy, 2)
        );
    }
}

module.exports = Point;