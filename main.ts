basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showString("" + (randint(1, 6)))
    }
})
