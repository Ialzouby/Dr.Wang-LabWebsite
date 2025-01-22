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
    const links = document.querySelectorAll('.sidebar-container nav ul li a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-container');
    sidebar.classList.toggle('open');
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};



// Call the function to load the sidebar
loadSidebar();
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.collapsible-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.parentNode.nextElementSibling;
        if (content.classList.contains('collapsed')) {
          content.classList.remove('collapsed');
        } else {
          content.classList.add('collapsed');
        }
      });
    });
  });
  