const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.reserved)');  // Grabs seats in row not occupied.
let count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value);

// Save selected Movie index and price
function setMovieData(movieIndex, priceIndex) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', priceIndex);
}


// Update count and total
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');  // Grabs only selected seats.

    const seatIndex = [...selectedSeats].map(function(seat) {  //Grabs selected seats, loops through all seats and return selected seats index.
        return [...seats].indexOf(seat)
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));  // Converts selected seats index into string and stores in local storage.


    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;   
    total.innerText = ticketPrice * selectedSeatsCount; 
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = Number(e.target.value);
    // console.log(e.target.selectedIndex, e.target.value);  //Shows the selected movie index and price.
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


// Seat select event.
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})