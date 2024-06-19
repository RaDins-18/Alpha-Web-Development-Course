// 4. The Password Validator:
// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
        
function passwordValidator(pass) {
    if (pass.length >= 8) {
        for (const chr of pass) {
            if (!isNaN(chr) && chr != " "){
                for (const chr of pass) {
                    if (chr == chr.toUpperCase() && isNaN(chr)) {
                        for (const chr of pass) {
                            if (chr == chr.toLowerCase()  && isNaN(chr)){
                                return "Your password is valid."
                            }
                        }
                        return "Password does not contain lower case characters.";
                    }
                }
                return "Password does not contain upper case characters.";
            }
        }
        return "Password does not contain a number.";
    } else {
        return "Password does not contain 8 characters.";
    }
}

let password = "i aM TeSting MY paSsWord 1st timE!";
console.log(passwordValidator(password));