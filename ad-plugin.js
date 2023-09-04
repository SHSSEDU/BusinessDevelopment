(function () {
    // 创建广告图片元素
    var adImage = document.createElement('img');
    adImage.src = 'https://tu.quickso.cn/file/f60e0733e366f91750df8.png';//广告图片
    adImage.style.position = 'fixed';
    adImage.style.right = '20px';
    adImage.style.bottom = '20px';
    adImage.style.width = '250px';
    adImage.style.cursor = 'pointer';

    // 创建广告标签元素
    var adLabel = document.createElement('div');
    adLabel.textContent = '广告';
    adLabel.style.position = 'fixed';
    adLabel.style.right = '20px';
    adLabel.style.bottom = '20px';
    adLabel.style.padding = '5px';
    adLabel.style.color = '#fff';
    adLabel.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    adLabel.style.border = '1px solid #fff';
    adLabel.style.borderRadius = '6px';
    adLabel.style.lineHeight = '6px';
    // adLabel.style.height = '6px';
    adLabel.style.fontSize = '12px';
    adLabel.style.cursor = 'pointer';

    // 将广告图片和广告标签添加到页面中
    document.body.appendChild(adImage);
    document.body.appendChild(adLabel);

    // 鼠标移动到广告标签时，显示"投放广告"字样
    adLabel.addEventListener('mouseover', function () {
        adLabel.textContent = '投放广告';
    });

    // 鼠标移出广告标签时，恢复显示"广告"字样
    adLabel.addEventListener('mouseout', function () {
        adLabel.textContent = '广告';
    });

    // 点击广告图片或广告标签时，跳转到链接
    adImage.addEventListener('click', function () {
        window.location.href = 'https://bd.shssedu.ac.cn';
    });

    adLabel.addEventListener('click', function () {
        window.location.href = 'https://bd.shssedu.ac.cn';
    });
})();
