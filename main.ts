namespace SpriteKind {
    export const Question_1 = SpriteKind.create()
    export const Question_2 = SpriteKind.create()
    export const Complete = SpriteKind.create()
    export const Quesiton_3 = SpriteKind.create()
    export const Question_4 = SpriteKind.create()
    export const Question_5 = SpriteKind.create()
    export const Question_6 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Question_6, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What's The Capital of Egypt?", DialogLayout.Bottom)
    story.showPlayerChoices("Cairo", "Alexandria")
    if (story.checkLastAnswer("Cairo")) {
        info.changeScoreBy(10)
        music.powerUp.play()
        Queen.setKind(SpriteKind.Complete)
        Queen.destroy()
    } else if (story.checkLastAnswer("Alexandria")) {
        info.changeScoreBy(-5)
        Queen.setKind(SpriteKind.Complete)
        Queen.destroy()
        info.changeLifeBy(-1)
    } else {
    	
    }
    DialogMode = false
    pause(2000)
})
function SpawnQueen () {
    Queen = sprites.create(img`
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
        `, SpriteKind.Question_6)
    tiles.placeOnRandomTile(Queen, sprites.castle.tileDarkGrass2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Question_5, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("The World needs you so be Positive", DialogLayout.Bottom)
    story.showPlayerChoices("Okay i appericiate it", "Okay")
    if (story.checkLastAnswer("No")) {
        info.changeScoreBy(-5)
        Bat.setKind(SpriteKind.Complete)
        Bat.destroy()
        info.changeLifeBy(-1)
    } else if (story.checkLastAnswer("Okay i appericiate it")) {
        info.changeScoreBy(10)
        music.powerUp.play()
        Bat.setKind(SpriteKind.Complete)
        Bat.destroy()
    } else {
    	
    }
    DialogMode = false
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Question_1, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is The Capital of Russia?", DialogLayout.Bottom)
    story.showPlayerChoices("Moscow", "NizhnyNovgorod")
    if (story.checkLastAnswer("Moscow")) {
        info.changeScoreBy(5)
        music.powerUp.play()
        Monkey.setKind(SpriteKind.Complete)
        Monkey.destroy()
    } else if (story.checkLastAnswer("NizhnyNovgorod")) {
        info.changeScoreBy(-5)
        Monkey.destroy()
        info.changeLifeBy(-1)
    } else {
    	
    }
    DialogMode = false
    pause(2000)
})
function SpawnDuck2 () {
    Duck2 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Quesiton_3)
    tiles.placeOnRandomTile(Duck2, sprites.dungeon.floorLight1)
}
function SpawnDuck () {
    Duck = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Question_2)
    tiles.placeOnRandomTile(Duck, sprites.builtin.forestTiles10)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Nemo_Fish.destroy()
    Duck2.destroy()
    tiles.setCurrentTilemap(tilemap`level0`)
    SpawnQueen()
    SpawnBat()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Question_4, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("Don't be pushed around by the fears in your mind. Be led by the dreams in your heart", DialogLayout.Bottom)
    story.showPlayerChoices("That's Delightful", "Not Good")
    if (story.checkLastAnswer("That's Delightful")) {
        info.changeScoreBy(10)
        music.powerUp.play()
        Nemo_Fish.setKind(SpriteKind.Complete)
        Nemo_Fish.destroy()
    } else if (story.checkLastAnswer("That's Aweful")) {
        info.changeScoreBy(-5)
        Nemo_Fish.setKind(SpriteKind.Complete)
        Nemo_Fish.destroy()
        info.changeLifeBy(-1)
    } else {
    	
    }
    DialogMode = false
    pause(2000)
})
function SpawnBat () {
    Bat = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Question_5)
    tiles.placeOnRandomTile(Queen, sprites.castle.tileDarkGrass3)
}
function SpawnFish () {
    Nemo_Fish = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Question_4)
    tiles.placeOnRandomTile(Nemo_Fish, sprites.dungeon.floorDarkDiamond)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Question_2, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("Do You Love Me? :D", DialogLayout.Bottom)
    story.showPlayerChoices("Yes", "Yes a lot")
    if (story.checkLastAnswer("Yes a lot")) {
        info.changeScoreBy(10)
        music.powerUp.play()
        Duck.setKind(SpriteKind.Complete)
        Duck.destroy()
    } else if (story.checkLastAnswer("Yes")) {
        info.changeScoreBy(10)
        music.powerUp.play()
        Duck.setKind(SpriteKind.Complete)
        Duck.destroy()
    } else {
    	
    }
    DialogMode = false
    pause(2000)
})
info.onLifeZero(function () {
    game.over(false)
})
info.onScore(50, function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quesiton_3, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("AIU Refers To :", DialogLayout.Bottom)
    story.showPlayerChoices("Alamein International Univeristy", "Alamein International Universe")
    if (story.checkLastAnswer("Alamein International Univeristy")) {
        info.changeScoreBy(5)
        music.powerUp.play()
        Duck2.setKind(SpriteKind.Complete)
        Duck2.destroy()
    } else if (story.checkLastAnswer("Alamein International Universe")) {
        info.changeScoreBy(-5)
        Duck2.setKind(SpriteKind.Complete)
        Duck2.destroy()
        info.changeLifeBy(-1)
    } else {
    	
    }
    DialogMode = false
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    Duck.destroy()
    Monkey.destroy()
    tiles.setCurrentTilemap(tilemap`level`)
    SpawnDuck2()
    SpawnFish()
})
function SpawnMonkey () {
    Monkey = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Question_1)
    tiles.placeOnRandomTile(Monkey, sprites.builtin.forestTiles14)
}
function SpawnMysprite () {
    Hero = sprites.create(img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    tiles.placeOnTile(Hero, tiles.getTileLocation(8, 14))
    scene.cameraFollowSprite(Hero)
    info.setLife(6)
}
let Nemo_Fish: Sprite = null
let Duck: Sprite = null
let Duck2: Sprite = null
let Monkey: Sprite = null
let Bat: Sprite = null
let Queen: Sprite = null
let Hero: Sprite = null
let DialogMode = false
game.showLongText("Here is Some instructions to understand how the game goes", DialogLayout.Bottom)
game.showLongText("You Have to Go to Characters and Answer Their Questions \"Every Question has its Points\" You Have to Proceed 50 Points to Win this game.", DialogLayout.Bottom)
game.showLongText("You have to use ASDW to move, Space to choose the correct answer and S,W to Switch between answers.", DialogLayout.Bottom)
game.showLongText("You have Three levels which is 6 Questions by every character - Go To The Box To turn to the next level.", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level1`)
story.printText("Level 1", 2, 2)
SpawnMysprite()
SpawnDuck()
SpawnMonkey()
DialogMode = false
story.spriteSayText(Hero, "Hi, My Creator is Karim Samir Sayed Abdelwahab")
pause(500)
story.spriteSayText(Hero, "I Hope You Enjoy My Little Game ")
pause(500)
story.setSoundEnabled(true)
forever(function () {
    if (DialogMode == false) {
        controller.moveSprite(Hero)
    } else if (DialogMode == true) {
        controller.moveSprite(Hero, 0, 0)
    } else {
    	
    }
})
forever(function () {
    music.playMelody("A F G A G F B C5 ", 150)
})
