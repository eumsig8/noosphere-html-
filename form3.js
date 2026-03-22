const scriptURL = 'https://script.google.com/macros/s/AKfycbzUdc7GPIIcJvaU1wFbCBuRtkzfDI5n7cGC-aH8IADaHZ17GiEK0Xvo_Czq8VVK4aIq9g/exec'

const form = document.forms['form3']

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