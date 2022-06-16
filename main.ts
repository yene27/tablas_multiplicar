input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("T:" + numero)
    basic.pause(1000)
    multiplicar(numero)
})
function multiplicar (núm: number) {
    contador = 1
    for (let index = 0; index < 10; index++) {
        basic.showString("" + contador + "=" + contador * numero)
        basic.pause(500)
        contador += 1
    }
    basic.clearScreen()
}
let contador = 0
let numero = 0
numero = 0
