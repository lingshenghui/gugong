document.addEventListener('DOMContentLoaded', function() {
    const detailBtns = document.querySelectorAll('.detail-btn');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close-btn');

    // 建筑详情数据
    const architectureDetails = {
        '白宫': {
            title: '白宫详情',
            description: '白宫是布达拉宫主体建筑，建于17世纪，高13层，占地约20000平方米。其建筑风格独特，墙体呈梯形向内倾斜，具有极强的稳定性。内部设有达赖喇嘛起居室、会客厅、政务厅等重要场所。',
            image: 'images/white-palace-detail.jpg'
        },
        '红宫': {
            title: '红宫详情',
            description: '红宫建于17世纪中期，是布达拉宫的核心建筑之一。主要用于宗教活动和仪式，内有历代达赖喇嘛灵塔殿、佛堂以及众多珍贵的宗教文物。其建筑风格庄严肃穆，体现了藏传佛教的建筑特色。',
            image: 'images/red-palace-detail.jpg'
        },
        '建筑结构': {
            title: '建筑结构详情',
            description: '布达拉宫采用传统的藏式建筑工艺，以石块、木材为主要建筑材料。墙体厚度从底层的5米逐渐向上收窄，形成独特的梯形结构。这种建筑方式不仅增强了建筑的稳定性，还具有良好的保温效果。',
            image: 'images/structure-detail.jpg'
        }
    };

    // 点击详情按钮显示模态框
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.architecture-card');
            const title = card.querySelector('h2').textContent;
            const details = architectureDetails[title];
            
            modalContent.querySelector('h2').textContent = details.title;
            modalContent.querySelector('p').textContent = details.description;
            modalContent.querySelector('img').src = details.image;
            
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

    // 卡片滚动动画
    const cards = document.querySelectorAll('.architecture-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}); 