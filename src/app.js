import "./styles.css";
import axios from "axios";

axios
    .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
    .then((response) => {
        // Firstly, log response to the console,
        // inspect the response and see that it has data field
        console.log(response);

        // Assign data field of the response to
        // products variable below by destructuring
        // You can use alias
        const {data: products} = response;

        // Print names of all product to the console
        // by calling foreach  method (use arrow function)
        products.forEach(product => console.log(product.name));

        // Get all products that contain "Şal" in their name (use filter method)
        // map filtered products to new object having only image and name field
        // assign mapped items to mappedProducts variable
        const mappedProducts = products.filter(product => product.name.includes("Şal")).map(n => ({
            name: n.name,
            image: n.image
        }));

        // Display the images and names of mappedProducts
        // You need to add them to the DOM
        // you need to use forEach method
        // You need to use flexbox
        // Position of image and text is up to you
        // You can use any style you wish
        function showProduct(name, image) {
            const app = document.getElementById("app");
            const div = document.createElement("div")
            const h = document.createElement("h2");
            const img = document.createElement("img");
            img.src = image;
            img.alt = name;
            const hContent = document.createTextNode(name);
            h.appendChild(hContent);
            div.appendChild(h);
            div.appendChild(img);
            app.appendChild(div);
        }
        mappedProducts.forEach(product => showProduct(product.name, product.image));
    });