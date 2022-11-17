
const words = ["VIENNA","ATHENS","BERLIN","SARAJEVO","BRNO","MADRID",
               "TAMPERE","YEREVAN","MOGADISU","SOFIA","OSAKA"];

var guessed_letters = [] ;
var word_to_guess ;
var word_to_guess_array = [] ;
var guesses_made ;
const letter_buttons = document.getElementsByClassName('letter_button');


function initiateGame()
{   
    var random_word_index = Math.floor(Math.random() * words.length);

    word_to_guess = words[random_word_index];

    guessed_letters = guessed_letters.slice(0,word_to_guess.length);

    for (let i = 0; i < word_to_guess.length; i++) 
    {     
        guessed_letters[i] = "_" ;
    }

    word_to_guess_array = word_to_guess.split("");

    guesses_made = 0;

    document.getElementById("guessed_so_far").innerHTML = guessed_letters.join(" ");
    document.getElementById("number_of_guesses").innerHTML = guesses_made;
    for ( i in letter_buttons )
    {
        letter_buttons[i].disabled = false ;
    }
    document.getElementById('newgame').style.display = "none" ;
}

function checkLetter(l)
{
    document.getElementById(l).style.color = "antiquewhite" ;
    document.getElementById(l).style.background = "firebrick" ;
 
    for (i = 0; i < word_to_guess.length; i++)
    {
        if (l == word_to_guess_array[i]) 
        {
            guessed_letters[i] = l;
            document.getElementById("guessed_so_far").innerHTML = guessed_letters.join(" ");
            document.getElementById(l).style.color = "antiquewhite" ;
            document.getElementById(l).style.background = "forestgreen" ;   
        }
    };

    guesses_made ++ ;
    document.getElementById("number_of_guesses").innerHTML = guesses_made;

    if (guessed_letters.indexOf("_") == -1) {
        alert("Congratulations!");
        document.getElementById("newgame").style.display = "inline" ;
    };
    
    document.getElementById(l).disabled = true ;
}
