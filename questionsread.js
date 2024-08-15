const fs = require('fs');

function getQuestions(filename, callback) {

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            callback(err, null); // Pass the error to the callback
            return;
        }

        const lines = data.split('\n');
        const questions = [];
        let currentQuestion = '';

        lines.forEach((line, index) => {
            line = line.trim();

            if (line.startsWith('#Question')) {
                // If there's a current question being built, push it to the questions array
                if (currentQuestion !== '') {
                    questions.push(currentQuestion);
                }
                // Start a new question, but omit the '#Question' tag
                currentQuestion = '';
            } else if (line.startsWith('Question')) {
                // Start the question text after 'Question'
                currentQuestion += line;
            } else if (currentQuestion !== '') {
                // Append the next line(s) to the current question
                currentQuestion += ' ' + line;
            }

            // Push the last question after the loop ends
            if (index === lines.length - 1 && currentQuestion !== '') {
                questions.push(currentQuestion);
            }
        });

        if (questions.length === 0) {
            callback('No questions found in the file.', null);
        } else {
            // Join all the questions into a single string with two newlines as a separator
            const questionsString = questions.join('\n\n');
            callback(null, questionsString);
        }
    });
}


module.exports = getQuestions;

//test case
getQuestions('C:/Users/kunwi/Documents/questions.txt', (err, questionsString) => {
    if (err) {
        return(err);
    } else {
        console.log(questionsString)
        return(questionsString); // Output the stringng)
    }
});