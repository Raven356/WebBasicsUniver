function getUsersInfo(numberOfUsers) {
    if(numberOfUsers < 1){
        alert("Введене число менше 1");
        return;
    }
    const url = `https://randomuser.me/api/?results=${numberOfUsers}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const users = data.results;
        const userList = document.getElementById('userList');

        users.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.className = 'user';

          userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <p>Місто: ${user.location.city}</p>
            <p>Моб. телефон: ${user.cell}</p>
            <p>Країна: ${user.location.country}</p>
            <p>Email: ${user.email}</p>
          `;

          userList.appendChild(userDiv);
        });
      })
      .catch(error => console.error('Помилка:', error));
  }

  function calculate(){
    const list = document.getElementById('userList');
    list.innerHTML = '';
    const amount = document.getElementById('userCount');
    getUsersInfo(amount.value);
  }