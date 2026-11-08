# Oguntunde Caleb Fiyinfoluwa

Systems and Infrastructure Engineer

Contact
Email: payouk.mystre@gmail.com
GitHub: github.com/oasisMystre
X: x.com/onisaibogu
Desk0: desk0.app

## About

Systems engineer focused on low level infrastructure in Rust and C++, real time networking, and high frequency financial data pipelines on the Solana blockchain. Over 4 years full stack experience, 2 years systems programming, and 1 year production DevOps.

## Projects

### Desk0

Open source remote desktop and endpoint management infrastructure
Links: [desk0.app] [github.com/oasisMystre/desk0]

Desk0 is an open source remote desktop and endpoint management platform written in Rust. Features a bidirectional WebSocket proxy server for real time stream routing and an IPC interserver for communication between sessions.

WebSocket Relay Proxy
Bidirectional stream routing
Built a bidirectional proxy server using axum, tokio, and tokio-rustls to connect viewers and remote agents over secure WebSockets across network boundaries without opening inbound ports.

IPC Interserver
Cross-session communication
Engineered an IPC interserver to coordinate messaging, input dispatch, and state synchronization between background management services and active desktop sessions.

### Rhiva

High frequency Solana trading terminal and liquidity aggregator
Links: [rhiva.fun] [github.com/oasisMystre/carbon] [github.com/sevenlabs-hq/carbon]

Founding developer and solo DevOps engineer from initial aggregator to high frequency trading terminal.

Yellowstone Geyser Ingestion
Direct validator gRPC streaming
Captured real time slot commitments, account modifications, and transaction outcomes directly from validator Yellowstone gRPC feeds without HTTP RPC rate limits.

ClickHouse Storage Engine
Real-time analytical time-series cluster
Maintained append-only ClickHouse cluster for sub-millisecond query performance on live depth of market, volume profiles, candle aggregations, and transaction histories.

Carbon Indexing Framework Fork
Forked from sevenlabs-hq/carbon
Forked the upstream carbon framework from sevenlabs-hq/carbon to introduce ClickHouse batch ingestion sinks capable of absorbing high network congestion without backpressure. Built an atomic confirmation notification service delivering instant alerts upon on-chain transaction finality.

Protocol Math and AMM Decoders
On-chain state decoding
Implemented mathematical decoders for Solana liquidity protocols including Orca Whirlpools tick array traversal and sqrt price calculations, Meteora DLMM discrete price bin liquidity and volatility accumulators, Raydium CLMM and AMM pools, and Pyth Network price oracle feeds.

### Headless RustDesk

Derivative fork of RustDesk for headless and outbound only architectures
Links: [github.com/oasisMystre/rustdesk-client] [github.com/oasisMystre/rustdesk-admin] [github.com/rustdesk/rustdesk]

A derivative fork of the upstream rustdesk/rustdesk repository designed to eliminate graphical UI dependencies and implement a lightweight headless architecture for server environments and administrative workflows.

rustdesk-client
Headless incoming remote desktop agent
Complete rewrite of the RustDesk client as a headless application. Operates as an unattended background service to accept incoming connections, capture display output, and handle input injection without needing a local user interface.

rustdesk-admin
Outgoing only client implementation
Specialized RustDesk fork tailored exclusively for outbound operator management. Strips away inbound listener services to create a secure, focused administrative client.

### Solana Deeplink Adapter

Mobile wallet integration protocol
Links: [github.com/oasisMystre/solana-wallets-vue]
Wallet adapter enabling mobile dApps and React Native apps to interact with Phantom, Solflare, and Backpack wallets via mobile deeplinks where browser extension injection is unavailable.

### djira

Django async WebSocket framework
Links: [github.com/oasisMystre/djira] [pypi.org/project/drf-sio/] [github.com/oasisMystre/jira]
Author of drf-sio on PyPI. Connects Django REST Framework with async Socket.IO servers. Maps standard REST actions over WebSocket streams, providing model observers, Django signal handlers, pagination, and Redis PubSub backend.

### Trustmint

Web3 verification monorepo
Links: [github.com/oasisMystre/trustmint]
Core monorepo containing libraries, token logic, and verification binaries for trustmint.fun.

### Motus

Cross-platform fitness application
Links: [motus.fitness] [github.com/oasisMystre/motus]
React Native mobile application built in a Turborepo monorepo with custom workout tracking logic and responsive styles.

### Umbrella

Prioritized Solana token transfers
Links: [github.com/oasisMystre/umbrella]
Utility for transferring Solana SPL tokens with priority fee optimization.

### LyricMarc

Synchronized song lyrics mobile app
Links: [github.com/oasisMystre/lyricmarc]
Flutter mobile application for lyric retrieval, real-time scrolling, and track identification via music APIs.

### Telegram Autonomous Bots

Production bot microservices
Links: [github.com/oasisMystre/memeflipai] [github.com/oasisMystre/MuseAIBot] [github.com/oasisMystre/profittown] [github.com/oasisMystre/onboarding-bot]

MemeFlip AI
Generative meme creation system
Full stack application pairing a React and Vite interface with an asynchronous Telegram bot processing backend.

MuseAIBot
Audio model music generation
Autonomous bot leveraging the Sona audio model to generate music tracks directly from user text prompts.

ProfitTown
Payment and accounting engine
High performance ledger and transaction processing bot built on the Bun JavaScript runtime.

Onboarding Bot
Workflow automation pipeline
Automated attendee onboarding and webinar engagement system.

## Skills

Systems Programming
Rust, C, C++, Assembly, Win32 APIs, Systems Architecture, Network Protocols

Data and Web3
Solana Runtime, Yellowstone Geyser gRPC, ClickHouse, Borsh, Orca Whirlpools, Raydium, Meteora DLMM, Pyth Network, Redis

Full Stack and Mobile
TypeScript, Python, Dart, React, React Native, Vite, Flutter, Django, Socket.IO, Bun, Docker

## Experience

Rhiva
Founding Developer and Solo DevOps Engineer
Engineered the trading terminal and liquidity aggregation infrastructure. Implemented Yellowstone Geyser validator feeds, managed the ClickHouse time-series pipeline, forked the Carbon indexing framework, and built AMM mathematical decoders.

Motus
Freelance Mobile Engineer
Developed mobile fitness application in React Native within a Turborepo monorepo setup with shared state management and offline synchronization.

Independent Projects
Systems and Full Stack Engineer
Created Desk0 remote desktop infrastructure, authored drf-sio on PyPI, and deployed production Telegram bot microservices.
