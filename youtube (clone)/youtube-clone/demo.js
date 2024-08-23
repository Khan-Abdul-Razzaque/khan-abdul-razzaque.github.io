//* Function to convert a message from string to Binary form
const convertToBinary = string => {
    return string.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0')
    }).join('')
}

//* Function to convert a message from Binary form to String
const convertToString = binary => {
    //! This method works when each charecter of the binary form string is saparated with " " (a white Space).
    if (binary.includes(' ')) {
        return binary.split(' ').map(binChar => {
            return String.fromCharCode(parseInt(binChar, 2))
        }).join('')
    }

    //! This method works when each charecter of the binary form string is not saparated with " " (a white Space).
    else {
        let stringForm = [];
        for (let i = 0; i < binary.length; i += 8) {
            const char = String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
            stringForm.push(char)
        }
        return stringForm.join('')
    }
}
//! >>========================<<=||=>>========================<<=||=>>========================<< !//


let message = `Binary`;

// Call the function {{ convertToBinary }} to convert the message into Binary form.
const binaryForm = convertToBinary(message);
console.log(`Binary form of {{ ${message} }} is ${binaryForm}`)
console.log(binaryForm.length)
console.log(message.length)

// Call the function {{ converttoString }} to convert the message into string.
const stringForm = convertToString(binaryForm);