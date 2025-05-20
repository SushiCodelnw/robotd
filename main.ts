function Arm2Down () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    0
    )
}
function HandUp () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    1
    )
}
function Arm1Forback () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    Baseleft()
})
function Arm2Up () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    1
    )
}
function Baseright () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    0
    )
}
function Baseleft () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    1
    )
}
function Arm1Forward () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
}
input.onButtonPressed(Button.B, function () {
    Stop()
})
function HandDown () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    0
    )
}
radio.onReceivedValue(function (name, value) {
    if (name == "Arm1Forward") {
        Arm1Forward()
    } else if (name == "Arm1Forback") {
        Arm1Forback()
    } else if (name == "Baseleft") {
        Baseleft()
    } else if (name == "Baseright") {
        Baseright()
    } else if (name == "Arm2Up") {
        Arm2Up()
    } else if (name == "Arm2Down") {
        Arm2Down()
    } else if (name == "HandUp") {
        HandUp()
    } else if (name == "HandDown") {
        HandDown()
    } else if (name == "Stop") {
        Stop()
    }
})
function Stop () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    0,
    DigitalPin.P15,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    0,
    DigitalPin.P13,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    0,
    DigitalPin.P12,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P8,
    0,
    DigitalPin.P1,
    0
    )
}
radio.setGroup(4)
basic.forever(function () {
	
})
