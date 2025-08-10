
// Header fade on scroll + simple mobile nav hook if needed later
const header = document.querySelector('.site-header');
const onScroll = () => {
  if(window.scrollY > 12){ header.classList.add('is-solid'); }
  else{ header.classList.remove('is-solid'); }
};
document.addEventListener('scroll', onScroll);
onScroll();
