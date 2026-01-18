


let work = [
  {
    price: "Нужно сделать Дизайн сайта по тематике авто",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem doloremque, <br> dolores vitae magnam blanditiis, temporibus neque culpa nesciunt voluptas vero, molestias <br> aut illo inventore recusandae cumque. Asperiores, consequuntur doloremque.",
    budjet: "Бюджет: 50 000 тенге",
    minut: "4 часа 28 минут назад",
    boxcha: "Прием ставок",
  },
  {
    price: "Нужно сделать Дизайн сайта по тематике авто",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem doloremque, <br> dolores vitae magnam blanditiis, temporibus neque culpa nesciunt voluptas vero, molestias <br> aut illo inventore recusandae cumque. Asperiores, consequuntur doloremque.",
    budjet: "Бюджет: 50 000 тенге",
    minut: "4 часа 20 минут назад",
    boxcha: "Завершено",
  },
  {
    price: "Нужно сделать Дизайн сайта по тематике авто",
    lorem: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem doloremque, <br> dolores vitae magnam blanditiis, temporibus neque culpa nesciunt voluptas vero, molestias <br> aut illo inventore recusandae cumque. Asperiores, consequuntur doloremque.",
    budjet: "Бюджет: 50 000 тенге",
    minut: "4 часа 15 минут назад",
    boxcha: "Закрыт",
  },
  {
    price: "Нужно сделать Дизайн сайта по тематике авто",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem doloremque, <br> dolores vitae magnam blanditiis, temporibus neque culpa nesciunt voluptas vero, molestias <br> aut illo inventore recusandae cumque. Asperiores, consequuntur doloremque.",
    budjet: "Бюджет: 50 000 тенге",
    minut: "4 часа 10 минут назад",
    boxcha: "Завершено",
  },
  {
    price: "Нужно сделать Дизайн сайта по тематике авто",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem doloremque, <br> dolores vitae magnam blanditiis, temporibus neque culpa nesciunt voluptas vero, molestias <br> aut illo inventore recusandae cumque. Asperiores, consequuntur doloremque.",
    budjet: "Бюджет: 50 000 тенге",
    minut: "4 часа 5 минут назад",
    boxcha: "Прием ставок",
  },
  {
    price: "Нужно сделать Дизайн сайта по тематике авто",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem doloremque, <br> dolores vitae magnam blanditiis, temporibus neque culpa nesciunt voluptas vero, molestias <br> aut illo inventore recusandae cumque. Asperiores, consequuntur doloremque.",
    budjet: "Бюджет: 50 000 тенге",
    minut: "3 часа 58 минут назад",
    boxcha: "Завершено",
  },
];



let workcontainer = document.querySelector(".container");

work.forEach((element) => {
  let workBox = document.createElement("div");
  workBox.className = "font";

  workBox.innerHTML = `
    <h3 class="price">${element.price}</h3>
    <p class="lorem">${element.lorem}</p>
    <div class="laylo">
      <h4 class="budjet">${element.budjet}</h4>
      <p class="minut">${element.minut}</p>
    </div>
     <p class="boxcha">${element.boxcha}</p>
  `;

  workcontainer.appendChild(workBox);
});
