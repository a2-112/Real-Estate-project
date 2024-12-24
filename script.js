let currentDot = 0;
const dots = document.querySelectorAll('.dot');
const links = [
  '../index.html', // Replace with your desired page URL
  '/Link-1/link1.html',
  '/Link-2/link2.html',
  '/Link-3/custom.html'
];

function activateDot(index) {
  dots.forEach((dot, i) => {
    // dot.classList.toggle('active', i === index);

    // Add click event to each dot
    dot.onclick = () => {
      window.location.href = links[i]; // Redirect to the corresponding page
    };
  });
}

// Automatically switch active dot every 3 seconds
setInterval(() => {
  currentDot = (currentDot + 1) % dots.length;
  activateDot(currentDot);
}, 3000);

// Initialize the first dot with the link functionality
activateDot(currentDot);
