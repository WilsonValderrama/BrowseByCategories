document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.category-item');

    let currentIndex = 0;
    const itemsPerView = 9; 

    function updateCarousel() {
        
        items.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + itemsPerView) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    updateCarousel(); 
});
