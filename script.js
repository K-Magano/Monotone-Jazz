// gallery
// 1. Declare variables at the TOP
let currentIndex = 0; 
const mainImg = document.getElementById('main-view');
const thumbs = document.querySelectorAll('.thumb');

// 2. Define the function
window.changeImage = function(element, index) {
  // Update the global index (subtract 1 because arrays start at 0)
  currentIndex = index - 1;
  
  // Update main image source
  if (mainImg) {
      mainImg.src = element.src;
  }

  // Update active styling
  thumbs.forEach(t => t.classList.remove('active'));
  element.classList.add('active');
};

// 3. Add Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('gallery-next');
    const prevBtn = document.getElementById('gallery-prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % thumbs.length;
            thumbs[currentIndex].click(); 
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
            thumbs[currentIndex].click(); 
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Optional: Animate burger to 'X'
        menu.classList.toggle('is-active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// News Modal

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('news-modal');
  const closeBtn = document.querySelector('.close-modal');

  // Find all read-more buttons
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', (e) => {
      //e.preventDefault(); // Stop page from jumping
      
      // Find the specific card this button belongs to
      const card = e.target.closest('.news-card');
      
      // Pull data from the card
      const title = card.querySelector('h3').innerText;
      const date = card.querySelector('.date').innerText;
      const imgSrc = card.querySelector('img').src;
      
      // Fake "Full Article" text (In a real app, you'd pull this from a database)
      const fullText = card.querySelector('p').innerText + 
                       " This is the extended version of the story. " + 
                       "The tour has been a massive success across North America!";

      // Inject data into modal
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-date').innerText = date;
      document.getElementById('modal-img').src = imgSrc;
      document.getElementById('modal-text').innerText = fullText;

      // Show modal
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent background scroll
    });
  });

  // Close logic
  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // Close if clicking outside the box
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };
});