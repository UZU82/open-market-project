const $tbody = document.querySelector('tbody'); // ID 선택자 사용

function drawProduct(dataItem) {
    const $tr = document.createElement('tr');
    const $td = document.createElement('div');
    const $img = document.createElement('img');
    const $h3 = document.createElement('p');

    // productImg.src = dataItem.image;
    // productImg.alt = dataItem.product_name;
    // storeName.textContent = dataItem.store_name;
    // productName.textContent = dataItem.product_name;
    // productPrice.textContent = formatPrice(dataItem.price);
    // productPriceUnit.textContent = '원';

    // productImg.className = 'product-img';
    // storeName.className = 'store-name';
    // productName.className = 'product-name';
    // productPrice.className = 'product-price';
    // productPriceUnit.className = 'product-price-unit';
}

fetch('https://openmarket.weniv.co.kr/cart/')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.results.forEach(drawProduct);
    })
    .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
    });
