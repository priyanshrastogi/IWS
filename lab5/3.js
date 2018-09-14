function getBooks() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var table = document.getElementById('table1');
            console.log(this.responseText);
            var books = JSON.parse(this.responseText);
            books.forEach(book => {
                var row = document.createElement('tr');
                var title = document.createElement('td');
                var author = document.createElement('td');
                var year = document.createElement('td');
                var ISBN = document.createElement('td');
                var popular = document.createElement('td');
                var countries = document.createElement('td');
                title.appendChild(document.createTextNode(book['title']));
                author.appendChild(document.createTextNode(book['author']));
                year.appendChild(document.createTextNode(book['year']));
                ISBN.appendChild(document.createTextNode(book['ISBN']));
                popular.appendChild(document.createTextNode(book['popular']));
                countries.appendChild(document.createTextNode(book['countries'].join(', ')));
                row.appendChild(title);
                row.appendChild(author);
                row.appendChild(year);
                row.appendChild(ISBN);
                row.appendChild(popular);
                row.appendChild(countries);
                table.appendChild(row);
            });
        }
    };
    xhttp.open("GET", "http://localhost:3000/book_info.json");
    xhttp.send(null);
}

function getSongs() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var table = document.getElementById('table2');
            var songs = JSON.parse(this.responseText);
            songs.forEach(book => {
                var row = document.createElement('tr');
                var name = document.createElement('td');
                var album = document.createElement('td');
                var singer = document.createElement('td');
                var year = document.createElement('td');
                name.appendChild(document.createTextNode(book['name']));
                album.appendChild(document.createTextNode(book['album']));
                singer.appendChild(document.createTextNode(book['singer']));
                year.appendChild(document.createTextNode(book['year']));
                row.appendChild(name);
                row.appendChild(album);
                row.appendChild(singer);
                row.appendChild(year);
                table.appendChild(row);
            });
        }
    };
    xhttp.open("GET", "http://localhost:3000/song_info.json");
    xhttp.send(null);
}