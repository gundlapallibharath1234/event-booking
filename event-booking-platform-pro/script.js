let currentEvent='';
let bookings=JSON.parse(localStorage.getItem('bookings'))||[];

function openForm(eventName){
currentEvent=eventName;
document.getElementById('bookingForm').style.display='block';
}

function confirmBooking(){
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let phone=document.getElementById('phone').value;

if(!name||!email||!phone){alert('Fill all fields');return;}

bookings.push({event:currentEvent,name,email,phone});
localStorage.setItem('bookings',JSON.stringify(bookings));
document.getElementById('bookingForm').style.display='none';
renderBookings();
alert('Booking Confirmed!');
}

function renderBookings(){
let list=document.getElementById('bookingList');
list.innerHTML='';
bookings.forEach(b=>{
let li=document.createElement('li');
li.textContent=`${b.event} - ${b.name}`;
list.appendChild(li);
});
}

function filterEvents(){
let q=document.getElementById('search').value.toLowerCase();
document.querySelectorAll('.event-card').forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(q)?'block':'none';
});
}

renderBookings();