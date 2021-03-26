


const submit = document.querySelector("#button") // make submit var and select id button
submit.addEventListener("click", function (e) { // make addeventlistener and  function if i click and refresh the page 
    e.preventDefault()
    const input = document.querySelector("#username").value //select id username 
    console.log("insde on click")
    const wellcome = document.querySelector("#wellcome")
    wellcome.innerHTML = "wellcome " + input  // if user type anything say wellcome and user input ***
})
// the end