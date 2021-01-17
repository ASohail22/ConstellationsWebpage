function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default
    var i, container, tabcontent;
    container = document.getElementsByClassName("container");
    for (i = 0; i < container.length; i++) {
        container[i].style.display = "none";
    }
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

// Show the specific tab content
document.getElementById(pageName).style.display = "grid";

// Add the specific color to the button used to open the tab content

}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


