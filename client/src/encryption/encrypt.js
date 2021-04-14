const encryption = (text, key) => {
    let textArr = Array.from(text)
    for (let i = 0, j = 0; i < text.length; i++, j++) {
        j = (i === key.length - 1) ? 0 : j;
        textArr[i] = String.fromCharCode(key.charCodeAt(j) + text.charCodeAt(i))
    }
    return textArr.join('')
}

const decryption = (text, key) => {
    let textArr = Array.from(text)
    for (let i = 0, j = 0; i < text.length; i++, j++) {
        j = (i === key.length - 1) ? 0 : j
        textArr[i] = String.fromCharCode(text.charCodeAt(i) - key.charCodeAt(j))
    }
    return textArr.join('')
}

module.exports = {encryption, decryption}