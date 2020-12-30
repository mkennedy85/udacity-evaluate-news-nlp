function checkForPunctuation(inputText) {
    console.log("::: Checking for punctuation :::", inputText);
    return /\.$/.test(inputText[inputText.length - 1])
}

export { checkForPunctuation }
