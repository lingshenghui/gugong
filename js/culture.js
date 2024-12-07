document.addEventListener('DOMContentLoaded', function() {
    // 详细内容数据
    const cultureDetails = {
        '佛教传承': {
            title: '佛教传承详情',
            content: `
                <p>布达拉宫是藏传佛教最重要的圣地之一，自7世纪以来就是藏传佛教的中心。在这里，历代达赖喇嘛通过各种仪式和教学活动传承佛法。</p>
                <h3>主要传承内容：</h3>
                <ul>
                    <li>经典教义的传授</li>
                    <li>修行方法的指导</li>
                    <li>佛教仪轨的传承</li>
                    <li>灌顶与授戒</li>
                </ul>
            `
        },
        '宗教仪式': {
            title: '宗教仪式详情',
            content: `
                <p>布达拉宫每天都会举行各种佛教仪式，这些仪式承载着深厚的文化内涵和宗教意义。</p>
                <h3>主要仪式：</h3>
                <ul>
                    <li>晨钟暮鼓</li>
                    <li>诵经法会</li>
                    <li>供灯仪式</li>
                    <li>节日庆典</li>
                </ul>
            `
        },
        '艺术特色': {
            title: '艺术特色详情',
            content: `
                <p>布达拉宫的艺术作品融合了藏族传统艺术和宗教艺术的特点，形成了独特的艺术风格。</p>
                <h3>主要艺术形式：</h3>
                <ul>
                    <li>壁画艺术</li>
                    <li>唐卡绘画</li>
                    <li>佛像雕塑</li>
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