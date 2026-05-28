const dummyVenues = [
  {
    id: 1,
    name: "Padel un Terra Simulator",
    category: "Padel",
    location: "Jakarta Selatan",
    rating: 5.0,
    desc: "Indoor Court Premium",
    price: 62000,
    image: "Gambar/padel1.jpg",
    color: "danger",
  },
  {
    id: 2,
    name: "Space Padel ITC Fatmawati",
    category: "Padel",
    location: "Jakarta Selatan",
    rating: 4.7,
    desc: "Ramadan Special Deals",
    price: 175000,
    image: "Gambar/padel2.jpg",
    color: "primary",
  },
  {
    id: 3,
    name: "Urban Padel Arena",
    category: "Padel",
    location: "Bintaro",
    rating: 4.8,
    desc: "Full AC Court",
    price: 150000,
    image: "Gambar/padel3.jpg",
    color: "success",
  },
  {
    id: 4,
    name: "Champion Futsal",
    category: "Futsal",
    location: "Kelapa Gading",
    rating: 4.6,
    desc: "Sintetis Premium",
    price: 120000,
    image: "Gambar/futsal1.jpg",
    color: "warning",
  },
  {
    id: 5,
    name: "Galaxy Badminton Hall",
    category: "Badminton",
    location: "Tangerang",
    rating: 4.9,
    desc: "Court International",
    price: 90000,
    image: "Gambar/badminton1.jpg",
    color: "info",
  },
  {
    id: 6,
    name: "Victory Tennis Club",
    category: "Tennis",
    location: "Jakarta Barat",
    rating: 4.5,
    desc: "Outdoor Tennis Court",
    price: 200000,
    image: "Gambar/tennis1.jpg",
    color: "dark",
  },
  {
    id: 7,
    name: "Mega Sport Arena",
    category: "Basket",
    location: "Jakarta Timur",
    rating: 4.8,
    desc: "Lapangan Vinyl",
    price: 180000,
    image: "Gambar/basket1.jpg",
    color: "primary",
  },
  {
    id: 8,
    name: "Elite Padel Center",
    category: "Padel",
    location: "BSD",
    rating: 4.9,
    desc: "New Venue",
    price: 210000,
    image: "Gambar/padel4.jpg",
    color: "danger",
  },
  {
    id: 9,
    name: "Arena Mini Soccer",
    category: "Mini Soccer",
    location: "Sunter",
    rating: 4.7,
    desc: "Rumput Hybrid",
    price: 250000,
    image: "Gambar/minisoccer1.jpg",
    color: "success",
  },
  {
    id: 10,
    name: "Power Gym Court",
    category: "Basket",
    location: "Bekasi",
    rating: 4.6,
    desc: "Indoor Arena",
    price: 160000,
    image: "Gambar/basket2.jpg",
    color: "warning",
  },
  {
    id: 11,
    name: "Legend Futsal Arena",
    category: "Futsal",
    location: "Jakarta Utara",
    rating: 4.8,
    desc: "VIP Court",
    price: 140000,
    image: "Gambar/futsal2.jpg",
    color: "primary",
  },
  {
    id: 12,
    name: "Smash Badminton Center",
    category: "Badminton",
    location: "Meruya",
    rating: 4.9,
    desc: "Professional Lighting",
    price: 95000,
    image: "Gambar/badminton2.jpg",
    color: "success",
  },
  {
    id: 13,
    name: "Ace Tennis Arena",
    category: "Tennis",
    location: "Serpong",
    rating: 4.7,
    desc: "Clay Court",
    price: 220000,
    image: "Gambar/tennis2.jpg",
    color: "danger",
  },
  {
    id: 14,
    name: "Sky Padel Club",
    category: "Padel",
    location: "PIK",
    rating: 5.0,
    desc: "Luxury Indoor Court",
    price: 300000,
    image: "Gambar/padel5.jpg",
    color: "dark",
  },
  {
    id: 15,
    name: "SportHub Arena",
    category: "Badminton",
    location: "Kota Tangerang",
    rating: 4.8,
    desc: "New Court",
    price: 100000,
    image: "Gambar/sporthub.jpg",
    color: "secondary",
  },
  {
    id: 16,
    name: "Prime Futsal Arena",
    category: "Futsal",
    location: "BSD",
    rating: 4.7,
    desc: "Indoor Rumput Sintetis",
    price: 130000,
    image: "Gambar/futsal3.jpg",
    color: "warning",
  },
  {
    id: 17,
    name: "Victory Basket Hall",
    category: "Basket",
    location: "Jakarta Selatan",
    rating: 4.9,
    desc: "Lapangan Basket Premium",
    price: 170000,
    image: "Gambar/basket3.jpg",
    color: "primary",
  },
  {
    id: 18,
    name: "Champion Badminton Club",
    category: "Badminton",
    location: "Serpong",
    rating: 4.8,
    desc: "Court Dengan Lampu LED",
    price: 98000,
    image: "Gambar/badminton3.jpg",
    color: "success",
  },
  {
    id: 19,
    name: "Grand Tennis Center",
    category: "Tennis",
    location: "Puri",
    rating: 4.6,
    desc: "Outdoor Hard Court",
    price: 210000,
    image: "Gambar/tennis3.jpg",
    color: "danger",
  },
  {
    id: 20,
    name: "Padel Pro Arena",
    category: "Padel",
    location: "Kebon Jeruk",
    rating: 5.0,
    desc: "Court Baru Premium",
    price: 240000,
    image: "Gambar/padel6.jpg",
    color: "dark",
  },
];

