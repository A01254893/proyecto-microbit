input.onButtonPressed(Button.A, function () {
    basic.showNumber(Num)
    Num += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto = "chau"
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Num)
    Num += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto)
})
let Num = 0
let Texto = ""
Texto = "Hola"
Num = 15
