<script>
let currentPage = 1;

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

nextButton.addEventListener('click', () => {
    if (currentPage === 1) {
        page1.style.transform = 'rotateY(-180deg)';
        page2.style.transform = 'rotateY(0deg)';
        currentPage = 2;
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage === 2) {
        page1.style.transform = 'rotateY(0deg)';
        page2.style.transform = 'rotateY(-180deg)';
        currentPage = 1;
    }
});
</script>
