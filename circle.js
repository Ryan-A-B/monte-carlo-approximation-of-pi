class Circle {
    constructor (center, diameter) {
        this.center = center;
        this.radius = diameter / 2;
    }

    contains (point) {
        return this.radius > this.center.getDistanceTo(point);
    }
}

module.exports = Circle;