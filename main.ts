basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("" + (randint(1, 6)))
    }
})
