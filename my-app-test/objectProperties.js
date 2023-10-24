'use strict';

const Car = function () {
    let brand = '';
    let model = '';
    let transmission = '';
    let color = '';
    let changeLog = [];
    Object.defineProperties(this, {
      id: {
        enumerable: true,
        value: `CAR-012X-DB1`,
      },
      brand: {
        enumerable: true,
        set(val) {
          changeLog.push(`Brand changed to ${val}`);
          brand = val;
        },
        get() {
          return brand;
        },
      },
      model: {
        enumerable: true,
        set(val) {
          changeLog.push(`Model changed to ${val}`);
          model = val;
        },
        get() {
          return model;
        },
      },
      transmission: {
        enumerable: true,
        set(val) {
          changeLog.push(`Transmission changed to ${val}`);
          transmission = val;
        },
        get() {
          return transmission;
        },
      },
      color: {
        enumerable: true,
        set(val) {
          changeLog.push(`Color changed to ${val}`);
          color = val;
        },
        get() {
          return color;
        },
      },
      changeLog: {
        enumerable: false,
        get() {
          return changeLog;
        },
      },
    });
  };

const Civic = new Car();

Civic.brand = 'Honda';
Civic.model = 'Civic';
Civic.transmission = 'AT';
Civic.color = 'Galaxy Grey';

Civic.model = 'Civic 1.8S';
Civic.color = 'Pearl White';

for (let prop in Civic) {
  console.log(`${prop}: ${Civic[prop]}`);
}

console.log(Civic.changeLog);
