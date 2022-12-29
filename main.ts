controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 473477373 + 57772; index++) {
        music.baDing.play()
        scene.setBackgroundColor(2)
        music.baDing.play()
        scene.setBackgroundColor(9)
    }
})
info.onScore(10, function () {
    let mySprite: Sprite = null
    pause(5000)
    controller.moveSprite(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    info.setScore(1)
})
info.setScore(0)
info.changeScoreBy(1)
