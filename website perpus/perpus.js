document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = {
        title,
        author,
        isbn
    };

    addBookToList(book);
    clearFields();
});

function addBookToList(book) {
    const list = document.getElementById('books');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button class="delete">Hapus</button></td>
    `;

    list.appendChild(row);

    row.querySelector('.delete').addEventListener('click', function() {
        list.removeChild(row);
    });
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}