input.onButtonPressed(Button.A, function () {
    myModules.motorR.run(100)
    datalogger.log(datalogger.createCV("Modules", 1))
    myModules.motorL.run(100)
    datalogger.log(datalogger.createCV("Modules", 1))
})
input.onButtonPressed(Button.AB, function () {
    myModules.motorR.stop()
    datalogger.log(datalogger.createCV("Modules", 1))
    myModules.motorL.stop()
    datalogger.log(datalogger.createCV("Modules", 1))
})
input.onButtonPressed(Button.B, function () {
    myModules.motorR.run(-100)
    datalogger.log(datalogger.createCV("Modules", 1))
    myModules.motorL.run(-100)
    datalogger.log(datalogger.createCV("Modules", 1))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    WiFiBit.writeBlynkPinValue("510", "A0", "14dabda3551b4dd5ab46464af582f7d2")
    datalogger.log(datalogger.createCV("WiFi:bit", 1))
    WiFiBit.writeBlynkIoTPinValue("1", "V1", "BzMEzpZ9Bud9ZUXZoJVEkbfneCavDVDx")
    datalogger.log(datalogger.createCV("WiFi:bit", 1))
    display.rotateTo(display.Direction.Normal)
    datalogger.log(datalogger.createCV("Rotatedisplay", 1))
})
datalogger.log(
datalogger.createCV("WiFi:bit", 0),
datalogger.createCV("Modules", 0),
datalogger.createCV("Servos", 0),
datalogger.createCV("Turtle", 0),
datalogger.createCV("Datalogger", 0),
datalogger.createCV("Rotatedisplay", 0),
datalogger.createCV("Smarttools", 0)
)
datalogger.log(datalogger.createCV("Datalogger", 1))
basic.clearScreen()
WiFiBit.connectToWiFiBit()
datalogger.log(datalogger.createCV("WiFi:bit", 1))
myModules.motorR.setEnabled(true)
datalogger.log(datalogger.createCV("Modules", 1))
myModules.motorL.setEnabled(true)
datalogger.log(datalogger.createCV("Modules", 1))
myModules.motorR.run(100)
datalogger.log(datalogger.createCV("Modules", 1))
myModules.motorL.run(100)
datalogger.log(datalogger.createCV("Modules", 1))
basic.pause(1000)
myModules.motorR.run(-100)
datalogger.log(datalogger.createCV("Modules", 1))
myModules.motorL.run(-100)
datalogger.log(datalogger.createCV("Modules", 1))
basic.pause(1000)
myModules.motorR.run(0)
datalogger.log(datalogger.createCV("Modules", 1))
myModules.motorL.run(0)
datalogger.log(datalogger.createCV("Modules", 1))
basic.pause(1000)
servos.P0.setAngle(0)
datalogger.log(datalogger.createCV("Servos", 1))
servos.P0.setAngle(180)
datalogger.log(datalogger.createCV("Servos", 1))
WiFiBit.executeHttpMethod(
HttpMethod.CONNECT,
"google.com",
80,
"/search?q=something"
)
datalogger.log(datalogger.createCV("WiFi:bit", 1))
WiFiBit.connectToWiFiNetwork("SSID", "key")
datalogger.log(datalogger.createCV("WiFi:bit", 1))
smarttools.whoisauthor()
datalogger.log(datalogger.createCV("Smarttools", 1))
basic.forever(function () {
    servos.P0.setAngle(0)
    datalogger.log(datalogger.createCV("Servos", 1))
    basic.pause(1750)
    servos.P0.setAngle(180)
    datalogger.log(datalogger.createCV("Servos", 1))
    basic.pause(1750)
})
