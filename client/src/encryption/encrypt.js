const encryption = (text, key) => {
    let textArr = Array.from(text)
    let multiple = 1
    for (let i = 0, j = 0; i < textArr.length; i++, j++) {
        if(i === (key.length - 1) * multiple){
            j = 0;
            multiple++;
        }
        textArr[i] = String.fromCharCode(key.charCodeAt(j) + text.charCodeAt(i))
    }
    return textArr.join('')
}

const decryption = (text, key) => {
    const textArr = Array.from(text)
    let multiple = 1
    for (let i = 0, j = 0; i < textArr.length; i++, j++) {
        if(i === (key.length - 1) * multiple){
            j = 0;
            multiple++;
        }
        textArr[i] = String.fromCharCode(text.charCodeAt(i) - key.charCodeAt(j))
    }
    return textArr.join('')
}

module.exports = {encryption, decryption}