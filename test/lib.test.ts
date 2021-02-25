import * as lib from '../src/index'

test('multiplicar 3 por 4', () => {
    expect( lib.multiplicar(3,4) ).toBe(12)
})

test('dividir 9 por 3', () => {
    expect( lib.dividir(9,3) ).toBe(3)
})

test('formatear 1500 - formato moneda', () => {
    expect( lib.numberFormat(1500) ).toBe("$1.500")
})

test('formatear 2000 - formato numero separador miles', () => {
    expect( lib.numberFormat(2000, '0,0') ).toBe("2.000")
})

test('formatear 20000 - sin separador de miles', () => {
    expect( lib.numberFormat(20000, '0') ).toBe("20000")
})

