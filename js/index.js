const $ul = document.querySelector('#productList'); // ID 선택자 사용

function drawProduct(dataItem) {
    const $li = document.createElement('li');
    const $h2 = document.createElement('h2');
    const $p1 = document.createElement('p');
    const $p2 = document.createElement('p');
    const $img = document.createElement('img');
    const $span = document.createElement('span');

    $img.src = dataItem.image;
    $img.alt = dataItem.product_name;
    $h2.textContent = dataItem.product_name;
    $p1.textContent = dataItem.price;
    $p2.textContent = dataItem.store_name;
    $span.textContent = '원';

    $p1.className = 'p1';
    $p2.className = 'p2';

    $li.appendChild($img);
    $li.appendChild($p2);
    $li.appendChild($h2);
    $p1.appendChild($span);
    $li.appendChild($p1);
    $ul.appendChild($li);
}

fetch('https://openmarket.weniv.co.kr/products')
    .then((res) => {
        if (!res.ok) {
            throw new Error('네트워크 응답이 올바르지 않습니다');
        }
        return res.json();
    })
    .then((data) => {
        data.results.forEach(drawProduct); // data.results 사용
    })
    .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
    });
