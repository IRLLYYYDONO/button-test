let num = 0

while (true){
    num = pins.digitalReadPin(DigitalPin.P1)
    basic.showNumber(num)
}