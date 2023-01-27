

const encrypter = () =>{
    outputSpace.textContent= '';
    const inputWord = document.getElementById('inputSpace').value;
    const wordToEncryp = inputWord
        let letterA =[];
        let letterE =[];
        let letterI =[];
        let letterO =[];
        let letterU =[];
        
        let fixingWord = Array.from(wordToEncryp);
    
        for(let i = 0; i < wordToEncryp.length; i++){
            if (wordToEncryp[i] === "a") letterA.push(i);
            
            if (wordToEncryp[i] === "e") letterE.push(i);
            
            if (wordToEncryp[i] === "i") letterI.push(i);
            
            if (wordToEncryp[i] === "o") letterO.push(i);
            
            if (wordToEncryp[i] === "u") letterU.push(i);
            
        }
    
        
        letterA.forEach(element => {
            fixingWord[element] = 'ai';
            //console.log(element);
            return(fixingWord);
            
        });
        letterE.forEach(element => {
            fixingWord[element] = 'enter';
            //console.log(letterE1);
            return(fixingWord);
            
        });
        letterI.forEach(element => {
            fixingWord[element] = 'imes';
            //console.log(letterI1);
            return(fixingWord);
            
        });
        letterO.forEach(element => {
            fixingWord[element] = 'ober';
            //console.log(letterO1);
            return(fixingWord);
            
        });
        letterU.forEach(element => {
            fixingWord[element] = 'ufat';
            //console.log(letterU1);
            return(fixingWord);
            
        });

        const answer = fixingWord.join('')
        console.log(answer);
        h3.style.visibility = "hidden";
        const image = document.getElementById('imageContainer');
        outputSpace.textContent= answer;
        h3.style.visibility = 'hidden';
        parragraph.style.visibility = 'hidden';
        imageContainer.style.visibility = 'hidden';
        outputSpace.style.visibility = 'visible';

}

const unencrypter = () =>{
    
    let wordToUnencrypt = document.getElementById('inputSpace').value;
        
        while (wordToUnencrypt.includes('ai')){
            wordToUnencrypt = wordToUnencrypt.replace('ai', 'a');
            
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
        console.log(wordToUnencrypt);
        h3.style.visibility = "hidden";
        const image = document.getElementById('imageContainer');
        outputSpace.textContent= wordToUnencrypt;
        h3.style.visibility = 'hidden';
        parragraph.style.visibility = 'hidden';
        imageContainer.style.visibility = 'hidden';
        outputSpace.style.visibility = 'visible';   
    
}

const copyToClip = () =>{
    let textCopied = document.getElementById('outputSpace');
    navigator.clipboard.writeText(textCopied.innerHTML);
    alert('copiado')
}