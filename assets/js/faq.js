
// FAQ accordion (all closed by default; standardized color via CSS on .faq-q)
document.querySelectorAll('.faq-item .faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    item.classList.toggle('open');
    const ans = item.querySelector('.faq-a');
    if(item.classList.contains('open')){
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }else{
      ans.style.maxHeight = null;
    }
  });
});
