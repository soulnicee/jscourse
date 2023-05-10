class ProductCard {
  constructor({ productLabel, productImagePath, productTitle, productPrice }) {
    this.productLabel = productLabel
    this.productImagePath = productImagePath
    this.productTitle = productTitle
    this.productPrice = productPrice
  }
  greenBorder(item) {
    item.classList.toggle("choosed")
  }
  render(containerSelector) {
    const itemProduct = document.createElement("div")
    itemProduct.className = "item-product"

    const itemLabel = document.createElement("div")
    itemLabel.className = "item-product__label"
    itemLabel.innerHTML = `${this.productLabel}`
    if (this.productLabel.length < 6) itemLabel.classList.add("item-product__label_discount")
    itemProduct.append(itemLabel)
    console.log(this.productLabel.length)

    const imageContainer = document.createElement("div")
    imageContainer.className = "item-product__image"
    itemProduct.append(imageContainer)

    const image = document.createElement("img")
    image.className = "item-product__img"
    image.src = this.productImagePath
    imageContainer.append(image)

    const itemTitle = document.createElement("div")
    itemTitle.className = "item-product__title"
    itemTitle.innerHTML = `${this.productTitle}`
    itemProduct.append(itemTitle)

    const itemPrice = document.createElement("div")
    itemPrice.className = "item-product__price"
    itemPrice.innerHTML = `${this.productPrice}&#8372`
    itemProduct.append(itemPrice)

    itemProduct.onclick = this.greenBorder.bind(this, itemProduct)
    const container = document.querySelector(containerSelector)
    container.append(itemProduct)
  }
}

const productsList = [
  {
    productLabel: "топ продаж",
    productImagePath: "../img/products/notebook.webp",
    productTitle: "Ноутбук ASUS ROG Strix G17 2023 G713PI-LL028",
    productPrice: "100 999",
  },
  {
    productLabel: "топ продаж",
    productImagePath: "../img/products/notebook.webp",
    productTitle: "Ноутбук ASUS ROG Strix G17 2023 G713PI-LL028",
    productPrice: "100 999",
  },
  {
    productLabel: "акция",
    productImagePath: "../img/products/notebook.webp",
    productTitle: "Ноутбук ASUS ROG Strix G17 2023 G713PI-LL028",
    productPrice: "100 999",
  },
  {
    productLabel: "топ продаж",
    productImagePath: "../img/products/notebook.webp",
    productTitle: "Ноутбук ASUS ROG Strix G17 2023 G713PI-LL028",
    productPrice: "100 999",
  },
]

for (const product of productsList) {
  let productCard = new ProductCard(product)
  productCard.render(".products__items")
}
