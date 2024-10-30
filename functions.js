document.addEventListener("DOMContentLoaded", function() {
    const categoryTabs = document.querySelectorAll(".category");
    const skillBoxes = document.querySelectorAll(".skill-box");
  
    categoryTabs.forEach(tab => {
      tab.addEventListener("click", function() {
        // Remove active class from all tabs
        categoryTabs.forEach(t => t.classList.remove("active"));
        // Add active class to the clicked tab
        this.classList.add("active");
  
        // Get the selected category
        const selectedCategory = this.getAttribute("data-category");
  
        // Show or hide skill boxes based on the selected category
        skillBoxes.forEach(box => {
          if (box.getAttribute("data-category") === selectedCategory) {
            box.style.display = "flex"; // Show matching skill boxes
          } else {
            box.style.display = "none"; // Hide non-matching skill boxes
          }
        });
      });
    });
  });

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
  }
  
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }

  document.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup-modal');
  
    popups.forEach(popupModal => {
      const popupContent = popupModal.querySelector('.popup-content');
  
      if (popupModal.style.display === 'flex' && !popupContent.contains(event.target) && popupModal.contains(event.target)) {
        popupModal.style.display = 'none'; 
      }
    });
  });
  