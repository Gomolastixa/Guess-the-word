
const words = ["VIENNA","ATHENS","BERLIN","SARAJEVO","BRNO","MADRID",
               "TAMPERE","YEREVAN","MOGADISU","SOFIA","OSAKA"];

const key_layout = [ "Q","W","E","R","T","Y","U","I","O","P",
                        "A","S","D","F","G","H","J","K","L",
                        "Z","X","C","V","B","N","M" ];

var guessed_letters = [] ;
var word_to_guess = null ;
var word_to_guess_array = [] ;
var guesses_made = null ;
const letter_buttons = document.getElementsByClassName('letter_button');

function renderButtons()
{
    const lineBreak = ["P", "L"];

    for (key in key_layout) 
    {
        document.getElementById("keys_area").innerHTML += "<button type=\"button\" class=\"letter_button\" id=\"" + key_layout[key] +
                                                            "\" onclick=\"checkLetter(this.id)\">" 
                                                           + key_layout[key] + "</button>" ;

        if (lineBreak.indexOf(key_layout[key]) != -1)
        {
            document.getElementById("keys_area").innerHTML += "<br></br>" ;
        }
    } ;
} ;

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
        letter_buttons[i].style.color = "black" ;
        letter_buttons[i].style.background = "rgb(97, 167, 227)" ;
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

document.addEventListener("DOMContentLoaded", function(){renderButtons()}) ;