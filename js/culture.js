document.addEventListener('DOMContentLoaded', function() {
    // 详细内容数据
    const cultureDetails = {
        '皇家礼仪': {
            title: '皇家礼仪详情',
            content: `
                <p>故宫是明清两代皇家礼仪的中心，在这里举行了众多重要的典礼和仪式。</p>
                <h3>主要礼仪活动：</h3>
                <ul>
                    <li>朝会仪式</li>
                    <li>祭祀典礼</li>
                    <li>皇家婚礼</li>
                    <li>册封仪式</li>
                </ul>
            `
        },
        '宫廷生活': {
            title: '宫廷生活详情',
            content: `
                <p>故宫内的宫廷生活丰富多彩，包括各种日常活动和娱乐形式。</p>
                <h3>主要活动：</h3>
                <ul>
                    <li>皇家宴会</li>
                    <li>戏曲表演</li>
                    <li>节庆庆典</li>
                    <li>日常起居</li>
                </ul>
            `
        },
        '艺术特色': {
            title: '艺术特色详情',
            content: `
                <p>故宫是中国传统艺术的瑰宝，收藏了大量珍贵的艺术品。</p>
                <h3>主要艺术形式：</h3>
                <ul>
                    <li>宫廷绘画</li>
                    <li>皇家瓷器</li>
                    <li>玉器工艺</li>
                    <li>建筑装饰</li>
                </ul>
            `
        }
    };

    // 阅读更多按钮点击事件
    const readMoreBtns = document.querySelectorAll('.read-more');
    const modal = document.querySelector('.culture-modal');
    const modalTitle = modal.querySelector('h2');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.closest('.culture-section');
            const title = section.querySelector('h2').textContent;
            const details = cultureDetails[title];

            modalTitle.textContent = details.title;
            modalBody.innerHTML = details.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // 智慧语录轮播
    const quoteCards = document.querySelectorAll('.quote-card');
    const quoteButtons = document.querySelectorAll('.quote-btn');
    let currentQuote = 0;

    function showQuote(index) {
        quoteCards.forEach(card => card.classList.remove('active'));
        quoteButtons.forEach(btn => btn.classList.remove('active'));
        
        quoteCards[index].classList.add('active');
        quoteButtons[index].classList.add('active');
    }

    quoteButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentQuote = index;
            showQuote(currentQuote);
        });
    });

    // 自动轮播
    setInterval(() => {
        currentQuote = (currentQuote + 1) % quoteCards.length;
        showQuote(currentQuote);
    }, 5000);
}); 