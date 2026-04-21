import { Request, Response } from 'express';
import * as auctionService from '../services/auctionService';
import { CreateAuctionRequest, PlaceBidRequest } from '../types/auction';

export function createAuction(req: Request, res: Response): void {
  const body: CreateAuctionRequest = req.body;
  if (!body.nftName || !body.seller || !body.startingPrice) {
    res.status(400).json({ error: 'nftName, seller and startingPrice are required' });
    return;
  }
  const auction = auctionService.createAuction(body);
  res.status(201).json(auction);
}

export function getAllAuctions(req: Request, res: Response): void {
  const auctions = auctionService.getAllAuctions();
  res.status(200).json(auctions);
}

export function getAuction(req: Request, res: Response): void {
  const { id } = req.params;
  const auction = auctionService.getAuction(id);
  if (!auction) {
    res.status(404).json({ error: 'Auction not found' });
    return;
  }
  res.status(200).json(auction);
}

export function placeBid(req: Request, res: Response): void {
  const { id } = req.params;
  const body: PlaceBidRequest = req.body;
  if (!body.bidder || !body.amount) {
    res.status(400).json({ error: 'bidder and amount are required' });
    return;
  }
  const auction = auctionService.placeBid({
    auctionId: id,
    bidder: body.bidder,
    amount: body.amount,
  });
  if (!auction) {
    res.status(400).json({ error: 'Bid failed. Auction may be closed or bid too low' });
    return;
  }
  res.status(200).json(auction);
}

export function closeAuction(req: Request, res: Response): void {
  const { id } = req.params;
  const auction = auctionService.closeAuction(id);
  if (!auction) {
    res.status(400).json({ error: 'Could not close auction' });
    return;
  }
  res.status(200).json(auction);
}
