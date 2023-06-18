const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "data:image/jpeg;base64,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",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  /*let sum = menu.reduce((acc, item)=>acc + item.price)
  console.log(sum);*/

  const categories = menu.reduce((accumulator, item) => {
  if (!accumulator.includes(item.category)) {
    accumulator.push(item.category);
  }
  return accumulator;
}, ["All"]);

// Kategorilere göre düğmeleri oluştur
const buttonContainer = document.getElementById("button-container");
/*categories.forEach(category => {
  const button = document.createElement("button")
  button.
}*/ 
categories.forEach(category => {
  const button = document.createElement("button");
  button.textContent = category;
  button.classList.add("category-button");
  buttonContainer.appendChild(button);

  button.addEventListener("click", () => {
    displayMenuItems(category);
  });
});

// Menü öğelerini görüntüleme işlevi
function displayMenuItems(category) {
  const menuItemsContainer = document.getElementById("menu-items");
  let filteredItems;

  if (category === "All") {
    filteredItems = menu;
  } else {
    filteredItems = menu.filter(item => item.category === category);
  }

  const html = filteredItems
    .map(item => {
      return `
        <div class="menu-item">
          <img src="${item.img}" alt="${item.title}" />
          <div>
            <h4>${item.title}</h4>
            <h5>${item.price}</h5>
            <p>${item.desc}</p>
            </div>
          </div>
      `;
    })
    .join("");

  menuItemsContainer.innerHTML = html;
}
 