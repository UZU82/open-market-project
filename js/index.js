const $ul = document.querySelector('#productList'); // ID 선택자 사용

function drawProduct(dataItem) {
    const $li = document.createElement('li'); // div 대신 li 사용
    const $h2 = document.createElement('h2'); // h1 대신 h2 사용
    const $p1 = document.createElement('p');
    const $p2 = document.createElement('p');
    const $img = document.createElement('img');

    $img.src = dataItem.image;
    $img.alt = dataItem.product_name; // 접근성을 위한 alt 속성 추가
    $h2.textContent = dataItem.product_name;
    $p1.textContent = `${dataItem.price.toLocaleString()}원`;
    $p2.textContent = dataItem.store_name;

    $p1.className = 'p1';
    $p2.className = 'p2';

    $li.appendChild($img);
    $li.appendChild($p2);
    $li.appendChild($h2);
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
