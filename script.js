function confirmAndAlert() {
    let userResponse = confirm("Do you want to proceed?");
    
    if (userResponse) {
        alert("You clicked OK. Proceeding...");
    } else {
        alert("You clicked Cancel. Exiting...");
    }
}