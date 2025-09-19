import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes

// Create Product
app.post('/products', async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const newProduct = await prisma.product.create({ data: { title } });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Get All Products
app.get('/products', async (_req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Toggle Completed
app.put('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updated = await prisma.product.update({
      where: { id: Number(id) },
      data: { completed: true }, // Or toggle based on current status
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Delete Product
app.delete('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id: Number(id) } });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
