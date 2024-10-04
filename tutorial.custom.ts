namespace SpriteKind {
    export const Snowperson = SpriteKind.create()
    export const Active = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (active.bottom < 33) {
        active.vy = 250
    }
})
sprites.onOverlap(SpriteKind.Active, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    info.score()
    web.open("https://115.111.238.147:889/api/ECommReflection?playername=" + info.score() + "&score=" + info.score())
    game.over(false)
})
scene.onHitWall(SpriteKind.Active, function (sprite, location) {
    sprite.vy = 0
    if (tiles.tileAtLocationEquals(location, assets.tile`platform1`)) {
        active = rightie
        sprite.setKind(SpriteKind.Snowperson)
        seesaw.setImage(assets.image`tiltLeft`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`platform2`)) {
        active = leftie
        sprite.setKind(SpriteKind.Snowperson)
        seesaw.setImage(assets.image`lessTilt`)
    }
    active.vy = -250
    active.setKind(SpriteKind.Active)
})
let snowflake: Sprite = null
let seesaw: Sprite = null
let active: Sprite = null
let rightie: Sprite = null
let leftie: Sprite = null
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level1`)
leftie = sprites.create(assets.image`leftie`, SpriteKind.Active)
leftie.setPosition(20, 7)
rightie = sprites.create(assets.image`rightie`, SpriteKind.Snowperson)
rightie.setPosition(140, 104)
active = leftie
seesaw = sprites.create(assets.image`tiltRight`, SpriteKind.Player)
seesaw.bottom = 120
game.splash("Press the (A) button to", "jump and catch snowflakes!")
info.startCountdown(15)