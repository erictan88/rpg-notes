// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Menu":
            case "level1":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a0008000602020202020202020501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103010101010101010104`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile9,sprites.swamp.swampTile7,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.swamp.swampTile8,sprites.swamp.swampTile6], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`30001000010101010101010101010201010101010201010101010101010101010101010101010101010001010101010101010101010202020202020202010201010104010201010505050105050505010101010101010101010101010101010101010101010201010101020202010201010101010201010501010101010105010101010101010101010101010101010101010101010202020201020202010201010101010301010501050505050105010101010101010101010101010101010101010101010101010101020202010201010101010201010501050601050105010101010101010101010101010101010101010101020202020202010101010201010101010201010501010101010105010101010101010101010101010101010101010101010101010101010202010201010101010201010505050505050505010101010101010101010101010101010101010101010202020202020202010101010101010201010101010101010101010101010101010101010101010101010101010101010201010101010102020201010101010201010101010101010101010101010101010101010101010101010101010101010202020202020102020201010101010201010101010101010101010101010101010101010101010101010101010101010101010101010102020201010101010201010101010101010101010101010101010101010101010101010101010101010202020202020202020201010101010201010101010101010101010101010101010101010101010101010101010101020201010102010101010101010101010201010101010101010101010101010101010101010101010101010101010101010101020101010202020201010101010201010101010101010101010101010101010101010101010101010101010101020102020202020201010201010101010201010101010101010101010101010101010101010101010101010101010101020101010101010101010201010101010201010101010101010101010101010101010101010101010101010101010101`, img`
..........2.....................................
.22222222.2........222.2222.....................
.2....222.2........2......2.....................
.2222.222.2.....2..2.2222.2.....................
......222.2.....2..2.2..2.2.....................
222222....2.....2..2......2.....................
.......22.2.....2..22222222.....................
.22222222.......2...............................
.2......222.....2...............................
.222222.222.....2...............................
........222.....2...............................
.2222222222.....2...............................
22...2..........2...............................
...2...2222.....2...............................
2.222222..2.....2...............................
2.........2.....2...............................
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.dungeon.greenSwitchUp,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
