const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const products = [
    {
      id: 1,
      name: "Camiseta Casual Blanca",
      price: 100,
      image: "https://wiseman.vtexassets.com/arquivos/ids/183153-1600-auto?v=638485399361600000&width=1600&height=auto&aspect=true",
      detail: "Camiseta blanca de algodón 100% para un look casual y versátil."
    },
    {
      id: 2,
      name: "Camiseta Deportiva Negra",
      price: 200,
      image: "https://wiseman.vtexassets.com/arquivos/ids/182933-1200-auto?v=638485398453930000&width=1200&height=auto&aspect=true",
      detail: "Camiseta negra de secado rápido ideal para entrenamientos intensivos."
    },
    {
      id: 3,
      name: "Camiseta Estampada Urbana",
      price: 300,
      image: "https://wiseman.vtexassets.com/arquivos/ids/196548-1600-auto?v=638580398465170000&width=1600&height=auto&aspect=true",
      detail: "Camiseta de diseño urbano con estampado moderno, perfecta para el día a día."
    },
    {
      id: 4,
      name: "Camiseta Básica Azul",
      price: 200,
      image: "https://wiseman.vtexassets.com/arquivos/ids/180914-1600-auto?v=638483793658900000&width=1600&height=auto&aspect=true",
      detail: "Camiseta de algodón azul, suave y cómoda para cualquier ocasión."
    },
    {
      id: 5,
      name: "Camiseta Vintage Gris",
      price: 500,
      image: "https://wiseman.vtexassets.com/arquivos/ids/162069-1600-auto?v=638374779021570000&width=1600&height=auto&aspect=true",
      detail: "Camiseta gris con un toque vintage, ideal para un estilo retro."
    },
    {
      id: 6,
      name: "Camiseta Oversize Negra",
      price: 600,
      image: "https://wiseman.vtexassets.com/arquivos/ids/183481-1600-auto?v=638485400604670000&width=1600&height=auto&aspect=true",
      detail: "Camiseta oversize negra para un estilo relajado y moderno."
    },
    {
      id: 7,
      name: "Camiseta Polo Blanca",
      price: 100,
      image: "https://wiseman.vtexassets.com/arquivos/ids/192699-1600-auto?v=638528615003430000&width=1600&height=auto&aspect=true",
      detail: "Camiseta polo blanca de tela transpirable, ideal para un look elegante y casual."
    },
    {
      id: 8,
      name: "Camiseta Rayada Casual",
      price: 200,
      image: "https://wiseman.vtexassets.com/arquivos/ids/196620-1200-auto?v=638580398732200000&width=1200&height=auto&aspect=true",
      detail: "Camiseta con rayas coloridas, perfecta para un estilo casual y juvenil."
    },
    {
      id: 9,
      name: "Camiseta Negra Clásica",
      price: 300,
      image: "https://wiseman.vtexassets.com/arquivos/ids/183041-1600-auto?v=638485398896870000&width=1600&height=auto&aspect=true",
      detail: "Camiseta negra clásica, combinable con cualquier outfit."
    },
    {
      id: 10,
      name: "Camiseta Running Azul",
      price: 200,
      image: "https://wiseman.vtexassets.com/arquivos/ids/180822-1600-auto?v=638483793318500000&width=1600&height=auto&aspect=true",
      detail: "Camiseta azul de alto rendimiento para running y actividades deportivas."
    },
    {
      id: 11,
      name: "Camiseta Estilo Skate",
      price: 500,
      image: "https://wiseman.vtexassets.com/arquivos/ids/183321-1600-auto?v=638485400015730000&width=1600&height=auto&aspect=true",
      detail: "Camiseta de diseño skate con un estilo fresco y juvenil."
    },
    {
      id: 12,
      name: "Camiseta Slim Fit Blanca",
      price: 600,
      image: "https://wiseman.vtexassets.com/arquivos/ids/183349-1600-auto?v=638485400127600000&width=1600&height=auto&aspect=true",
      detail: "Camiseta blanca slim fit para un ajuste ceñido y elegante."
    }
  ];
  

let cart = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  const { id } = req.body;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  res.status(201).json(cart);
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const productId = parseInt(id, 10);
  
    const product = products.find((p) => p.id === productId);
  
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
  
    res.json(product);
  });

app.delete("/cart/:id", (req, res) => {
  const { id } = req.params;
  const productId = parseInt(id, 10);

  const cartIndex = cart.findIndex((item) => item.id === productId);
  if (cartIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado en el carrito" });
  }

  const cartItem = cart[cartIndex];
  if (cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  } else {
    cart.splice(cartIndex, 1);
  }

  res.status(200).json(cart);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
