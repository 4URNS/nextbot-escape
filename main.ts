namespace SpriteKind {
    export const Jumpscare = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.gameOver(true)
})
let next_bot = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 f f f f 1 1 1 
    f f 2 f 2 1 1 1 1 f f f f f 1 1 
    1 f f 2 f 1 1 1 1 f f f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 f f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f 2 f 1 1 
    1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 
    1 1 1 f 1 1 1 1 1 1 1 1 1 1 f f 
    1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 
    1 1 1 1 1 f 1 1 1 1 1 1 1 f f 1 
    1 1 1 1 1 1 f 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 f f f f f 1 1 1 1 
    `, SpriteKind.Enemy)
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`Level2`)
let mySprite = Render.getRenderSpriteInstance()
info.startCountdown(120)
next_bot.follow(mySprite, 44)
next_bot.setPosition(37, 58)
mySprite.setPosition(110, 56)
forever(function () {
    next_bot.setStayInScreen(true)
    if (next_bot.overlapsWith(mySprite)) {
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 255, 1300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        game.setDialogFrame(img`
            11111111111111111111111111111111
            11111111111111111111111111111111
            1111111111ffffffff11fff111111111
            1111111ffff11f11f111f11111111111
            111111ff111111111ff11ff1ff111111
            11ffff1111f1f1f1ffff111ffffff111
            1ffff11111fff1f1f111f1fff1fff111
            f11f11111ff1f11ff11f1ff11f111111
            1ffffffffffff111ff1f1fff11f11111
            1f1111f1f111fffffffffffffff11111
            1ff111f11111f1f11ff11f11fffffff1
            1f1f11f11111fffff1f11f1111ff1111
            1f1f11f11111ff11ffffffffffff1111
            1f11f1111f11ff1111fff1ff1f111111
            1f1ff1111fffff111f1fff11ff1fffff
            1111ff11ff1fff11f11f1f111fffffff
            11111ff1111fffff111f11fff1111111
            111111ff111111ff111f111fffff1111
            111111f1ff111111ff1f1111f1111111
            ffffffffffff111111ffff11f1111111
            1ff11fffffffff11111111fff1111111
            11fffff111fff1ffffff1fffffff1111
            1f1ffff1111ffff1111ffffff111ff11
            f1111fffff1111f1fffff1f1111f1111
            f1111f11f1ffffffff1111f11fff1111
            ff111ff1f11111111f111f111fff1111
            f1f11f11ffffff11f1fff1111ffff111
            f11f111ff1fffffff111f1ff1f111111
            1ff1ff11f111111fffff1ffff1111111
            111fffff1111111f11fff11111111111
            1111111111111111f111111111111111
            11111111111111111f11111111111111
            `)
        game.showLongText("", DialogLayout.Full)
        pause(500)
        game.gameOver(false)
    }
})
