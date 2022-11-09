function answer() {
    var mode = kahoot.mode;
    var correctBlocks = new Array();

    kahoot.answers[kahoot.current_question].correct.forEach(arrayItem => {
        correctBlocks.push(document.querySelector("[data-functional-selector='answer-" + arrayItem + "']"));
    })


    function auto(blocks) {
        var correct_answers = blocks;
        correct_answers.forEach(answer => {
            answer.click();
        });
    };
    
    function outline(blocks) {
        var correct_answers = blocks;
        correct_answers.forEach(answer => {
            answer.style.border = "3px solid lime";
        });
    };
    
    function hide(blocks) {
        var parent = blocks[0].parentElement;
        Array.from(parent.children).forEach(child => {
            child.addEventListener("mousedown", intercept);
            function intercept() {
                var correct_answers = blocks;
                correct_answers.forEach(answer => {
                    answer.click();
                    correct_answers.shift();
                });
            };
        });
    };
    
    function del(blocks) {
        var parent = blocks[0].parentElement;
        var correct_answers = blocks;
        var wrong_answers = new Array();
        Array.from(parent.children).forEach(child => {
            correct_answers.includes(child) == true || wrong_answers.push(child);
        });
        wrong_answers.forEach(wrong_answer => {
            wrong_answer.remove();
        });
    };

    function exact(blocks) {
        var points = kahoot.points;
        var question = kahoot.questions[kahoot.current_question];
        var multipler = question.pointsMultiplier;
        var time = question.time / 1000;
        var delay = (1-points/(1000*multipler))*2*time*1000;
        setTimeout(function() {
            var correct_answers = blocks;
            correct_answers.forEach(answer => {
                answer.click();
            });
        },delay+30);
    }

    function rand(blocks) {
        var points = kahoot.points - Math.floor(Math.random() * kahoot.range);
        var question = kahoot.questions[kahoot.current_question];
        var multipler = question.pointsMultiplier;
        var time = question.time / 1000;
        var delay = (1-points/(1000*multipler))*2*time*1000;
        setTimeout(function() {
            var correct_answers = blocks;
            correct_answers.forEach(answer => {
                answer.click();
            });
        },delay+30);
    };

    function randMin(num) {
        kahoot.range = 1000 - num;
    }

    function exactNum(num) {
        kahoot.points = num;
    }

    function skill(blocks) {
        var skill = [12500, 6450, 3000, 1750]
        var skillLevel = kahoot.skill;
        setTimeout(function() {
            var correct_answers = blocks;
            correct_answers.forEach(answer => {
                answer.click();
            });
        },delay+30);
    };
    mode == "auto" ? auto(correctBlocks) : mode == "outline" ? outline(correctBlocks) : mode == "hide" ? hide(correctBlocks) : mode == "del" ? del(correctBlocks) : mode == "exact" ? exact(correctBlocks) : mode == "rand" ? rand(correctBlocks) : "skill";
}

window.addEventListener("QuestionStart",answer);

function checkname(event) {
  console.log(event.detail.PlayerName) 
}

window.addEventListener("QuizJoin",checkname);
