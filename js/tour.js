document.addEventListener('DOMContentLoaded', function() {
    const locationButtons = document.querySelectorAll('.location-btn');
    const tourImage = document.getElementById('tourImage');
    const locationTitle = document.querySelector('.location-info h3');
    const locationDescription = document.querySelector('.location-info .description');
    const markers = document.querySelectorAll('.marker');

    // 位置信息数据
    const locationData = {
        'entrance': {
            title: '正门广场',
            description: '布达拉宫正门广场气势恢宏，是游客参观的第一站。这里可以看到布达拉宫的整体轮廓，感受其雄伟壮观。',
            images: ['images/布达拉宫全景.jpg']
        },
        'white-palace': {
            title: '白宫',
            description: '白宫是布达拉宫的主体建筑，内有达赖喇嘛的冬宫寝宫、会客厅等重要场所。建筑风格独特，装饰华丽。',
            images: ['images/日落.jpg']
        },
        'red-palace': {
            title: '红宫',
            description: '红宫主要用于宗教活动，内有众多佛堂和历代达赖喇嘛灵塔，是布达拉宫最神圣的地方。',
            images: ['images/玉雕.jpg']
        },
        'garden': {
            title: '空行母园',
            description: '空行母园是布达拉宫内的一处清幽庭院，环境优美，是历代达赖喇嘛休憩的地方。',
            images: ['images/书法.jpg']
        }
    };

    let currentLocation = 'entrance';
    let currentImageIndex = 0;

    // 切换位置
    function changeLocation(location) {
        currentLocation = location;
        currentImageIndex = 0;
        updateView();
    }

    // 更新视图
    function updateView() {
        const data = locationData[currentLocation];
        tourImage.src = data.images[currentImageIndex];
        locationTitle.textContent = data.title;
        locationDescription.textContent = data.description;
    }

    // 位置按钮点击事件
    locationButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            locationButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            changeLocation(this.dataset.location);
        });
    });

    // 地图标记点击事件
    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            const location = this.dataset.location;
            locationButtons.forEach(btn => {
                if (btn.dataset.location === location) {
                    btn.click();
                }
            });
        });
    });

    // 导航按钮点击事件
    const navLeft = document.querySelector('.nav-btn.left');
    const navRight = document.querySelector('.nav-btn.right');

    navLeft.addEventListener('click', function() {
        const images = locationData[currentLocation].images;
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        tourImage.src = images[currentImageIndex];
    });

    navRight.addEventListener('click', function() {
        const images = locationData[currentLocation].images;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        tourImage.src = images[currentImageIndex];
    });

    // 添加键盘导航
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            navLeft.click();
        } else if (e.key === 'ArrowRight') {
            navRight.click();
        }
    });
}); 