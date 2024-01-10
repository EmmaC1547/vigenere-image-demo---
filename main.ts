controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Call the Vigenere function, passing in the encryption key, the encrypted image, and "false" to indicate that you want the image to be decrypted.
    Vigenere(mySprite, false, game.askForString("Enter decryption kry ", 8))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Call the Vigenere function, passing in the encryption key, the image to be encrypted, and "true" to indicate that you want the image encrypted.
    Vigenere(mySprite, true, game.askForString("Enter encryption  key ", 8))
})
function Vigenere (imagemessage: Sprite, encode: boolean, pw: string) {
    pIndex = 0
    for (let row = 0; row <= imagemessage.height - 1; row++) {
        for (let column = 0; column <= imagemessage.width - 1; column++) {
            if (encode) {
                imagemessage.image.setPixel(column, row, (imagemessage.image.getPixel(column, row) + TextToNumber(pw.charAt(pIndex))) % 16)
            } else {
                imagemessage.image.setPixel(column, row, (imagemessage.image.getPixel(column, row) - TextToNumber(pw.charAt(pIndex)) + 16) % 16)
            }
            pIndex += 1
            if (pIndex >= pw.length) {
                pIndex = 0
            }
        }
        pause(1)
    }
}
function TextToNumber (text: string) {
    return "abcdefghijklmnopqrstuvwxyz".indexOf(text)
}
let pIndex = 0
let mySprite: Sprite = null
// This is the image to encode or decode
mySprite = sprites.create(assets.image`Pizza`, SpriteKind.Player)
mySprite.y = 70
// This is the "cipher key" to encode and decode the image
let password = sprites.create(assets.image`Color Key`, SpriteKind.Player)
password.top = 0
