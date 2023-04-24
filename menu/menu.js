const menu = [
  {
    id: 1,
    title: "chairs",
    category: "serving",
    price: 4.99,
    img: "images/chairs.jpg",
    desc: `We offer chairs for the ceremony and chairs for dining along with various other applications.`,
  },
  {
    id: 2,
    title: "dance floor",
    category: "pop-ups",
    price: 799.99,
    img: "images/dancefloor.jpg",
    desc: `Every wedding reception needs a dance floor. Whether you want a lighted disco floor or good ol' fashioned hardwoord, we have a solution.`,
  },
  {
    id: 3,
    title: "dinnerware",
    category: "serving",
    price: 1.99,
    img: "images/dinnerware.jpg",
    desc: `Select from many different stayles of dinnerware. All of our wares cost the same, so your decisions will not be difficult.`,
  },
  {
    id: 4,
    title: "draping",
    category: "linen",
    price: 6.99,
    img: "images/drapery.jpg",
    desc: `If you want an outdoor wedding, or you want to festoon your indoor venue, our draping options will exceed your needs.`,
  },
  {
    id: 5,
    title: "flatware",
    category: "serving",
    price: 1.99,
    img: "images/flatware.jpg",
    desc: `We also offer various flatware at the same price point so that you can have whatever you want without worrying about your budget.`,
  },
  {
    id: 6,
    title: "glassware",
    category: "serving",
    price: .99,
    img: "images/glassware.jpg",
    desc: `Water glasses, champagne glasses, wine glasses, etc. We offer a wide-range of options to fit your motif.`,
  },
  {
    id: 7,
    title: "lighting",
    category: "pop-ups",
    price: 999.99,
    img: "images/lighting.jpg",
    desc: `We can light any space. Stages, dancefloors, aisles, and more. Our lighting specialists will work with you to find the best solution.`,
  },
  {
    id: 8,
    title: "linens",
    category: "linen",
    price: 4.99,
    img: "images/linens.jpg",
    desc: `Linens are a very important part of a wedding. From tablecloths to napkins, there's no way to do things right without them. Have a look at our inventory!`,
  },
  {
    id: 9,
    title: "lounge furniture",
    category: "serving",
    price: 299.99,
    img: "images/lounging.jpg",
    desc: `Let us help make your event comfortable for everyone! We hae a style to fit anyone and everyone.`,
  },
  {
    id: 10,
    title: "stages",
    category: "pop-ups",
    price: 599.99,
    img: "images/stages.jpg",
    desc: `We have staging for bands and we have altars for the big ceremony. Not matter how large or small, we can make your event unforgettable.`,
  },
  {
    id: 11,
    title: "tables",
    category: "serving",
    price: 24.99,
    img: "images/tables.jpg",
    desc: `There are many different types of table for many different purposes, and we can cover every base.`,
  },
  {
    id: 12,
    title: "tents",
    category: "pop-ups",
    price: 499.99,
    img: "images/tents.jpg",
    desc: `From small tents to circus-worthy tents, we can make your celebration as big or as cozy as you've always imagined.`,
  },
  {
    id: 13,
    title: "delivery",
    category: "services",
    price: 499.99,
    img: "images/delivery.jpg",
    desc: `We understand that rental is just the beginning. While we do allow customers to pick up their rentals, we also offer delivery and set-up!`,
  },
  {
    id: 14,
    title: "tear down",
    category: "services",
    price: 699.99,
    img: "images/teardown.jpg",
    desc: `No one wants to spend time cleaning up after a truly great celebration, so leave it with us.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
