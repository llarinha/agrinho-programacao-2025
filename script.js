// Modal interativo ao clicar no produto
const produtos = document.querySelectorAll('.produto');
const modal = document.getElementById('modal');
const nome = document.getElementById('modal-nome');
const descricao = document.getElementById('modal-descricao');
const preco = document.getElementById('modal-preco');
const fechar = document.querySelector('.close');

produtos.forEach(produto => {
  produto.addEventListener('click', () => {
    nome.textContent = produto.dataset.nome;
    descricao.textContent = produto.dataset.descricao;
    preco.textContent = produto.dataset.preco;
    modal.style.display = 'block';
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
