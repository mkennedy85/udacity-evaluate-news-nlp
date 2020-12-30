function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let validSentence = Client.checkForPunctuation(formText)

    if (validSentence) {
        const postTxt = async (txt = '') => {
            const request = await fetch(`http://localhost:8080/analysis?txt=${txt}`, {
            method: "POST",
            credentials: "same-origin"
            });
        
            try {
            let results = await request.json();
            return results
            } catch (error) {
            console.log("error", error);
            }
        };

        const formatTxt = function (txt) {
            let formattedStr = `
            The results of the query is:</br>
            Confidence: ${txt.confidence}
            `
            return formattedStr
        }

        postTxt(formText)
        .then(function(res) {
            return formatTxt(res)
        })
        .then(function(res) {
            document.getElementById('results').innerHTML = res
        })
    } else {
        alert("Please use proper punctuation.")
        document.getElementById('results').innerHTML = ''
    }
}

export { handleSubmit }
