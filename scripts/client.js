$(document).ready(function () {
    console.log('jQuery loaded');


    $('#palindromeButton').on('click', function () {
        $('#message').empty();

        let palindromeInput = $('#inputText').val();
        // console.log(`palindrome button clicked and the value is ${palindromeInput}`);
        if (palindromeInput === "") {
            $('#message').append('<p>Please input a sentence</p>')
        } else {
            if (isItAPalindrome(palindromeInput)) {
                $('#message').append('<p>Success! "' + palindromeInput + '" is a palindrome.</p>')
            } else {
                $('#message').append('<p>Sorry! "' + palindromeInput + '" is not a palindrome.</p>')
            }
        }
    });

    isItAPalindrome = (sen) => {
        var palindromeToCheck = sen.replace(/[.,+ !-]/g, "").toLowerCase();
        var reversedSentence = "";

        // console.log(`Sen: ${sen}, ${sen.length} : palindromeToCheck: ${palindromeToCheck}`);

        for (var i = palindromeToCheck.length - 1; i >= 0; i--) {
            //console.log(`Sen at ${i} ${palindromeToCheck[i]}`);
            reversedSentence += (palindromeToCheck[i]);
        }

        // console.log("Reversed array:", reversedSentence);
        if (palindromeToCheck === reversedSentence) {
            return true;
        } else {
            return false;
        }
    }
});