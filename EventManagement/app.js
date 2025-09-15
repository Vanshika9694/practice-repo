// const MyForm = document.querySelector("form")

// // Listen to the submit event on the form

// MyForm.addEventListener("submit", function(data){
//     data.preventDefault()
//     // This function executes as soon as we submit the form
//     // Write the logic to collect 5 details
    
//     const fetchedEventID = data.target[0].value
//     const fetchedEventName = data.target[1].value
//     const fetchedCustomerName = data.target[2].value
//     const fetchedCustomerAge = data.target[3].value
//     const fetchedCustomerEmail = data.target[4].value

//     // connect to API Gateway

//     fetch("https://v0v85pb2i4.execute-api.ap-south-1.amazonaws.com/develeopment/register", {
//         method: "POST",
//          headers: {
//             "Content-Type": "application/json"  // ✅ Correct header
//         },
//         body: { "eid": Number(fetchedEventID), "ename": fetchedEventName, "cname": fetchedCustomerName,
//             "cage": Number(fetchedCustomerAge), "cemail": fetchedCustomerEmail
//           }
        
//     })


// })




const MyForm = document.querySelector("form");

MyForm.addEventListener("submit", function(data) {
    data.preventDefault();

    const fetchedEventID = data.target[0].value;
    const fetchedEventName = data.target[1].value;
    const fetchedCustomerName = data.target[2].value;
    const fetchedCustomerAge = data.target[3].value;
    const fetchedCustomerEmail = data.target[4].value;

    fetch("https://r6uftpytye.execute-api.ap-south-1.amazonaws.com/develeopment/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // ✅ Correct header
        },
        body: JSON.stringify({  // ✅ Convert JS object to JSON string
            eid: Number(fetchedEventID),
            ename: fetchedEventName,
            cname: fetchedCustomerName,
            cage: Number(fetchedCustomerAge),
            cemail: fetchedCustomerEmail
        })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
});
