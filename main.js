// Function to load the sidebar
function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            setActiveLink(); // Call the function to set the active link after loading
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// Function to set the active link
function setActiveLink() {
    const links = document.querySelectorAll('.sidebar nav ul li a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
}

// Call the function to load the sidebar
loadSidebar();
