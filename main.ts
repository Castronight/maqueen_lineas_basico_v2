input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    basic.showIcon(IconNames.Asleep)
})
DFRobotMaqueenPlusV2.I2CInit()
soundExpression.happy.playUntilDone()
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(0, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(0, 0xff0000)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(3, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(3, 0xff0000)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR2) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(2, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR2) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(2, 0xff0000)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL2) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(1, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL2) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(1, 0xff0000)
    }
})
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 40)
    } else {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 5)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 120)
        }
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 5)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 120)
        }
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        }
    }
})
