import express from 'express';
import path from 'path';
import mensagensRoutes from './routes/mensagensRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../frontend')));
app.use('/api/mensagens', mensagensRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});