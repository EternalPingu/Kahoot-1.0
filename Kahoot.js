( async function loadTools() {
    answer = function(){};
    await fetch("https://raw.githubusercontent.com/atacoiguess/Kahoot-1.0/main/EventTools.js").then((response) => response.text()).then((code) => eval(code));
    await fetch("https://raw.githubusercontent.com/atacoiguess/Kahoot-1.0/main/Uuid.js").then((response) => responst()).then((code) => eval(code));
    await fetch("https://raw.githubusercontent.com/atacoiguess/Kahoot-1.0/main/Events.js").then((response) => response.text()).then((resText) => eval(resText));


    console.clear();

    console.log("%c✅ Tools Loaded! ✅", "color: green; font-weight: 700; font-size: 1.25rem;");

})();


class Quiz {
    constructor(data, questions, answers, current_question, mode, points, range, skill) {
        this.skill = skill;
        this.range = range;
        this.points = points;
        this.data = data;
        this.questions = questions;
        this.answers = answers;
        this.current_question = current_question;
        this.mode = mode;
    }
}


async function quiz(url) {

    const data = await fetch(url).then((response) => response.json());

    const questions = await data.questions;

    const answers = new Array();

    questions.forEach(item => {

        var arrayItem = {

            correct : new Array(),

            type : "unset"

        };

        item.choices.forEach(choice => {

            choice.correct != true || arrayItem.correct.push(item.choices.indexOf(choice));

        });

        arrayItem.type = item.type;

        answers.push(arrayItem);

    });

    await fetch("https://raw.githubusercontent.com/atacoiguess/Kahoot-1.0/main/Logging.js").then((response) => response.text()).then((resText) => eval(resText));
    
    modes = ["auto","outline","hide","del","exact","random","skill"];

    kahoot = new Quiz(data,questions,answers,0,"auto",1000,200,1);

}

