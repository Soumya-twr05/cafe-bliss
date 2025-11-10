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

    // Dynamically generate order cards
    const orderContainer = document.getElementById("orderContainer");
    Object.entries(menuData).forEach(([category, items]) => {
      items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("order-card");
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="order-details">
            <h3>${item.name}</h3>
            <p>Category: ${category}</p>
            <p>Price: ₹<span class="price">${item.price}</span></p>
            <label>Quantity:</label>
            <input type="number" class="quantity-input" min="1" value="1">
            <button class="order-btn">Add to Cart</button>
          </div>
        `;
        orderContainer.appendChild(card);
      });
    });

    // Handle cart total
    let totalAmount = 0;
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("order-btn")) {
        const card = e.target.closest(".order-card");
        const price = parseInt(card.querySelector(".price").innerText);
        const quantity = parseInt(card.querySelector(".quantity-input").value);

        const itemTotal = price * quantity;
        totalAmount += itemTotal;

        document.getElementById("totalAmount").innerText = totalAmount;
        alert(`✅ ${quantity} × ${card.querySelector("h3").innerText} added (₹${itemTotal})`);
      }
    });