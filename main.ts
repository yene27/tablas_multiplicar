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
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 5; index++) {
        basic.showString("x" + contador + "=" + contador * numero)
        basic.pause(500)
        contador += 1
    }
    basic.clearScreen()
}
let contador = 0
let numero = 0
numero = 0
