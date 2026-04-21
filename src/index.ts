import express from 'express';
import { auctionRouter } from './routes/auctionRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use('/auction', auctionRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'NFT Auction API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
