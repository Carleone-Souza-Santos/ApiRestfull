import { Router, Request, Response } from 'express';

const router = Router();

// Definindo a rota de teste
router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API funcionando!');
  console.log('API está funcionando');
});

export default router;
