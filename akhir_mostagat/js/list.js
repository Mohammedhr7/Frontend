dispoLink.addEventListener("click", function() {
    fetch("dispo.html")
        .then(response => response.text())
        .then(data => {
           
            var contentDiv = document.querySelector(".main-content");
            
            contentDiv.innerHTML = data;
            
        })
        .catch(error => {
            console.error('Erreur ', error);
        });
        });

ensglink.addEventListener("click", function() {
    fetch("module.html")
        .then(response => response.text())
        .then(data => {
           
            var contentDiv = document.querySelector(".main-content");
            
            contentDiv.innerHTML = data;
            
        })
        .catch(error => {
            console.error('Erreur ', error);
        });
        });

 homeLink.addEventListener("click", function() {
    fetch("index.html")
        .then(response => response.text())
        .then(data => {
           
            var contentDiv = document.querySelector(".main-content");
            
            contentDiv.innerHTML = data;
            
        })
        .catch(error => {
            console.error('Erreur l', error);
        });
        });
