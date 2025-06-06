// Exemplo simples de interatividade ao clicar em um produto

document.querySelectorAll('.produto').forEach(item => {
  item.addEventListener('click', () => {
    alert('Produto selecionado!');
  });
});
