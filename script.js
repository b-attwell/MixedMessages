// Create a function to generate a random number
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

// Create object containing message arrays
const gymMessages = {
  whichLift: ['squat', 'bench', 'deadlift', 'ohp'],
  motivation: ['it\'s going to be tough!', 'you can do this!', 'good luck', 'EASY!!', 'you\'ve got this'],
  advice: ['remember to brace', 'concentrate', 'think about your training', 'stay tight']
}

// Create object to store messages
let gymArray = []

// Iterate through properties in gymMessages object, picking a random index from property arrays
for(let element in gymMessages) {
  let optionIdx = generateRandomNumber(gymMessages[element].length)

  // Depending on property, add to gymMessages array
  switch(element) {
    case 'whichLift':
      gymArray.push(`You are going to: "${gymMessages[element][optionIdx]}".`)
      break
    case 'motivation':
      gymArray.push(`Get "${gymMessages[element][optionIdx]}".`)
      break
    case 'advice':
      gymArray.push(`You should: "${gymMessages[element][optionIdx]}".`)
      break
    default:
      gymArray.push('There is not enough info.')
  }
}

// Function makes sure each message starts on a new line
function formatMessage(messageArray) {
  const formatted = gymArray.join('\n')
  console.log(formatted)
}

// Call function with gymArray as argument
formatMessage(gymArray);