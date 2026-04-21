export interface NFT {
  id: string;
  name: string;
  owner: string;
}

export interface Auction {
  id: string;
  nft: NFT;
  startingPrice: number;
  currentBid: number;
  currentBidder: string | null;
  seller: string;
  status: 'open' | 'closed';
  createdAt: string;
  closedAt: string | null;
  winner: string | null;
}

export interface Bid {
  auctionId: string;
  bidder: string;
  amount: number;
}

export interface CreateAuctionRequest {
  nftName: string;
  seller: string;
  startingPrice: number;
}

export interface PlaceBidRequest {
  bidder: string;
  amount: number;
}
