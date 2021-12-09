namespace SpriteKind {
    export const kind_cursor = SpriteKind.create()
    export const items = SpriteKind.create()
    export const items_key_blue = SpriteKind.create()
    export const items_swords = SpriteKind.create()
    export const kind_key_blue = SpriteKind.create()
    export const kind_sword = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const kind_NPC2 = SpriteKind.create()
    export const items_pancake = SpriteKind.create()
}
function Ghost01 () {
    if (item_ghost == 1) {
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
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    directions = 12
    Hero.setImage(img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `)
})
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
    if (item_sword == 1) {
        if (directions == 12) {
            Hero.setImage(img`
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
            pause(200)
        }
        if (directions == 3) {
            Hero.setImage(img`
                ........................
                .......fff..............
                ....fffff2f.............
                ..ffeeeee22ff...........
                .ffeeeeee222ff..........
                .feeeefffeeeef..........
                .fffffeee2222ef.........
                fffe222fffffe2f.........
                fffffffffeeefff.....cc..
                fefe44ebbf44eef...ccdc..
                .fee4d4bbfddef..ccddcc..
                ..feee4dddddfeecdddc....
                ...f2222222eeddcdcc.....
                ...f444445e44ddccc......
                ...ffffffffeeee.........
                ...fff...ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
            pause(200)
        }
        if (directions == 6) {
            Hero.setImage(img`
                ........................
                ........................
                .......ff...............
                .....ff22ff.............
                ...fff2222fff...........
                ..fff222222fff..........
                ..fff222222fff..........
                ..feeeeeeeeeeff.........
                .ffe22222222eff.........
                .fffffeeeefffff.........
                fdfefbf44fbfeff.........
                fbfe41fddf14ef..........
                fbffe4dddd4efe..........
                fcfef22222f4e...........
                .ff4f44554f4e...........
                ....ffffffdde...........
                .....ffffedde...........
                ..........ee............
                .........ccc............
                ........cc1cc...........
                .........c1c............
                .........c1c............
                .........c1c............
                .........c1c............
                `)
            pause(200)
        }
        if (directions == 9) {
            Hero.setImage(img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
            pause(200)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kind_key_blue, function (sprite, otherSprite) {
    item_key_blue = 1
    Hero.sayText("Look what I found. A blue key. I will keep in my inventory", 2000, true)
    otherSprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    directions = 9
    Hero.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
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
    Ghost01()
    Ghost02()
}
function Ghost02 () {
    if (item_ghost2 == 1) {
        Ghost2 = sprites.create(img`
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
        Ghost2.setFlag(SpriteFlag.ShowPhysics, true)
        tiles.placeOnTile(Ghost2, tiles.getTileLocation(22, 12))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    if (game.ask("Speak to Villager?")) {
        NPC.sayText("You have to go East, pass the dessert and over the river. Bring this Pancake to give her", 5000, true)
        pause(5000)
        Hero.sayText("You received a pancake", 2000, true)
        item_pancake = 1
        Hero.x += 10
    } else {
        Hero.x += 10
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Ghost_Follow_Hero = 1
    tiles.setTileAt(location, assets.tile`myTile`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    directions = 3
    Hero.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    directions = 6
    Hero.setImage(img`
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
        `)
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
    if (item_sword >= 1) {
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
    if (item_key_blue >= 1) {
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
    if (item_pancake >= 1) {
        pancake = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 5 5 5 . . . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 4 5 5 5 5 5 5 5 5 5 4 . . . . 
            . 4 4 4 5 5 5 5 5 5 4 4 . . . . 
            . . 4 4 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.items_pancake)
        tiles.placeOnTile(pancake, tiles.getTileLocation(3, 1))
    }
}
sprites.onOverlap(SpriteKind.kind_cursor, SpriteKind.items_swords, function (sprite, otherSprite) {
    otherSprite.sayText("You'll need a sword to fight Mobs!", 2000, true)
})
sprites.onOverlap(SpriteKind.kind_cursor, SpriteKind.items_pancake, function (sprite, otherSprite) {
    if (controller.A.isPressed() && item_pancake == 1) {
        item_pancake = 2
        Map()
        Hero.setPosition(hero_x, hero_y)
        pancake = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 5 5 5 . . . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 4 5 5 5 5 5 5 5 5 5 4 . . . . 
            . 4 4 4 5 5 5 5 5 5 4 4 . . . . 
            . . 4 4 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.items_pancake)
    } else if (controller.A.isPressed() && item_pancake == 2) {
        item_pancake = 1
        Map()
        Hero.setPosition(hero_x, hero_y)
    }
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
    if (Ghost) {
        Ghost.destroy()
    }
    if (Ghost2) {
        Ghost2.destroy()
    }
    if (pancake) {
        pancake.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (item_sword == 1 && controller.A.isPressed()) {
        otherSprite.destroy()
    } else {
        info.changeLifeBy(-1)
    }
})
let pancake: Sprite = null
let Cursor: Sprite = null
let item_pancake = 0
let Ghost2: Sprite = null
let Sword: Sprite = null
let Key01: Sprite = null
let hero_y = 0
let hero_x = 0
let tilemap_no = 0
let item_sword = 0
let item_key_blue = 0
let directions = 0
let Ghost: Sprite = null
let NPC: Sprite = null
let item_ghost2 = 0
let item_ghost = 0
let Ghost_Follow_Hero = 0
let Hero: Sprite = null
Map()
tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
Ghost_Follow_Hero = 0
item_ghost = 1
Ghost01()
item_ghost2 = 1
Ghost02()
let Ghost_Totem = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........bbbb..........
    ........bbddddbb........
    .......bddbbbbddb.......
    ......bdbbddddbbdb......
    .....bdbbdbbbbdbbdb.....
    .....bdbdbddddbdbdb.....
    .....cdbbdbbbbdbbdc.....
    .....cbdbbddddbbdbc.....
    .....efbddbbbbddbce.....
    .....eeffbddddbccee.....
    .....eeeeffcccceee......
    .....ceeeeeeeeeeee......
    .....ceeeeeeeeeeee......
    .....feeeeeeeeeeee......
    .....cceeeeeeeeeee......
    ......feeeeeeeeeee......
    .....6fceeeeeeeeee6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6666776...
    ..67768e67766777667776..
    ...668ee7768867788666...
    ......ee77eeee77ecee....
    ......ee6eeeeee6eef.....
    ......eeeeeeeeeeeef.....
    ......eeeeeeeeeeeef.....
    ......eeeeeeeeeeecf.....
    ......ceeeeeeeeeecf.....
    ......ceeeeeeeeeeff.....
    ......feeeeeeeeeefe.....
    .....6feeeeeeeeeef6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6667776...
    ..6776ee67777777667776..
    ...668ee7768867788666...
    ......ee77eeee67ee......
    ......ee6eeeeee6ce......
    `, SpriteKind.items)
tiles.placeOnTile(Ghost_Totem, tiles.getTileLocation(22, 13))
NPC = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.NPC1)
tiles.placeOnTile(NPC, tiles.getTileLocation(11, 1))
let NPC2 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.kind_NPC2)
tiles.placeOnTile(NPC2, tiles.getTileLocation(47, 1))
game.onUpdate(function () {
    if (Math.sqrt((Hero.x - Ghost2.x) * (Hero.x - Ghost2.x) + (Hero.y - Ghost2.y) * (Hero.y - Ghost2.y)) < 64) {
        Ghost2.follow(Hero, 30)
    } else {
        Ghost2.follow(Ghost_Totem, 30)
    }
})
// Ghost 01.... going in circles
game.onUpdate(function () {
    if (item_ghost == 1) {
        if (Ghost_Follow_Hero == 1) {
            Ghost.follow(Hero, 30)
            Ghost.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        if (Ghost.isHittingTile(CollisionDirection.Right)) {
            Ghost.vy = 20
        }
        if (Ghost.isHittingTile(CollisionDirection.Bottom)) {
            Ghost.vx = -20
        }
        if (Ghost.isHittingTile(CollisionDirection.Left)) {
            Ghost.vy = -20
        }
        if (Ghost.isHittingTile(CollisionDirection.Top)) {
            Ghost.vx = 20
        }
    }
})
game.onUpdate(function () {
    if (item_pancake == 2) {
        pancake.setPosition(Hero.x, Hero.y - 16)
    }
})
game.onUpdate(function () {
	
})
