//---------------------------Navbar functionality---------------//
window.addEventListener('scroll',function(){
    const navbar=document.querySelector('.navbar');
    navbar.classList.toggle("sticky",window.scrollY>50);
});
//---------------------------workout planner functionality--------//
function addWorkout() {
    var name = document.getElementById("workout-name").value;
    var time = document.getElementById("workout-time").value;

    if (name === "" || time === "") {
        alert(`Please enter both workout name and duration.`);
        return;
    }

    var workoutList = document.getElementById("workout-list");

    var workoutItem = document.createElement("div");
    workoutItem.className = "workout-item";
    workoutItem.innerHTML = `
        <span>${name} - ${time} min</span>
        <button onclick="removeWorkout(this)">Remove</button>
    `;

    workoutList.appendChild(workoutItem);

    // Clear input fields
    document.getElementById("workout-name").value = "";
    document.getElementById("workout-time").value = "";
}

function removeWorkout(button) {
    var workoutItem = button.parentNode;
    workoutItem.parentNode.removeChild(workoutItem);
}
//    ===============trainer booking============   //
document.getElementById('bookButton').addEventListener('click', function() {
    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var trainerName = document.getElementById('trainerName').value.trim();
  
    
    if (name !== '' && email !== '' && trainerName !== '') {
      alert('Trainer booked successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nTrainer: ' + trainerName);
    } else {
      alert('Please fill out all fields before booking.');
    }
  });
  

//contact form functionality---------//
document.getElementById('contactForm').addEventListener('submit', function(event) {
     event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
  
    
    if (name !== '' && email !== '' && message !== '') {
      alert('Thank you for reaching out!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
      document.getElementById('contactForm').reset();
    } else {
      alert('Thank you for reaching us,your respond recorded successfully.');
    }
  });
  



  
