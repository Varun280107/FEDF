function loadPage(page) {
  const content = document.getElementById('content');

  if (page === 'home') {
    content.innerHTML = "<h1>Welcome to the Home Page</h1>";
  } else if (page === 'about') {
    content.innerHTML = "<h1>About Us</h1><p>This is a single page application using Node.js!</p>";
  } else if (page === 'contact') {
    content.innerHTML = "<h1>Contact Us</h1><p>Email: example@gmail.com</p>";
  }
}
