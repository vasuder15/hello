$(document).ready(function(){
    $(".toggle-btn").click(function() {
        const content = $(this).next(".toggle-content");  // Select the next sibling element with the class toggle-content

        content.slideToggle(300);  // Slide toggle effect for showing/hiding content

        // Toggle the + and - icon
        if ($(this).text().startsWith("+")) {
            $(this).text($(this).text().replace("+", "-"));
        } else {
            $(this).text($(this).text().replace("-", "+"));
        }
    });
});


$(document).ready(function(){
    $("#viewMore").click(function(){
        $(".extra-content").slideDown(); // Show the extra content with a slide-down effect
        $(this).hide(); // Hide the "View More" button
        $("#viewLess").show(); // Show the "View Less" button
    });

    $("#viewLess").click(function(){
        $(".extra-content").slideUp(); // Hide the extra content with a slide-up effect
        $(this).hide(); // Hide the "View Less" button
        $("#viewMore").show(); // Show the "View More" button
    });
});       

const toggleBtn = document.getElementById('show');
const toggleList = document.getElementById('toggle-list');

toggleBtn.addEventListener('click', () => {
  if (toggleList.style.display === 'none') {
    toggleList.style.display = 'block';
    toggleBtn.innerHTML = '-';
  } else {
    toggleList.style.display = 'none';
    toggleBtn.innerHTML = '+';
  }
});


