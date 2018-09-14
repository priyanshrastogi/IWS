(function () {
    var div = document.getElementById("d01");
    var p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("I am normal"));
    div.appendChild(p1);
    var p2 = document.createElement("p");
    p2.appendChild(document.createTextNode("I am blue"));
    p2.style.color = "blue";
    div.appendChild(p2);
    var p3 = document.createElement("p");
    p3.appendChild(document.createTextNode("I am big"));
    p3.style.fontSize = "50px";
    div.appendChild(p3);
    var a = document.createElement("a");
    a.appendChild(document.createTextNode("Visit our HTML tutorial"));
    a.setAttribute("href", "https://www.w3schools.com/html/");
    div.appendChild(a);
    var img = document.createElement("img");
    img.setAttribute("src", "https://cdn.pixabay.com/photo/2016/07/23/23/02/lavender-1537694_960_720.jpg");
    img.setAttribute("alt", "Flower and Bee");
    img.style.display = 'block';
    img.style.height = '300px';
    img.style.marginTop = '50px';
    div.appendChild(img);
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete Image Element"));
    btn.style.marginTop = "50px";
    btn.setAttribute("onclick", "deleteImg()");
    div.appendChild(btn);
    setTimeout(function () {
        p2.style.color = "yellow";
        p2.innerHTML = "I am yellow";
        a.setAttribute("href", "https://www.tutorialspoint.com/json/");
        a.innerHTML = "Visit our JSON Tutorial.";
    }, 2000);
})();

function deleteImg() {
    document.getElementById("d01").removeChild(Array.from(document.getElementsByTagName("img"))[0]);
    document.getElementById("d01").removeChild(Array.from(document.getElementsByTagName("button"))[0]);
}