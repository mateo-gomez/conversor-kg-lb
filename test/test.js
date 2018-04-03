const expect = require("chai").expect
const conversor = require("..").default

describe('#conversor', function () {

  it('Para convertir de kilogramos a libras, se ingresa el numero y la palabra "kg" o "kilo" respetando las comillas', function () {
    const resultado = conversor(14, "kg")
    expect(resultado).to.equal("30.86 lb")
    console.log(resultado)
  })

  it('Para convertir libras a kilogramos, se ingresa el numero y la palabra "lb" o "libra" respetando las comillas', function () {
      const resultado = conversor(28, "lb")
      expect(resultado).to.equal("12.70 kg")
  })

})
