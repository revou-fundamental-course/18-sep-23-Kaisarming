document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-btn").addEventListener("click", function() {
        let let_name = document.getElementById("nama").value
        let let_email = document.getElementById("email-address").value
        let let_interest = document.getElementById("interest").value

        if ((let_name !== "") && (let_email !== "")) {
            alert(`Nama: ${let_name}, Email: ${let_email}, Interest: ${let_interest}`)
        }
        else {
            alert("Please fill all the form!")
        }
    })
    
    document.getElementById("call-to-action-btn").addEventListener("click", function() {
        alert("You have pressed the call to action button!")
    }) 
})



