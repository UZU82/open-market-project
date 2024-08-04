const ProductList = document.querySelector('#product-list'); // ID 선택자 사용

function drawProduct(dataItem) {
    const productListItem = document.createElement('li');
    const productLink = document.createElement('a');
    const productName = document.createElement('h2');
    const productPrice = document.createElement('p');
    const storeName = document.createElement('p');
    const productImg = document.createElement('img');
    const productPriceUnit = document.createElement('span');
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };
    // Intl.NumberFormat은 JavaScript의 내장 객체이며, 언어에 맞는 숫자 서식을 지원함
    // 'ko-KR'은 한국식 숫자 표기법을 사용하겠다는 뜻임
    // .format(price)는 주어진 숫자를 지정된 로케일에 맞게 형식화하게 됨

    productImg.src = dataItem.image;
    productImg.alt = dataItem.product_name;
    storeName.textContent = dataItem.store_name;
    productName.textContent = dataItem.product_name;
    productPrice.textContent = formatPrice(dataItem.price);
    productPriceUnit.textContent = '원';

    productImg.className = 'product-img';
    storeName.className = 'store-name';
    productName.className = 'product-name';
    productPrice.className = 'product-price';
    productPriceUnit.className = 'product-price-unit';

    productLink.appendChild(productImg);
    productLink.appendChild(storeName);
    productLink.appendChild(productName);
    productPrice.appendChild(productPriceUnit);
    productLink.appendChild(productPrice);
    productListItem.appendChild(productLink);
    ProductList.appendChild(productListItem);
}

fetch('https://openmarket.weniv.co.kr/products')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.results.forEach(drawProduct);
    })
    .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
    });
