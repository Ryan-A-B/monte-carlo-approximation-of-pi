const lodash = require("lodash");
const Square = require("./square");
const Circle = require("./circle");

exports.handler = (size, diameter, n) => {
    const square = new Square(size);
    const circle = new Circle(square.getCenter(), diameter);
    
    return approximate(square, circle, n);
}

const approximate = (square, circle, n) => {
    const points = square.generatePoints(n);

    const count = countPointsWithinCircle(points, circle);
    const percent = count / n;

    const circleArea = square.getArea() * percent;

    return circleArea / Math.pow(circle.radius, 2);
};

const countPointsWithinCircle = (points, circle) => {
    return lodash.reduce(points, (count, point) => {
        if (circle.contains(point)) {
            count++;
        }

        return count;
    }, 0);
};