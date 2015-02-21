(function(){
    "use strict";

    function mutateWords( startString, endString, setOfWords){

        var dictionary = [];
        var setOfWords = setOfWords || [];

        if(setOfWords === undefined) return false;
        if(setOfWords.indexOf(startString) === -1) return false;
        if(setOfWords.indexOf(endString) === -1) return false;


        function getOneLetterEdit(searchString,arrayOfWords){

            if(searchString){

                for (var i = 0; i < arrayOfWords.length; i++) {

                    var editDistance = levenshtein(arrayOfWords[i], searchString);

                    if (editDistance === 1) {
                        return arrayOfWords[i];
                    }

                }
            }

            return false;
        }

        var tmp;
        var numberOfItems = setOfWords.length;
        //var howManySteps = levenshtein( startString, endString) + 1;

        tmp = "";
        dictionary = [];
        dictionary[0] = startString;
        setOfWords.splice(setOfWords.indexOf(dictionary[0]), 1);



        for (var j = 1; j <= numberOfItems; j++) {
            tmp = getOneLetterEdit(dictionary[j - 1], setOfWords);
            if (tmp) {
                dictionary[j] = tmp;
                setOfWords.splice(setOfWords.indexOf(tmp), 1);
                if (tmp === endString) {
                    break;
                }
            } else {
                break;
            }
        }

        return dictionary[dictionary.length-1] === endString ? dictionary : dictionary;
    }

    console.log(mutateWords("wore","wave",
        ["hate","have","word","wave", "love","cave","cove","said","joke","wove","wore"]));


}());