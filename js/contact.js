document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const modal = document.querySelector('.message-modal');
    const closeBtn = modal.querySelector('.close-btn');

    // 表单验证和提交
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单数据
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // 验证表单
        if (validateForm(formData)) {
            // 模拟表单提交
            submitForm(formData);
        }
    });

    // 表单验证函数
    function validateForm(data) {
        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showError('请输入有效的邮箱地址');
            return false;
        }

        // 验证电话号码格式（如果填写了的话）
        if (data.phone) {
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(data.phone)) {
                showError('请输入有效的手机号码');
                return false;
            }
        }

        // 验证留言内容长度
        if (data.message.length < 10) {
            showError('留言内容至少需要10个字符');
            return false;
        }

        return true;
    }

    // 显示错误信息
    function showError(message) {
        alert(message); // 这里可以改成更友好的提示方式
    }

    // 提交表单
    function submitForm(data) {
        // 这里应该是实际的表单提交逻辑
        // 模拟异步提交
        setTimeout(() => {
            showSuccessMessage();
            contactForm.reset();
        }, 1000);
    }

    // 显示成功消息
    function showSuccessMessage() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

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

    // 输入框焦点效果
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}); 