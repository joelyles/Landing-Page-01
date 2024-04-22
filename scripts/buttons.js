const learnMore = document.querySelector('.learn-more');
const pageTwo = document.querySelector('.page-2');

learnMore.addEventListener('click', () => {
    pageTwo.scrollIntoView();
})