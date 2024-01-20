var particles = Particles.init({
  selector: ".background",
  color: ["#f0f0f0", "#dcdcdc", "#b0b0b0"], // Set minimalistic colors
  connectParticles: true,
  sizeVariations: 3,
  maxParticles: 170,

  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#333", "#555", "#777", "#999"],
        maxParticles: 70,
        connectParticles: true,
      },
    },
  ],
});

Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

// JavaScript to get and display the current date
function updateDate() {
  var now = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("date").innerHTML =
    months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
}

// Call the function to initially set the date
updateDate();

// Update the date every second (optional, you can adjust the interval)
setInterval(updateDate, 1000);
