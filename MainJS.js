/* PRODUCTS DATA */
// Load products
var products = {
      1: {
        name: "PULP ELEPHANT",
        desc: "Hand made pulp elephant statue.",
        img: "pulp-elephant.jpg",
        price: 842
      },
      2: {
        name: "WOODEN ELEPHANT",
        desc: "An elephant made with \"KALUWARA\".",
        img: "wooden-elephant.jpg",
        price: 1200

      },
      3: {
        name: "LAQUARED BOX",
        desc: "Hand made Laquared Box.",
        img: "laquared-cakebox.jpg",
        price: 675
      },
      4: {
        name: "CERAMIC PEN HOLDER",
        desc: "Elephant feet shaped pen holder.",
        img: "ceramic-pen-holder.jpg",
        price: 55
      },
      5: {
        name: "LEATHER TRAVELLING BAG",
        desc: "Original hand made leather bag.",
        img: "leather-travelling-bag.jpg",
        price: 200
      },
      6: {
        name: "HAND LOOM BOX PURSE",
        desc: "Light weight fashionable purse.",
        img: "hand-loom-box-purse.jpg",
        price: 25
      },
      7: {
        name: "SILVER NECKLACE",
        desc: "Hard patterned silver necklace.",
        img: "silver-necklace-2.jpg",
        price: 2000
      },
      8: {
        name: "CUSHION COVER",
        desc: "Ultra soft Cushion Covers.",
        img: "cusion-cover.jpg",
        price: 15
      },
      9: {
        name: "HAND LOOM PURSE",
        desc: "Cute Hand loom purse for kids.",
        img: "hand-loom-purse.jpg",
        price: 32
      },
      10: {
        name: "CINNAMON PACK",
        desc: "Best quality Ceylon Cinnamon.",
        img: "cinnamon-pack.jpg",
        price: 25
      },
      11: {
        name: "SPICES PACK",
        desc: "A pack of best quality spices.",
        img: "spices-pack.jpg",
        price: 10
      },
      12: {
        name: "LEATHER SIDE BAG",
        desc: "Original leather side bag.",
        img: "leather-side-bag.jpg",
        price: 40
      },
      13: {
        name: "LEATHER HUMPTY OVAL",
        desc: "Hand made leather humpty oval.",
        img: "leather-humpty-oval.jpg",
        price: 80
      },
      14: {
        name: "CEYLON TEA PACK",
        desc: "Quality hand picked ceylon tea.",
        img: "ceylon-tea.jpg",
        price: 10
      },
      15: {
        name: "SILVER NECKLACE",
        desc: "Hard patterned silver necklace.",
        img: "silver-necklace-3.jpg",
        price: 1700
      }
    };


  /*PRODUCTS HTML GRID GENERATOR */
  window.addEventListener("load", function () {
    var container = document.getElementById("cart-products"),
      item = null, part = null;
    for (let i in products) {
      item = document.createElement("div");
      item.classList.add("p-item");

      // Product Image
      part = document.createElement("img");
      part.src = products[i]['img'];
      part.classList.add("p-img");
      part.alt = products[i]['name'];
      item.appendChild(part);

      // Product Name
      part = document.createElement("div");
      part.innerHTML = products[i]['name'];
      part.classList.add("p-name");
      item.appendChild(part);

      // Product Price
      part = document.createElement("div");
      part.innerHTML = "$" + products[i]['price'];
      part.classList.add("p-price");
      item.appendChild(part);

      // Product Description
      part = document.createElement("div");
      part.innerHTML = products[i]['desc'];
      part.classList.add("p-desc");
      part.classList.add("text");
      item.appendChild(part);

      // Add to cart
      part = document.createElement("input");
      part.type = "button";
      part.value = "Add to Cart";
      part.classList.add("p-add");
      part.onclick = cart.add;
      part.dataset.id = i;
      item.appendChild(part);

      container.appendChild(item);
    }
  });

  /* SHOPPING CART */
  var total;
  var cart = {
    data: null, // current shopping cart

    /* LOCALSTORAGE */
    load: function () {
      // load() : load previous shopping cart

      cart.data = localStorage.getItem("cart");
      if (cart.data == null) {
        cart.data = {};
      } else {
        cart.data = JSON.parse(cart.data);
      }
    },

    save: function () {
      // save() : save current cart
      localStorage.setItem("cart", JSON.stringify(cart.data));
    },

    /* CART ACTIONS */
    add: function () {
      // add() : add selected item to cart

      // Update current cart
      if (cart.data[this.dataset.id] === undefined) {
        var product = products[this.dataset.id];
        cart.data[this.dataset.id] = {
          name: product['name'],
          desc: product['desc'],
          img: product['img'],
          price: product['price'],
          qty: 1
        };
      } else {
        cart.data[this.dataset.id]['qty']++;
      }

      // Save local storage + HTML update
      cart.save();
      cart.list();
    },

    list: function () {
      // list() : update HTML

      var container = document.getElementById("cart-monitor"),
        item = null, part = null, product = null;
      container.innerHTML = "";

      // Empty cart
      var isempty = function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      };

      if (isempty(cart.data)) {
        item = document.createElement("div");
        item.innerHTML = "Cart is empty";
        item.style.fontSize = "30px";
        item.style.fontWeight = "bold";
        item.style.color = "white";
        item.style.position = "relative";
        item.style.top = "100px";
        item.style.left = "85%";
        container.appendChild(item);
      }

      // Not empty
      else {
        // List items
        var subtotal = 0;
        total = 0;
        for (var i in cart.data) {
          item = document.createElement("div");
          item.classList.add("c-item");
          product = cart.data[i];

          // Quantity
          part = document.createElement("input");
          part.type = "number";
          part.value = product['qty'];
          part.dataset.id = i;
          part.classList.add("c-qty");
          part.addEventListener("change", cart.change);
          item.appendChild(part);

          // Name
          part = document.createElement("span");
          part.innerHTML = product['name'];
          part.classList.add("c-name");
          item.appendChild(part);

          // Subtotal
          subtotal = product['qty'] * product['price'];
          total += subtotal;

          container.appendChild(item);
        }

        // EMPTY BUTTONS
        item = document.createElement("input");
        item.type = "button";
        item.value = "Empty";
        item.addEventListener("click", cart.reset);
        item.classList.add("c-empty");
        container.appendChild(item);

        // CHECKOUT BUTTONS
        item = document.createElement("input");
        item.type = "button";
        item.value = "Checkout - " + "$" + total;
        item.addEventListener("click", cart.checkout);
        item.classList.add("c-checkout");
        container.appendChild(item);
      }
    },

    change: function () {
      // change() : change quantity
      if (this.value === 0) {
        delete cart.data[this.dataset.id];
      } else {
        cart.data[this.dataset.id]['qty'] = this.value;
      }
      cart.save();
      cart.list();
    },

    reset: function () {
      // reset() : empty cart
      if (confirm("Empty cart?")) {
        cart.data = {};
        cart.save();
        cart.list();
      }
    },

    checkout: function () {
      // checkout() : checkout the cart
      document.getElementById('id01').style.display = 'block';
    }
  };

// Load previous cart and update HTML on load
  window.addEventListener("load", function () {
    cart.load();
    cart.list();
  });

  /*form validation*/
  function confirmation() {
    var name = document.getElementById("myForm").elements[0].value;
    var address = document.getElementById("myForm").elements[1].value;
    var email = document.getElementById("myForm").elements[2].value;
    var tel = document.getElementById("myForm").elements[3].value;
    if (name === "" || address === "" || email === "" || tel === "") {
      alert("Please fill required fields")
    } else {
      var c = confirm(name + " you have successfully purchased $" + total + " for our products. \n" +
        "Your Address: " + address +
        "\nYour Email: " + email +
        "\nYour Tel: " + tel);

      if (c === true) {
        document.getElementById("id01").style.display = "none";
        cart.data = {};
        cart.save();
        cart.list();
      }
    }
  }
