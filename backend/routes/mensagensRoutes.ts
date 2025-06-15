import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const filePath = path.join(__dirname, '../data/mensagens.json');

router.get('/', (req, res) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  res.json(JSON.parse(data));
});

router.post('/', (req, res) => {
  const { nome, mensagem, dataEntrega } = req.body;
  const data = fs.readFileSync(filePath, 'utf-8');
  const mensagens = JSON.parse(data);

  const novaMensagem = {
    id: Date.now(),
    nome,
    mensagem,
    dataEntrega
  };

  mensagens.push(novaMensagem);
  fs.writeFileSync(filePath, JSON.stringify(mensagens, null, 2));
  res.status(201).json(novaMensagem);
});

export default router;