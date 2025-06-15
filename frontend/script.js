document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formMensagem');
  const lista = document.getElementById('listaMensagens');

  async function carregarMensagens() {
    const res = await fetch('/api/mensagens');
    const mensagens = await res.json();

    lista.innerHTML = '';
    mensagens.forEach(m => {
      const li = document.createElement('li');
      li.textContent = `${m.nome} disse: "${m.mensagem}" (abrir em ${m.dataEntrega})`;
      lista.appendChild(li);
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const dataEntrega = document.getElementById('dataEntrega').value;

    await fetch('/api/mensagens', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ nome, mensagem, dataEntrega })
    });

    form.reset();
    carregarMensagens();
  });

  carregarMensagens();
});