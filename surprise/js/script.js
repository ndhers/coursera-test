// Var with array and object for questions 
var questions = [
    {
        title: "Quel était ton code d'entrée d'immeuble quand tu habitais Jeanne Mance?",
        choices: ["654", "711", "705", "620"],
        answer: "705"
    },
    {
        title: "Quel est l'un de mes sides préférés au Libanais? (Il y en a 2 mais seulement 1 est dans la liste suivante.)",
        choices: ["betteraves", "couscous oriental", "salade tomates féta","falafels écrasés"],
        answer: "couscous oriental"
    },
    {
        title: "Avant lequel de mes cours allions-nous au 6ème de McConnell pour jouer au monopoly (not)?(hehe) hint: il y a un lien entre le cours et l'activité qui le précédait.",
        choices: ["Thermodynamics", "Heat Transfer", "Solid Mechanics", "Fluid Mechanics"],
        answer: "Fluid Mechanics"
    },
    {
        title: "Combien de pays avons-nous visité ensemble? (facile celle-là hein)",
        choices: ["5", "4", "6", "3"],
        answer: "5"
    },
    {
        title: "Quand est-ce que j'ai lu ton carnet? lol",
        choices: ["23/01/2019", "23/01/2018", "23/01/2020", "Jamais, c'est un mythe"],
        answer: "23/01/2019"
    },
    {
        title: "Quand est-ce que tu as lu mes messages (HA HA how the turntables have turned)?",
        choices: ["Juin 2018", "Juillet 2020", "Juin 2019","Juillet 2018"],
        answer: "Juin 2019"
    },
    {
        title: "Où étais-tu quand tu m'as fait parvenir la première photographie dénudée?",
        choices: ["Montreal", "Inde", "Grèce", "Sud"],
        answer: "Inde"
    },
    {
        title: "Quelle était l'heure de fermeture du chinois pendant le confinement?",
        choices: ["21:30", "22h", "22:30", "23h"],
        answer: "22:30"
    },
    {
        title: "Qu'est ce qu'il y avait d'écrit/gribouillé sur le poster de mon joueur préféré dans ma chambre à Montreal?",
        choices: ["/Dieu", "/Best", "/King", "/Idol"],
        answer: "/Dieu"
    },
        {
        title: "Sur quoi s'appelait-on quand tu étais en Inde?",
        choices: ["WhatsApp", "Messenger", "FaceTime","Skype"],
        answer: "Skype"
    },
    {
        title: "Quand as-tu compris que j'étais un mec ultra stylé?",
        choices: ["Jamais", "Pour qui il se prend", "Premier contact", "Quand j'ai vomi sur ton toit"],
        answer: "Premier contact"
    },
    {
        title: "Qu'est ce que l'on commandait au Vieux Saint-Laurent (le plus souvent)?",
        choices: ["moi: festin 4, toi: french toasts et smoothie strawberry banana", "moi: festin 3, toi: french toasts et smoothie raspberry banana", "moi: festin 4, toi: french toasts et smoothie raspberry banana", "moi: festin 3, toi: french toasts et smoothie strawberry banana"],
        answer: "moi: festin 4, toi: french toasts et smoothie raspberry banana"
    },
    {
        title: "Partie Sport: quel match avons-nous vu à Brooklyn?",
        choices: ["Brooklyn-Cleveland", "Brooklyn-Oklahoma", "Brooklyn-Detroit", "Brooklyn-Charlotte"],
        answer: "Brooklyn-Cleveland"
    },
    {
        title: "Qui était le coach de Impact Montreal quand nous sommes allés les voir?",
        choices: ["Lebron", "Zidane", "Nadal", "Henry"],
        answer: "Henry"
    },
    {
        title: "Où avions-nous retrouvé ton casque quand tu l'avais perdu à la gym?",
        choices: ["entre les pecs du mec avec les mollets fins", "sur la presse", "aux squats racks", "au bench press"],
        answer: "sur la presse"
    },
    {
        title: "Quelle série t'ai-je conseillée que tu as d'abord refusé de regarder avant de l'adorer?",
        choices: ["Lost", "The Office", "Dexter", "All of the Above"],
        answer: "All of the Above"
    },
    {
        title: "Qui est mon premier ami que tu as recontré?",
        choices: ["Emanuel", "Jean", "Henri", "Minh"],
        answer: "Jean"
    },
    {
        title: "Où m'as-tu dit tes seconds prénoms pour la première fois?",
        choices: ["Gertz, premier date", "Trottier building", "Chez toi sur pins", "Sushi Momo"],
        answer: "Trottier building"
    },
    {
        title: "Qui est ton/ta premier(e) ami(e) que j'ai recontré(e)?",
        choices: ["Léa", "Meghan", "Guillaume", "Georgia"],
        answer: "Léa"
    },
    {
        title: "En rentrant de Piknik la première fois qu'on y est allé, on a fait un pari. Qui l'a remporté?",
        choices: ["Personne", "Toi", "Moi"],
        answer: "Toi"
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
            createDiv.textContent = "Grrrrrr, pas bien ca bibi! La bonne réponse était:  " + questions[questionIndex].answer;
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