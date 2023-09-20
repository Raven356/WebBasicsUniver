document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const pibInput = form.querySelector('#pib');
        const groupInput = form.querySelector('#group');
        const phoneInput = form.querySelector('#phone');
        const idCardInput = form.querySelector('#idCard');
        const facultyInput = form.querySelector('#faculty');

        const pib = pibInput.value;
        const group = groupInput.value;
        const phone = phoneInput.value;
        const idCard = idCardInput.value;
        const faculty = facultyInput.value;

        const pibPattern = /^[А-ЯІЇЄҐа-яіїєґ\s.'-]{1,20}\s?[А-ЯІЇЄҐа-яіїєґ]?[.]$/i;
        const groupPattern = /^[А-ЯІЇЄҐа-яіїєґ\s.'-]{1,2}-\d{2}$/i;
        const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
        const idCardPattern = /^№\d{6}$/i;
        const facultyPattern = /^[А-Яа-яІіЇїЄєҐґ]{4}$/;

        function displayResult(message, isValid) {
            if (isValid) {
                alert(message);
            } else {
                alert('Помилка: ' + message);
            }
        }

        const isPibValid = pibPattern.test(pib);
        const isGroupValid = groupPattern.test(group);
        const isPhoneValid = phonePattern.test(phone);
        const isIdCardValid = idCardPattern.test(idCard);
        const isFacultyValid = facultyPattern.test(faculty);

        pibInput.style.borderColor = isPibValid ? 'initial' : 'red';
        groupInput.style.borderColor = isGroupValid ? 'initial' : 'red';
        phoneInput.style.borderColor = isPhoneValid ? 'initial' : 'red';
        idCardInput.style.borderColor = isIdCardValid ? 'initial' : 'red';
        facultyInput.style.borderColor = isFacultyValid ? 'initial' : 'red';

        pibInput.style.backgroundColor = isPibValid ? 'initial' : '#FFCCCC';
        groupInput.style.backgroundColor = isGroupValid ? 'initial' : '#FFCCCC';
        phoneInput.style.backgroundColor = isPhoneValid ? 'initial' : '#FFCCCC';
        idCardInput.style.backgroundColor = isIdCardValid ? 'initial' : '#FFCCCC';
        facultyInput.style.backgroundColor = isFacultyValid ? 'initial' : '#FFCCCC';

        if (isPibValid && isGroupValid && isPhoneValid && isIdCardValid && isFacultyValid) {
            const userInfo = `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, Helvetica, sans-serif;
                            font-size: 16px;
                            color: white;
                            text-align: center;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            width: 240px;
                            margin: 20px auto;
                            padding: 20px;
                            background-color: #107FE6;
                        }
                        h2{
                            font-size: 20px;
                            font-weight: bold;
                            margin-bottom: 10px;
                        }
                        .data {
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Введені дані:</h2>
                        <div class="data">
                            <label class="label">ПІБ:</label> ${pib}
                        </div>
                        <div class="data">
                            <label class="label">Група:</label> ${group}
                        </div>
                        <div class="data">
                            <label class="label">Телефон:</label> ${phone}
                        </div>
                        <div class="data">
                            <label class="label">ID-card:</label> ${idCard}
                        </div>
                        <div class="data">
                            <label class="label">Факультет:</label> ${faculty}
                        </div>
                    </div>
                </body>
                </html>
            `;
            const userInfoWindow = window.open('', '_blank');
            userInfoWindow.document.write(userInfo);
        }
    });
});
