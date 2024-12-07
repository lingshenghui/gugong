document.addEventListener('DOMContentLoaded', function() {
    // 时间线项目的滚动显示效果
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // 阅读更多按钮点击效果
    const readMoreBtn = document.querySelector('.read-more');
    const historyContent = document.querySelector('.history-content p');
    
    const fullText = `布达拉宫是一座宫殿式建筑群，始建于公元7世纪，是西藏历史上最宏伟的建筑之一。
    它不仅是历代达赖喇嘛的冬宫居所，也是西藏政教合一的统治中心。
    布达拉宫的建筑艺术是藏族古建筑艺术的精华，是藏族人民智慧的结晶。
    经过历代的修缮扩建，布达拉宫形成了现今这般鬼斧神工的宏伟气势。`;
    
    let isExpanded = false;
    
    readMoreBtn.addEventListener('click', function() {
        if (!isExpanded) {
            historyContent.textContent = fullText;
            readMoreBtn.textContent = '收起';
        } else {
            historyContent.textContent = fullText.substring(0, 50) + '...';
            readMoreBtn.textContent = '阅读更多';
        }
        isExpanded = !isExpanded;
    });

    // 图片点击放大效果
    const images = document.querySelectorAll('.timeline-content img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.1)' 
                ? 'scale(1)' 
                : 'scale(1.1)';
        });
    });
}); 