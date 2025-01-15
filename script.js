let currentPage = 1;

document.getElementById('next').addEventListener('click', () => {
    if (currentPage === 1) {
        document.getElementById('page1').style.transform = 'rotateY(-180deg)';
        currentPage = 2;
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage === 2) {
        document.getElementById('page1').style.transform = 'rotateY(0deg)';
        currentPage = 1;
    }
});
