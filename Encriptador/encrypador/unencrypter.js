
//let wordToUnencrypt = 'mufatrcimesenterlaigober'
let wordToUnencrypt = 'imesimesimesimes'

const unencrypFunWhile = () =>{
    while (wordToUnencrypt.includes('ai')){
        wordToUnencrypt = wordToUnencrypt.replace('ai', 'a');
        //console.log(wordToUnencrypt)
    }

    while (wordToUnencrypt.includes('enter')){
        wordToUnencrypt = wordToUnencrypt.replace('enter', 'e');
        //console.log(wordToUnencrypt)
    }

    while (wordToUnencrypt.includes('imes')){
        wordToUnencrypt = wordToUnencrypt.replace('imes', 'i');
        //console.log(wordToUnencrypt)
    }

    while (wordToUnencrypt.includes('ober')){
        wordToUnencrypt = wordToUnencrypt.replace('ober', 'o');
        //console.log(wordToUnencrypt)
    }

    while (wordToUnencrypt.includes('ufat')){
        wordToUnencrypt = wordToUnencrypt.replace('ufat', 'u');
        //console.log(wordToUnencrypt)
    }
    return(console.log(wordToUnencrypt))
    
}

unencrypFunWhile()