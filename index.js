var userInput = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#btn-translate");
var translatedOutput = document.querySelector("#translated-output");
var apiUrl = "https://api.funtranslations.com/translate/minion.json"
// var apiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

btnTranslate.addEventListener("click", translateToBananaLang);

function translateToBananaLang() {
    let userInputText = userInput.value;
    if ( userInputText ) {
        fetch( getUrl( userInputText ) )
        .then( response => response.json() )
        .then( response => {
            // translatedOutput.innerText = response.contents.text;
            if( response.error) {
                throw new Error(response.error.message);
            }
            translatedOutput.innerText = response.contents.translated;
        })
        .catch( err => {
            alert( err.message );
        })
    }
}

function getUrl(text) {
    return apiUrl + '?' + 'text=' + text;
}