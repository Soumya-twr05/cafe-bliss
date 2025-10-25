
 
    // Menu Dataset
    const menuData = {
      Coffee: [
        { name: "Caramel Latte", description: "Rich espresso, steamed milk, and caramel drizzle.", price: 149, image: "assets/Caramel Dolce Latte.jpg" },
        { name: "Cappuccino", description: "Bold espresso with steamed milk foam.", price: 129, image: "assets/cappuccino.jpg" },
        { name: "Mocha", description: "Chocolate-flavored espresso with whipped cream.", price: 159, image: "assets/Mocha Coffee.jpg" }
      ],
      Tea: [
        { name: "Masala Chai", description: "Indian spiced tea brewed with milk and herbs.", price: 79, image: "assets/masala_chai.jpg" },
        { name: "Green Tea", description: "Light, refreshing, and full of antioxidants.", price: 69, image: "assets/Green.jpg" },
        { name: "Iced Lemon Tea", description: "Cool, zesty iced tea with lemon flavor.", price: 89, image: "assets/Beverage.jpg" }
      ],
      Snacks: [
        { name: "Butter Croissant", description: "Freshly baked, flaky, and buttery.", price: 89, image: "assets/Butter Croissants.jpg" },
        { name: "Veg Sandwich", description: "Loaded with fresh veggies and grilled to perfection.", price: 129, image: "assets/sandwich2.jpg" },
        { name: "Cheese Garlic Bread", description: "Toasted bread with garlic and melted cheese.", price: 99, image: "assets/garlic.jpg" }
      ],
      Cake: [
        { name: "Chocolate Cupcake", description: "Soft, moist chocolate cupcake with frosting.", price: 49, image: "assets/cupcake.jpg" },
        { name: "Red Velvet Slice", description: "Classic red velvet cake with cream cheese frosting.", price: 149, image: "assets/red.jpg" },
        { name: "Blueberry Cheesecake", description: "Smooth cheesecake topped with blueberry glaze.", price: 199, image: "assets/blueberry.jpg" }
      ]
    };

    // Horizontal scroll
    document.getElementById("back").onclick = () => {
      document.getElementById("gallery").scrollBy({ left: -200, behavior: "smooth" });
    };
    document.getElementById("forward").onclick = () => {
      document.getElementById("gallery").scrollBy({ left: 200, behavior: "smooth" });
    };

    // Open popup on click
    const galleryItems = document.querySelectorAll(".gallery-item");
    const popup = document.getElementById("menuPopup");
    const popupContent = document.getElementById("popupContent");

    galleryItems.forEach(item => {
      item.addEventListener("click", () => {
        const category = item.querySelector("h3").textContent;
        const items = menuData[category];

        popupContent.innerHTML = `
          <h2>${category} Menu</h2>
          <div class="menu-grid">
            ${items.map(i => `
              <div class="card">
                <img src="${i.image}" alt="${i.name}">
                <h3>${i.name}</h3>
                <p>${i.description}</p>
                <span>₹${i.price}</span>
              </div>
            `).join("")}
          </div>
          <div class="popup-buttons">
          <button class="close-btn" id="closePopup">Close</button>
          <button class="order-btn" id="orderPopup">Place Order</button>
          </div>
        `;

        popup.style.display = "flex";
        document.getElementById("closePopup").addEventListener("click", () => {
          popup.style.display = "none";
        });
      });

    });
       const toggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    toggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
      toggle.classList.toggle('open');
    });
       
  