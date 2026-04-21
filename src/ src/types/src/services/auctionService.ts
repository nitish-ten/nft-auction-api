import { Auction, CreateAuctionRequest, Bid } from '../types/auction';

let auctions: Map<string, Auction> = new Map();
let idCounter = 1;

export function createAuction(data: CreateAuctionRequest): Auction {
  const id = String(idCounter++);
  const newAuction: Auction = {
    id,
    nft: {
      id: String(idCounter++),
      name: data.nftName,
      owner: data.seller,
    },
    startingPrice: data.startingPrice,
    currentBid: data.startingPrice,
    currentBidder: null,
    seller: data.seller,
    status: 'open',
    createdAt: new Date().toISOString(),
    closedAt: null,
    winner: null,
  };
  auctions.set(id, newAuction);
  return newAuction;
}

export function getAuction(id: string): Auction | undefined {
  return auctions.get(id);
}

export function getAllAuctions(): Auction[] {
  return Array.from(auctions.values());
}

export function placeBid(bid: Bid): Auction | null {
  const auction = auctions.get(bid.auctionId);
  if (!auction) return null;
  if (auction.status !== 'open') return null;
  if (bid.amount <= auction.currentBid) return null;
  if (bid.bidder === auction.seller) return null;
  auction.currentBid = bid.amount;
  auction.currentBidder = bid.bidder;
  auctions.set(bid.auctionId, auction);
  return auction;
}

export function closeAuction(id: string): Auction | null {
  const auction = auctions.get(id);
  if (!auction) return null;
  if (auction.status !== 'open') return null;
  auction.status = 'closed';
  auction.closedAt = new Date().toISOString();
  auction.winner = auction.currentBidder;
  if (auction.winner) {
    auction.nft.owner = auction.winner;
  }
  auctions.set(id, auction);
  return auction;
}
