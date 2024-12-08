document.addEventListener('DOMContentLoaded', function() {
    // 建筑详情数据
    const architectureDetails = {
        '外朝': {
            title: '外朝详情',
            description: '外朝是故宫中举行重大朝会的场所，以太和殿为中心，包括太和殿、中和殿、保和殿等建筑。这里是明清两代皇帝举行大典、接受朝贺的地方。',
            image: 'images/外朝.jpg'
        },
        '内廷': {
            title: '内廷详情',
            description: '内廷以乾清宫为中心，是皇帝日常居住和处理政务的场所。包括乾清宫、交泰殿、坤宁宫等建筑，体现了严格的等级制度和宫廷生活制度。',
            image: './images/内廷.webp'
        },
        '建筑结构': {
            title: '建筑结构详情',
            description: '故宫建筑采用传统的木构架体系，以抬梁式和穿斗式相结合的构架方式为主。整体建筑布局严谨，体现了中国古代建筑的最高水平。',
            image: 'images/建筑结构.jpg'
        }
    };

    // 获取所有详情按钮
    const detailBtns = document.querySelectorAll('.detail-btn');
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('h2');
    const modalDescription = modal.querySelector('p');
    const modalImage = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-btn');

    // 为每个按钮添加点击事件
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.architecture-card');
            const title = card.querySelector('h2').textContent;
            const details = architectureDetails[title];

            modalTitle.textContent = details.title;
            modalDescription.textContent = details.description;
            modalImage.src = details.image;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 关闭按钮事件
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
}); 