// DOM이 완전히 로드된 후 실행되도록 감싸는 것이 안전합니다.
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openModal');
    const modal = document.getElementById('modalContainer');
    const closeBtn = document.getElementById('closeModal');

    if (!openBtn || !modal || !closeBtn) return; // 요소가 없으면 실행 중단

    // PRODUCT 버튼 클릭 시
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // 이벤트 전파 방지
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    });

    // 닫기 버튼 클릭 시
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        // 클릭한 대상이 정확히 검은 배경(modalContainer)일 때만 닫기
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});