localStorage.setItem("venues", JSON.stringify(dummyVenues));

const venues = JSON.parse(localStorage.getItem("venues"));
let selectedPrice = 0;

// HOME

const venueList = document.getElementById("venueList");

function renderVenues(category = "All") {
  if (!venueList) return;

  venueList.innerHTML = "";

  const filtered =
    category === "All"
      ? venues
      : venues.filter((venue) => venue.category === category);

  filtered.forEach((venue) => {
    venueList.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow border-0 rounded-4 overflow-hidden">

          <img
            src="${venue.image}"
            class="card-img-top"
            style="height:250px; object-fit:cover;"
          >

          <div class="card-body">

            <span class="badge bg-${venue.color}">
              ⭐ ${venue.rating}
            </span>

            <h4 class="fw-bold mt-3">${venue.name}</h4>

            <p class="text-muted">
              📍 ${venue.location} • ${venue.category}
            </p>

            <p>${venue.desc}</p>

            <h5 class="fw-bold">
              Rp${venue.price.toLocaleString("id-ID")}
            </h5>

            <button
              class="btn btn-dark w-100 mt-3"
              onclick="openBookingModal('${venue.name}', ${venue.price})"
            >
              Booking Sekarang
            </button>

          </div>
        </div>
      </div>
    `;
  });
}

if (venueList) {
  renderVenues();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));

      this.classList.add("active");

      renderVenues(this.dataset.category);
    });
  });
}

// BOOKING POP UP

window.openBookingModal = function (name, price) {
  selectedPrice = price;

  document.getElementById("venueName").value = name;

  document.getElementById("totalPrice").value = `Rp${price.toLocaleString(
    "id-ID"
  )}`;

  const modal = new bootstrap.Modal(document.getElementById("bookingModal"));

  modal.show();
};

const durationInput = document.getElementById("duration");

if (durationInput) {
  durationInput.addEventListener("change", function () {
    const total = selectedPrice * parseInt(this.value);

    document.getElementById("totalPrice").value = `Rp${total.toLocaleString(
      "id-ID"
    )}`;
  });
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      venue: document.getElementById("venueName").value,
      customer: document.getElementById("customerName").value,
      date: document.getElementById("bookingDate").value,
      time: document.getElementById("bookingTime").value,
      duration: document.getElementById("duration").value,
      total: document.getElementById("totalPrice").value,
    };

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(bookingData);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("Booking berhasil!");

    // tutup pop up
    bootstrap.Modal.getInstance(
      document.getElementById("bookingModal")
    ).hide();

    // reset form
    document.getElementById("bookingForm").reset();

    document.getElementById("totalPrice").value = "";
  });
}

// BOOKING HISTORY

const historyList = document.getElementById("historyList");

if (historyList) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  function renderBookings() {
    historyList.innerHTML = "";

    if (bookings.length === 0) {
      historyList.innerHTML = `
        <div class="col-12">
          <div class="alert alert-secondary text-center">
            Belum ada booking
          </div>
        </div>
      `;
      return;
    }

    bookings.forEach((booking, index) => {
      historyList.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 rounded-4 h-100">

            <div class="card-body">

              <h4 class="fw-bold">
                ${booking.venue}
              </h4>

              <p>👤 ${booking.customer}</p>

              <p>📅 ${booking.date}</p>

              <p>⏰ ${booking.time}</p>

              <p>🕒 ${booking.duration} Jam</p>

              <h5 class="fw-bold">
                ${booking.total}
              </h5>

              <div class="d-flex gap-2">

                <button
                  class="btn btn-warning w-50"
                  onclick="editBooking(${index})"
                >
                  Edit
                </button>

                <button
                  class="btn btn-danger w-50"
                  onclick="deleteBooking(${index})"
                >
                  Cancel Booking
                </button>

              </div>

            </div>
          </div>
        </div>
      `;
    });
  }

  window.deleteBooking = function (index) {
    bookings.splice(index, 1);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    renderBookings();
  };

  window.editBooking = function (index) {
    const booking = bookings[index];

    document.getElementById("editIndex").value = index;
    document.getElementById("editCustomer").value = booking.customer;
    document.getElementById("editDate").value = booking.date;
    document.getElementById("editTime").value = booking.time;

    const modal = new bootstrap.Modal(document.getElementById("editModal"));

    modal.show();
  };

  const editForm = document.getElementById("editForm");

  if (editForm) {
    editForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const index = document.getElementById("editIndex").value;

      bookings[index].customer = document.getElementById("editCustomer").value;

      bookings[index].date = document.getElementById("editDate").value;

      bookings[index].time = document.getElementById("editTime").value;

      localStorage.setItem("bookings", JSON.stringify(bookings));

      bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();

      renderBookings();
    });
  }

  renderBookings();
}
