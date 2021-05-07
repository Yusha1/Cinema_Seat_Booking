const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.reserved)');  // Grabs seats in row not occupied.
let count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value);

// Update count and total
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');  // Grabs only selected seats
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;   
    total.innerText = ticketPrice * selectedSeatsCount; 
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = Number(e.target.value);
    updateSelectedCount();
})


// Seat select event.
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})