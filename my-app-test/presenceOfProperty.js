'use strict';

const rectangles = [
  {
    id: 'Rectangle - 01',
    width: 129.2,
    height: 80.9,
  },
  {
    id: 'Rectangle - 02',
    width: 342,
    height: 120,
    area() {
      return this.width * this.height;
    },
  },
];

// Your Code Goes Here
const calcArea = function () {
    return this.width * this.height;
};

try {
    //rectangles.forEach((rect) => console.log(`${rect.id} : ${rect.area()}`));
    rectangles.forEach( (rect) =>
        console.log(
            `${rect.id} : ${rect.hasOwnProperty('area') ? rect.area() : calcArea.call(rect)}`
        )
    );
} catch (error) {
  console.log(error.message);
}
