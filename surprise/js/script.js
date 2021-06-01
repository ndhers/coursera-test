// Var with array and object for questions 
var questions = [
    {
        title: "En allant à New York en bus, où nous sommes-nous arrêtés pour prendre des photos?",
        choices: ["Dunkin Donuts", "Arrêt Bus", "Station Essence", "Pizza Hut"],
        answer: "Station Essence"
    },
    {
        title: "Combien de fois avons-nous mangé chez Sushi Momo (take-out doesn't count)?",
        choices: ["5", "3", "2","4"],
        answer: "3"
    },
    {
        title: "D'où venaient Ramiro y Jimmy?",
        choices: ["Venezuela", "Chile", "Costa Rica", "Colombia"],
        answer: "Venezuela"
    },
    {
        title: "Qu'avons-nous fait quand ta cousine nous a laissés dans la chambre à NY?",
        choices: ["Enfiler des perles", "Jouer au monopoly", "Jouer a shifumi", "None of the answers above"],
        answer: "None of the answers above"
    },
    {
        title: "Quelle est la marque des saucisses vegans que l'on achetait à Metro?",
        choices: ["Beyond Meat", "Gusta", "LightLife", "Yves"],
        answer: "Yves"
    },
    {
        title: "Question dure: à quelle heure avions-nous rdv pour le premier date? (tu avais un truc au Délit juste avant)",
        choices: ["17h45", "18h","18h15","18h30"],
        answer: "17h45"
    },
    {
        title: "Quel film avons-nous regardé sur le lower field de McGill?",
        choices: ["Spider Man", "Deadpool", "Avengers", "Antman"],
        answer: "Deadpool"
    },
    {
        title: "Quelle chanson avons-nous décidé de mettre à notre mariage?",
        choices: ["Beatles", "watermelon sugar", "Riptide, Vance Joy", "It's friday again it's saturday sunday"],
        answer: "It's friday again it's saturday sunday"
    },
    {
        title: "De quelle destination avons-nous également convenu (après mûre réflexion) pour la honeymoon?",
        choices: ["Molokai", "Saint Vincent", "Québec City", "La Digue"],
        answer: "La Digue"
    },
        {
        title: "Où avons-nous mangé dans Westmount quelques jours avant ton départ en Inde (j'étais triste :( )?",
        choices: ["Aux Vivres", "Panthère Verte", "Mandy's","Lola Rosa"],
        answer: "Aux Vivres"
    },
    {
        title: "Que portais-tu quand je t'ai vue à Paris Place Vendôme?",
        choices: ["Robe blanche", "Jean bleu", "Pantalon velour", "Robe bleue"],
        answer: "Jean bleu"
    },
    {
        title: "Où as-tu volé quelque chose de Muji pour la première fois (avec moi)?",
        choices: ["Toronto", "New York", "Barcelone", "Montreal"],
        answer: "New York"
    },
    {
        title: "Qu'est ce que tu y avais volé?",
        choices: ["Marker", "Blocknote", "Stylo", "Feutre"],
        answer: "Stylo"
    },
    {
        title: "Qui a récupéré la clef quand nous nous sommes (ou plutôt quand je nous ai) locked out?",
        choices: ["Toi", "Emanuel Uzan", "Le Airbnb à Quebec, est ce que vous voulez des patates?", "Le vendeur de vélo, un vélo c'est quoi avant tout? Un châssis!"],
        answer: "Toi"
    },
    {
        title: "Pour quelle occasion avais-tu préparé du guacamole (pour la première fois avec moi) que nous avons pris en apéro?",
        choices: ["Game of Thrones", "Finale Champions League", "NBA Playoffs", "The Office, What else?"],
        answer: "NBA Playoffs"
    },
    {
        title: "A qui ne ressemble pas du tout le mural que l'on voit à chaque fois en rentrant du Vieux Saint Laurent?",
        choices: ["Kindi", "Kindi", "Kindi", "Kindi"],
        answer: "Kindi"
    },
    {
        title: "Quel film suivant n'avons-nous pas vu au cinéma?",
        choices: ["First Man", "Shape of Water", "Once Upon a Time in Hollywood", "Parasite","Woman at War","Isle of Dogs"],
        answer: "Parasite"
    },
    {
        title: "Quelle est la première chanson que tu as voulu me faire écouter?",
        choices: ["Été Indien", "Drowning, A Boogie wit da Hoodie", "Dreams, Fleetwood Mac", "Plume, Nekfeu"],
        answer: "Été Indien"
    },
    {
        title: "Qui est le première artiste que j'ai voulu te faire écouter?",
        choices: ["J.Cole", "Scott Mescudi", "MHD", "Damso"],
        answer: "Scott Mescudi"
    },
    {
        title: "Comment s'appelaient les vélos dans la rue à Toronto?",
        choices: ["Bicing", "Bike Share", "Citi Bikes", "Bixi Bikes"],
        answer: "Bike Share"
    },

];
// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 600;
var total_time = secondsLeft;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        var createPic = document.createElement("img");
        createPic.setAttribute("src", "images/"+questionIndex+".jpg");
  		createPic.setAttribute("width", "304");
  		createPic.setAttribute("height", "404");
  		createPic.setAttribute("alt","pas pu trouver de photos :(");

  	

        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;

            createDiv.textContent = "Bravo bibi! La bonne réponse était en effet:  " + questions[questionIndex].answer +". Petit souvenir:";
            if (wrapper.getElementsByTagName('img').length > 0) {
        		wrapper.replaceChild(createPic, wrapper.getElementsByTagName('img')[0]);
   			 } else {
        		// append if no previous image
        	wrapper.appendChild(createPic);
    }
  			// wrapper.appendChild(createPic);
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            // secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Grrrrrr, pas bien ca bibi! Essaie encore pour trouver la bonne réponse." 
            // était:  " + questions[questionIndex].answer;
            if (wrapper.getElementsByTagName('img').length > 0) {
            wrapper.removeChild(pastPic);
    }
        }

    }

    pastPic = createPic;
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "Finiii!" + " " + "Tu as obtenu  " + score + "/" + questions.length + " correct! Prière de me dire quand tu as eu tout bon pour que j'update les questions!";
        var createPic2 = document.createElement("img");
        createPic2.setAttribute("src", "images/bravo.jpg");
  		createPic2.setAttribute("width", "405");
  		createPic2.setAttribute("height", "270");
  		wrapper.appendChild(createPic2);
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finiii!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var temps = total_time-timeRemaining;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Ton score final est: " + score + "/" + questions.length + " en " + temps + "s.";
        if (wrapper.getElementsByTagName('img').length > 0) {
            wrapper.removeChild(pastPic);
    }
        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enregistre toi pour save ton record: ";

    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("Tu n'as rien rentré!");

        } else {
            var finalScore = {
                initials: initials,
                score: ": "+score + "/" + questions.length + " en " + temps + "s."
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });

}