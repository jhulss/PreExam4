import FizzBuzz from "./sumador";

describe("FizzBuzz", () => {

  it("Deberia retornar fizz si el numero es multiplo de 3", () => {
    const fizz = new FizzBuzz();
    expect(fizz.cicloFizz(3)).toEqual("Fizz");
  });

  it("Deberia retornar buzz si el numero es multiplo de 5", () => {
    const fizz = new FizzBuzz();
    expect(fizz.cicloFizz(5)).toEqual("Buzz");
  });

  it("Deberia retornar fizzbuzz si el numero es multiplo de 3 y 5", () => {
    const fizz = new FizzBuzz();
    expect(fizz.cicloFizz(15)).toEqual("FizzBuzz");
  });

  it("Deberia retornar el numero ingresado si no es multiplo de 3 o 5", () => {
    const fizz = new FizzBuzz();
    expect(fizz.cicloFizz(4)).toEqual(4);
  });

 

});
