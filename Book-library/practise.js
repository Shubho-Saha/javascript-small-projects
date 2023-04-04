console.log('This is for practise purpose.');

const payment = true;
const marks = 70;

function enroll(callback) {
    console.log("Course enrollment is in progress...");

    setTimeout(function(){
        if (payment) {
            callback();
        } else {
            console("Your payment failed.")
        }
    }, 3000);
}

function progress(callback) {
    console.log("You are progressing in your course...");

    setTimeout(() => {
        if (marks >= 70) {
            callback();
        } else {
            console.log("Sorry, You couln't pass the course.");
        }
    }, 6000);
}

function certificate() {
    console.log("Congrats! You've received your javascript certificate");
}


enroll(function(){
    progress(certificate);
})

console.log("This is book library Project");