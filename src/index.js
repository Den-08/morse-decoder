const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.match(/.{10}/g);
    arr = arr.map(function (toMorseSym) {
        return toMorseSym.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*{10}/g, ' ');
    });
    arr = arr.map(function (fromMorseSym) {
        if (fromMorseSym in MORSE_TABLE) return MORSE_TABLE[fromMorseSym];
        else return fromMorseSym;
    });
    return arr.join('');
}

module.exports = {
    decode
}
