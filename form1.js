const scriptURL = 'https://script.google.com/macros/s/AKfycbxPBBDfweHXd7Fp4ozULFBWKLx9SMB6wyJkCQtYHIIFmwCWQORCGFXowD6QCuDbzRVEPQ/exec'

const form = document.forms['form']

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(() => {
            Swal.fire({
                title: "Готово!",
                text: "Заявку успішно подано!",
                icon: "success",
                confirmButtonText: "На головну"
            }).then(() => {
                window.location.href = "index.html"; // зміни на свою головну сторінку
            });
        })
        .catch(() => {
            Swal.fire("Помилка", "Помилка на сервері", "error");
        });
});