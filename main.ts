input.onButtonPressed(Button.A, function () {
    music.playMelody("G F G A - F E D ", 190)
    basic.showIcon(IconNames.Chessboard)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("A F E F D G E F ", 190)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G B A G C5 B A B ", 180)
    basic.showIcon(IconNames.LeftTriangle)
})
basic.forever(function () {
	
})
