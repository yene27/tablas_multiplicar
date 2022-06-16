input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
    soundExpression.hello.play()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("T:" + numero)
})
function multiplicar (núm: number) {
    basic.showNumber(0 * numero)
}
let numero = 0
numero = 0
basic.showNumber(numero)
