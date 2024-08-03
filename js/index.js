const $ul = document.querySelector('#productList'); // ID 선택자 사용

function drawProduct(dataItem) {
    const $li = document.createElement('li'); // div 대신 li 사용
    const $h2 = document.createElement('h2'); // h1 대신 h2 사용
    const $p = document.createElement('p');
    const $img = document.createElement('img');

    $img.src = dataItem.image;
    $img.alt = dataItem.product_name; // 접근성을 위한 alt 속성 추가
    $h2.textContent = dataItem.product_name;
    $p.textContent = `가격: ${dataItem.price.toLocaleString()}원`;

    $li.appendChild($img);
    $li.appendChild($h2);
    $li.appendChild($p);
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
