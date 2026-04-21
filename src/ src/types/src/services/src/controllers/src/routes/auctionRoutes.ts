import { Router } from 'express';
import * as auctionController from '../controllers/auctionController';

export const auctionRouter = Router();

// GET all auctions
auctionRouter.get('/', auctionController.getAllAuctions);

// GET single auction by ID
auctionRouter.get('/:id', auctionController.getAuction);

// POST create new auction
auctionRouter.post('/create', auctionController.createAuction);

// POST place a bid
auctionRouter.post('/:id/bid', auctionController.placeBid);

// POST close an auction
auctionRouter.post('/:id/close', auctionController.closeAuction);
