
function active(element) {

    if(element.getAttribute("data-active") !== "1") {
        element.setAttribute("data-active", "1");
    } else {
        element.setAttribute("data-active", "0");
    }
    
}


function clickEffect(element) {
    element.setAttribute("data-active", "1");
    setTimeout(() => {
        element.setAttribute("data-active", "0");
    }, 100);

}