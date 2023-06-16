import FizzBuzz from "./sumador";

describe("FizzBuzz", () => {

  it("Deberia retornar fizz si el numero es multiplo de 3", () => {
    const fizz = new FizzBuzz();
    expect(fizz.cicloFizz(3)).toEqual("Fizz");
  });
});
