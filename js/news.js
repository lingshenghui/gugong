document.addEventListener('DOMContentLoaded', function() {
    // 新闻详情数据
    const newsDetails = {
        '布达拉宫2024年春节期间参观安排': {
            title: '布达拉宫2024年春节期间参观安排',
            date: '2024-01-15',
            category: '通知公告',
            content: `
                <p>为更好地服务广大游客，春节期间（2024年2月9日-2月17日）布达拉宫将调整开放时间：</p>
                <h3>一、开放时间调整</h3>
                <ul>
                    <li>上午：07:30-12:00</li>
                    <li>下午：14:00-19:00</li>
                </ul>
                <h3>二、预约方式</h3>
                <p>游客可通过以下方式预约参观：</p>
                <ul>
                    <li>官方网站在线预约</li>
                    <li>现场售票处预约</li>
                    <li>电话预约：0891-xxxxxxxx</li>
                </ul>
                <h3>三、注意事项</h3>
                <p>春节期间游客较多，建议提前预约，合理安排参观时间。</p>
            `
        },
        '2024年藏历新年祈福法会活动预告': {
            title: '2024年藏历新年祈福法会活动预告',
            date: '2024-01-10',
            category: '活动信息',
            content: `
                <p>布达拉宫将于藏历新年期间举办传统祈福法会，具体安排如下：</p>
                <h3>活动时间</h3>
                <p>2024年2月10日-2月12日</p>
                <h3>活动内容</h3>
                <ul>
                    <li>晨钟暮鼓仪式</li>
                    <li>新年祈福法会</li>
                    <li>传统藏戏表演</li>
                </ul>
                <h3>参与方式</h3>
                <p>游客可在正常参观时间观看部分仪式活动。</p>
            `
        }
    };

    // 分类筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;
            
            // 筛选新闻卡片
            newsCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 新闻详情模态框
    const modal = document.querySelector('.news-modal');
    const modalTitle = modal.querySelector('h2');
    const modalDate = modal.querySelector('.modal-date');
    const modalCategory = modal.querySelector('.modal-category');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close-btn');

    // 阅读更多按钮点击事件
    const readMoreBtns = document.querySelectorAll('.read-more');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const newsCard = this.closest('.news-card');
            const title = newsCard.querySelector('h2').textContent;
            const details = newsDetails[title];

            if (details) {
                modalTitle.textContent = details.title;
                modalDate.textContent = details.date;
                modalCategory.textContent = details.category;
                modalBody.innerHTML = details.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
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

    // 分页功能
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            pageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // 这里可以添加实际的分页加载逻辑
        });
    });
}); 