// Exemplo de interatividade simples ao clicar em um produto
document.querySelectorAll('.produto').forEach(item => {
  item.addEventListener('click', () => {
    alert('Você clicou em um produto!');
  });
});
