radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("S.O.S")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("אני בא אליך")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("? איפה-אתה ")
})
radio.setGroup(1)
