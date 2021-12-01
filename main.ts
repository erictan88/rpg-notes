namespace SpriteKind {
    export const kind_cursor = SpriteKind.create()
    export const items = SpriteKind.create()
    export const items_key_blue = SpriteKind.create()
    export const items_swords = SpriteKind.create()
    export const kind_key_blue = SpriteKind.create()
    export const kind_sword = SpriteKind.create()
}
function Ghost01 () {
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost.setVelocity(30, 0)
    tiles.placeOnTile(Ghost, tiles.getTileLocation(20, 2))
    Ghost.setFlag(SpriteFlag.ShowPhysics, true)
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Right, sprites.dungeon.greenSwitchUp)) {
        if (game.ask("Open Secret Door?")) {
            if (item_key_blue == 1) {
                tiles.setTileAt(location, assets.tile`transparency16`)
                tiles.setWallAt(location, false)
            } else {
                game.showLongText("You don't have the Blue Key", DialogLayout.Center)
                Hero.x += -10
            }
        } else {
            Hero.x += -10
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kind_sword, function (sprite, otherSprite) {
    item_sword = 1
    Hero.sayText("A sword is all I need for my adventures", 2000, true)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tilemap_no == 1) {
        hero_x = Hero.x
        hero_y = Hero.y
        Menu()
    } else {
        Map()
        Hero.setPosition(hero_x, hero_y)
    }
})
sprites.onOverlap(SpriteKind.kind_cursor, SpriteKind.items_key_blue, function (sprite, otherSprite) {
    otherSprite.sayText("Blue Key required to open Blue Locks", 2000, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kind_key_blue, function (sprite, otherSprite) {
    item_key_blue = 1
    Hero.sayText("Look what I found. A blue key. I will keep in my inventory", 2000, true)
    otherSprite.destroy()
})
function Map () {
    tiles.setTilemap(tilemap`level2`)
    scene.cameraFollowSprite(Hero)
    clearItems()
    tilemap_no = 1
    Hero = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Hero, 100, 100)
    scene.cameraFollowSprite(Hero)
    if (item_key_blue == 0) {
        Key01 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 8 8 8 8 8 . . . . . . . . . . 
            . 8 . . . 8 . . . . . . . . . . 
            . 8 . . . 8 8 8 8 8 8 8 8 8 . . 
            . 8 . . . 8 . . . . 8 . . 8 . . 
            . 8 8 8 8 8 . . . . 8 . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.kind_key_blue)
        tiles.placeOnTile(Key01, tiles.getTileLocation(2, 2))
    }
    if (item_sword == 0) {
        Sword = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c b b b b b b b b b b b 
            . c c c c 1 1 1 1 1 1 1 1 1 b b 
            . c c c 1 1 1 1 1 1 1 1 1 b b . 
            . . . . c b b b b b b b b b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.kind_sword)
        tiles.placeOnTile(Sword, tiles.getTileLocation(2, 8))
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Ghost_Follow_Hero = 1
    tiles.setTileAt(location, assets.tile`myTile`)
})
function Menu () {
    clearItems()
    scene.centerCameraAt(0, 0)
    tiles.setTilemap(tilemap`level3`)
    tilemap_no = 2
    Cursor = sprites.create(img`
        5 5 5 5 . . . . . . . . 5 5 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 5 5 . . . . . . . . 5 5 5 5 
        `, SpriteKind.kind_cursor)
    Cursor.setPosition(16, 16)
    controller.moveSprite(Cursor)
    if (item_sword == 1) {
        Sword = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c b b b b b b b b b b b 
            . c c c c 1 1 1 1 1 1 1 1 1 b b 
            . c c c 1 1 1 1 1 1 1 1 1 b b . 
            . . . . c b b b b b b b b b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.items_swords)
        tiles.placeOnTile(Sword, tiles.getTileLocation(1, 1))
    }
    if (item_key_blue == 1) {
        Key01 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 8 8 8 8 8 . . . . . . . . . . 
            . 8 . . . 8 . . . . . . . . . . 
            . 8 . . . 8 8 8 8 8 8 8 8 8 . . 
            . 8 . . . 8 . . . . 8 . . 8 . . 
            . 8 8 8 8 8 . . . . 8 . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.items_key_blue)
        tiles.placeOnTile(Key01, tiles.getTileLocation(2, 1))
    }
}
sprites.onOverlap(SpriteKind.kind_cursor, SpriteKind.items_swords, function (sprite, otherSprite) {
    otherSprite.sayText("You'll need a sword to fight Mobs!", 2000, true)
})
function clearItems () {
    if (Sword) {
        Sword.destroy()
    }
    if (Key01) {
        Key01.destroy()
    }
    if (Cursor) {
        Cursor.destroy()
    }
    if (Hero) {
        Hero.destroy()
    }
}
let Cursor: Sprite = null
let Sword: Sprite = null
let Key01: Sprite = null
let hero_y = 0
let hero_x = 0
let tilemap_no = 0
let item_sword = 0
let item_key_blue = 0
let Ghost: Sprite = null
let Ghost_Follow_Hero = 0
let Hero: Sprite = null
Map()
Ghost01()
tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
Ghost_Follow_Hero = 0
game.onUpdate(function () {
    if (Ghost_Follow_Hero == 1) {
        Ghost.follow(Hero, 30)
        Ghost.setFlag(SpriteFlag.GhostThroughWalls, true)
    } else if (Ghost.vx > 0 && Ghost.tileKindAt(TileDirection.Right, sprites.dungeon.floorLight0)) {
        Ghost.setVelocity(-30, 0)
    } else if (Ghost.vx < 0 && Ghost.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight0)) {
        Ghost.setVelocity(30, 0)
    } else {
    	
    }
})
game.onUpdate(function () {
	
})
