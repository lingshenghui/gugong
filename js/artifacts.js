document.addEventListener('DOMContentLoaded', function() {
    // 文物详细信息数据
    const artifactDetails = {
        '金佛像': {
            description: '这尊金佛像是清代精品文物，采用纯铜鎏金工艺制作，造型优美，工艺精湛。',
            era: '清代 (1644-1911)',
            material: '铜鎏金',
            size: '高85厘米，重约50千克'
        },
        '唐卡壁画': {
            description: '17世纪绘制的大型唐卡壁画，以传统矿物颜料绘制，描绘佛教故事场景。',
            era: '17世纪',
            material: '矿物颜料、布面',
            size: '高3米，宽2米'
        },
        '金刚杵': {
            description: '明代皇家供奉的金刚杵，由纯金打造，是藏传佛教重要法器之一。',
            era: '明代 (1368-1644)',
            material: '纯金',
            size: '长30厘米'
        }
    };

    // 分类筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const artifactItems = document.querySelectorAll('.artifact-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active类
            this.classList.add('active');

            const category = this.dataset.category;
            
            artifactItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 模态框功能
    const modal = document.querySelector('.artifact-modal');
    const modalImage = modal.querySelector('.modal-image img');
    const modalTitle = modal.querySelector('h2');
    const modalDescription = modal.querySelector('.description');
    const modalEra = modal.querySelector('.era');
    const modalMaterial = modal.querySelector('.material');
    const modalSize = modal.querySelector('.size');

    artifactItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const imgSrc = this.querySelector('img').src;
            const details = artifactDetails[title] || {
                description: '详细信息正在完善中...',
                era: '年代待考',
                material: '材质待考',
                size: '尺寸待考'
            };

            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = details.description;
            modalEra.textContent = `年代：${details.era}`;
            modalMaterial.textContent = `材质：${details.material}`;
            modalSize.textContent = `尺寸：${details.size}`;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 关闭模态框
    const closeBtn = modal.querySelector('.close-btn');
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