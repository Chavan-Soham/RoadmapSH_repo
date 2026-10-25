// createGreeting(firstName, lastName, timeOfDay) returns Good "greetings", First Name Last Name
// formatName(firstName, lastName) should return the first and last name as one string.
// getGreeting(timeOfDay) should return "Good morning", "Good afternoon", or "Good evening".

function createGreeting(firstName, lastName, timeOfDay) {
    let line = "";
    // format the first name and last name
    let formattedName = formatName(firstName.trim(), lastName.trim());
    if (typeof formattedName === "object") {
        console.log(`Error Message: ${formattedName.errorMessage}`);
        console.log(`Error Count: ${formattedName.errorCount}`);
        console.log(`----------- CHECK THE ACTUAL ERROR MESSAGE -----------`);
        for (let msgs of formattedName.actualErrorMessage) {
            console.log(msgs);
        }
    } else {
        // console.log(formattedName);
        line += `${formattedName.trim()}, `;
    }



    // get greetings
    let greetings = getGreeting(timeOfDay.trim())
    if (typeof greetings === "object") {
        console.log(`Error Message: ${greetings.message}`);
        console.log(`Error Count: ${greetings.errorCount}`);
        console.log(`----------- CHECK THE ACTUAL ERROR MESSAGE -----------`);
        for (let msgs of greetings.errorMessages) {
            console.log(msgs);
        }
    } else {
        // console.log(greetings);
        line += `${greetings}`
    }
    return line;

}

function formatName(firstName, lastName) {
    if ((typeof firstName === "string" && firstName !== null && firstName !== "") && (typeof lastName === "string" && lastName !== null && lastName !== "")) {
        return `${firstName} ${lastName}`;
    } else {
        let errorObject = {
            errorMessage: "Invalid Inputs",
            errorCount: 0,
            actualErrorMessage: [],
        }


        if (typeof firstName !== "string") {
            errorObject.errorCount++;
            errorObject.actualErrorMessage.push(`First name entered as ${firstName} is not a valid string.`);
        }

        if (typeof lastName !== "string") {
            errorObject.errorCount++;
            errorObject.actualErrorMessage.push(`Last name entered as ${lastName} is not a valid string.`);
        }

        if (firstName === null || firstName === "") {
            errorObject.errorCount++;
            errorObject.actualErrorMessage.push(`First Name cannot be null or empty string`);
        }

        if (lastName === null || lastName === "") {
            errorObject.errorCount++;
            errorObject.actualErrorMessage.push(`Last Name cannot be null or empty string`);
        }

        // console.log("Invalid Inputs")
        // console.log(`-------- CHECK YOUR INPUT AND ITS TYPES --------`)
        // console.log(`First Name entered: ${firstName}`)
        // console.log(`Type of first name: ${typeof firstName}`)
        // console.log(`Last Name entered: ${lastName}`)
        // console.log(`Type of last name: ${typeof lastName}`)
        // console.log(errorObject.actualErrorMessage);

        return errorObject;
    }

}

function getGreeting(timeOfDay) {
    let time_of_day;
    if (typeof timeOfDay === "string") {
        time_of_day = timeOfDay.toLowerCase();
    }
    let parts_of_day = ["morning", "afternoon", "evening", "night"];
    if (typeof time_of_day === "string" && time_of_day !== null && time_of_day !== "") {
        if (parts_of_day.includes(time_of_day) === true) return `Good ${time_of_day}`;
    } else {
        let errorObject = {
            message: "Invalid Input for mentioning time of day",
            errorCount: 0,
            errorMessages: [],
        };

        if (typeof time_of_day !== "string") {
            errorObject.errorCount++;
            errorObject.errorMessages.push(`Time of Day is not of type string. Its of type ${typeof time_of_day}`);
        }

        if (time_of_day == null || time_of_day === "") {
            errorObject.errorCount++;
            errorObject.errorMessages.push(`Time of Day cannot be null or an empty string`);
        }

        if (parts_of_day.includes(time_of_day) === false) {
            errorObject.errorCount++;
            errorObject.errorMessages.push(`Enter time/parts of the day like Morning, Evening, Night, Afternoon`);
        }
        return errorObject;

    }
}


// TEST
let name_greeting = createGreeting("Alice       ", "Borland ", "  morning       ");
console.log(name_greeting);