// Given Data
let products = [
  {
    id: 101,
    title: 'Sony LED 40 inch',
    varations: [
      { id: 1, color: 'black', price: 50000, quantity: 5 },
      { id: 2, color: 'red', price: 50000, quantity: 1 },
      { id: 3, color: 'silver', price: 55000, quantity: 8 },
    ],
    reviews: [
      { id: 1, user: 'Ahmad', rating: 4.0, status: true },
      { id: 2, user: 'Zubair', rating: 4.5, status: false },
      { id: 3, user: 'Ali', rating: 5.0, status: true },
    ],
  },
  {
    id: 102,
    title: 'Mobile',
    varations: [
      { id: 1, color: 'black', price: 50000, quantity: 5 },
      { id: 2, color: 'red', price: 50000, quantity: 1 },
      { id: 3, color: 'silver', price: 55000, quantity: 8 },
    ],
    reviews: [
      { id: 1, user: 'Murtuza', rating: 4.0, status: true },
      { id: 2, user: 'Zubair', rating: 4.5, status: false },
      { id: 3, user: 'Murad', rating: 5.0, status: true },
    ],
  },
];
// ===============================================================
// Q1
console.log(products[0].title);
// ===============================================================
// Q2
let totalQuantity = 0;
for (let i = 0; i < products[0].varations.length; i++) {
  totalQuantity = totalQuantity + products[0].varations[i].quantity;
}
console.log(totalQuantity);
// ===============================================================
// Q3
let totalRating = 0;
for (let i = 0; i < products[0].reviews.length; i++) {
  totalRating = totalRating + products[0].reviews[i].rating;
}
let avgRating = totalRating / products[0].reviews.length;
console.log(avgRating);
// ===============================================================
// Q4
let reviewChecker = [];
for (let i = 0; i < products[0].reviews.length; i++) {
  if (products[0].reviews[i].status === true) {
    reviewChecker.push(products[0].reviews[i]);
  }
}
console.log(reviewChecker);
// ===============================================================
let reviewChecker2 = [];
for (let i = 0; i < products[1].reviews.length; i++) {
  if (products[1].reviews[i].status === true) {
    reviewChecker2.push(products[1].reviews[i]);
  }
}
console.log(reviewChecker2);
// ===============================================================
// Q5
 let max = products[0].varations[0].price;
 for (let i = 0; i < products[0].varations.length; i++) {
   if (products[0].varations[i].price > max) { 
      max = products[0].varations[i].price;
   }} console.log(max);
// ===============================================================
// Q6
  let totalStock = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].varations.length; j++) {
      totalStock = totalStock + products[i].varations[j].quantity;
    }
  }
  console.log("Total Quantity of All Products:", totalStock);

// ===================================================================
// Q7
for (let i = 0; i < products.length; i++) {
  let product = products[i];

  let totalRating = 0;
  for (let i = 0; i < product.reviews.length; i++) {
    totalRating += product.reviews[i].rating;
  }
  let avg = totalRating / product.reviews.length;

  console.log(`Product ${product.id} = ${avg}(${product.reviews.length})`);
}
// =====================================================================================
// Q8
  let maxStock = 0;
  let maxStockProduct = "";

  for (let i = 0; i < products.length; i++) {
    let productStock = 0;

    for (let j = 0; j < products[i].varations.length; j++) {
      productStock = productStock + products[i].varations[j].quantity;
    }

    if (productStock > maxStock) {
      maxStock = productStock;
      maxStockProduct = products[i].title;
    }
  }

  console.log(
    "Highest Stock Product: " + maxStockProduct + " (" + maxStock + ")"
  );
// =================================================================================
// Q9
  let totalApprovedReviews = 0;

  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].reviews.length; j++) {
      if (products[i].reviews[j].status === true) {
        totalApprovedReviews++;
      } 
           
  }}

  console.log("Total Approved Reviews:", totalApprovedReviews);
// ======================================================================================
// Q10
// WE USE ARRAYS BECAUSE WE CAN STORE MULTIPLE VALUE ON SINGLE IN IT AND EASY TO GET IT AND 
// SINGLE OBJECTS ARE USED TO CARRY VALUES OF DIFFERENT DATA TYPES LIKE...
// ================================================================================================
// Q11
// WE CAN USE IT IN AMAZON ALSO DARAZ OLX 
