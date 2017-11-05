const lodash = require("lodash");
const Point = require("./point");

class Square {
    constructor (size) {
        this.size = size;
    }

    getArea () {
        return Math.pow(this.size, 2);
    }

    getCenter () {
        const center = this.size / 2;

        return new Point({
            x: center,
            y: center
        })
    }

    generatePoints (length) {
        var points = [];
    
        for (var i = 0; i < length; i++) {
            points.push(new Point({
                x: lodash.random(0, this.size),
                y: lodash.random(0, this.size)
            }));
        }
    
        return points;
    };
}

module.exports = Square;