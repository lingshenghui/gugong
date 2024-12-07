document.addEventListener('DOMContentLoaded', function() {
    // 图片数据
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.gallery-modal');
    const modalImg = modal.querySelector('img');
    const modalTitle = modal.querySelector('h3');
    const modalDesc = modal.querySelector('p');
    let currentIndex = 0;

    // 分类筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;
            
            // 筛选图片
            galleryItems.forEach(item => {
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

    // 图片点击查看大图
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const desc = this.querySelector('p').textContent;

            showModal(img.src, title, desc);
        });
    });

    // 显示模态框
    function showModal(src, title, desc) {
        modalImg.src = src;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

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

    // 上一张/下一张
    const prevBtn = modal.querySelector('.prev');
    const nextBtn = modal.querySelector('.next');

    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalImage();
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateModalImage();
    });

    function updateModalImage() {
        const item = galleryItems[currentIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const desc = item.querySelector('p').textContent;

        modalImg.src = img.src;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
    }

    // 键盘导航
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    // 加载更多功能
    const loadMoreBtn = document.querySelector('.load-more');
    let page = 1;

    loadMoreBtn.addEventListener('click', function() {
        // 这里可以添加实际的加载逻辑
        page++;
        // 模拟加载更多图片
        loadMoreBtn.textContent = '加载中...';
        setTimeout(() => {
            loadMoreBtn.textContent = '加载更多';
        }, 1000);
    });
}); 