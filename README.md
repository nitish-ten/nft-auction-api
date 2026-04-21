# NFT Auction REST API
### CN6035 - Mobile and Distributed Systems

A RESTful API for managing NFT auctions, built with Node.js, Express and TypeScript.

## Concepts Used
- **Week 2**: BPMN diagram models the auction process flow
- **Week 3**: RESTful API built with Node.js, Express and TypeScript
- **Week 9**: NFT auction concept from the Algorand blockchain lab

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/auction` | Get all auctions |
| GET | `/auction/:id` | Get auction by ID |
| POST | `/auction/create` | Create new auction |
| POST | `/auction/:id/bid` | Place a bid |
| POST | `/auction/:id/close` | Close auction |

## How to Run

```bash
npm install
npm run build
npm run dev
```

## Example Usage

### Create an Auction
```json
POST /auction/create
{
  "nftName": "My NFT Art",
  "seller": "alice",
  "startingPrice": 100
}
```

### Place a Bid
```json
POST /auction/:id/bid
{
  "bidder": "bob",
  "amount": 150
}
```

### Close Auction
```
POST /auction/:id/close
```

## Project Structure
```
src/
├── index.ts              # Entry point
├── types/
│   └── auction.ts        # TypeScript types
├── services/
│   └── auctionService.ts # Business logic
├── controllers/
│   └── auctionController.ts # Request handlers
└── routes/
    └── auctionRoutes.ts  # API routes
```
