//Colin contributed to this project by helping me to figure out where I was not understanding my code. 

// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")



// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function () {

    let whatCurrentText = findInput.value
    console.log(whatCurrentText)


    let futureIngoingText = replaceInput.value
    console.log(futureIngoingText)


    for (let index = 0; rowElements.length > index; index++) {
       

        

            let cellElementsArray = getCellElements (rowElements[index])

            for (let index = 0; index < cellElementsArray.length; index++) {
        let findingString=cellElementsArray[index]
        while ( findingString.innerHTML.includes (whatCurrentText)){
            findingString.innerHTML=findingString.innerHTML.replace(whatCurrentText,futureIngoingText)
        }
            }

        
        

        


  

            
            
            
            
        

    }



    
 

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
})
