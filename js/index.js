document.addEventListener('DOMContentLoaded', function() {
    // 特色卡片点击效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // 简单的点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 200);
        });
    });

    // 新闻项点击效果
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            // 点击时添加简单的高亮效果
            this.style.backgroundColor = '#f8f8f8';
            setTimeout(() => {
                this.style.backgroundColor = 'white';
            }, 300);
        });
    });

    // 页面滚动时的渐入效果
    const elements = document.querySelectorAll('.feature-card, .news-item');
    
    const fadeInOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
        fadeInOnScroll.observe(element);
    });
}); 