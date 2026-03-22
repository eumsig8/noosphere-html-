const scriptURL = 'https://script.google.com/macros/s/AKfycbwRljdH5qsJeIeLz4x9Dn5t-qf-d0wmAz2lT5m7V8aD69xCuhI8iBXUKVRiUypO9nr7Jg/exec'

const form = document.forms['form2']

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