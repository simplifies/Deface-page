document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 73 || 
         e.keyCode === 74 || 
         e.keyCode === 77 || 
         e.keyCode === 65 || 
         e.keyCode === 67 || 
         e.keyCode === 83 || 
         e.keyCode === 85)) {
        return false;
    } else {
        return true;
    }
};
//Stop right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

