# Oguntunde Caleb Fiyinfoluwa

Systems and Infrastructure Engineer

Contact
payouk.mystre@gmail.com
github.com/oasisMystre
x.com/onisaibogu
desk0.app

## About

Systems and infrastructure engineer specializing in low level systems in Rust and C++, real time networking protocols, and high throughput financial data pipelines. Experienced in designing validator-level blockchain ingestion systems, time-series analytical databases, and low latency inter-process communication architectures.

## Projects

### Desk0

Open source remote desktop and endpoint management infrastructure
Links: [desk0.app] [github.com/oasisMystre/desk0]

Desk0 is an open source remote desktop and endpoint management platform written in Rust. Features a bidirectional WebSocket proxy relay for real time stream routing and an IPC interserver for communication between sessions.

WebSocket Relay Proxy
Bidirectional stream routing
Built a bidirectional proxy server using axum, tokio, and tokio-rustls to connect viewers and remote agents over encrypted WebSockets across network boundaries without opening inbound ports on client endpoints.

IPC Interserver
Cross-session communication
Engineered an IPC interserver to coordinate messaging, input dispatch, and state synchronization between background management services and active desktop sessions.

### Rhiva

High frequency Solana trading terminal and liquidity aggregator
Links: [rhiva.fun] [github.com/oasisMystre/carbon] [github.com/sevenlabs-hq/carbon]

Founding developer and solo DevOps engineer for Rhiva, designing the architecture from an early liquidity aggregator into an on-chain trading terminal handling real-time DEX state across the Solana network.

Yellowstone Geyser Ingestion
Direct validator gRPC streaming
Replaced standard rate-limited HTTP JSON-RPC connections with direct Yellowstone Geyser gRPC validator feeds. Captured real-time slot commitments and transaction executions directly from the validator gossip network, reducing transaction confirmation notification latency from 2.5 seconds down to sub-300 milliseconds.

ClickHouse Storage Engine
Real-time analytical time-series cluster
Designed and maintained a production ClickHouse database cluster processing sustained bursts of over 2,500 on-chain events per second. Delivered sub-15 millisecond query response times for live orderbook depth, volume profiles, and candlestick aggregation across 50 active liquidity pools.

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
Complete rewrite of the RustDesk client as a headless application. Operates as an unattended background service to accept incoming connections, capture display output, and handle input injection without needing a local user interface, reducing runtime memory footprint by over 60 percent.

rustdesk-admin
Outgoing only client implementation
Specialized RustDesk fork tailored exclusively for outbound operator management. Strips away inbound listener services to eliminate open port exposure and create a focused administrative client.

### Solana Deeplink Adapter

Mobile wallet integration protocol
Links: [github.com/oasisMystre/solana-wallets-vue]
A protocol-level wallet adapter enabling mobile dApps, React Native apps, and mobile web browsers to interact with Phantom, Solflare, and Backpack wallets via mobile deeplinks where browser extension injection is not available.

### Motus

Cross-platform fitness application
Links: [motus.fitness] [github.com/oasisMystre/motus]
React Native mobile application built in a Turborepo monorepo with custom workout tracking logic and responsive styles.

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
Created Desk0 remote desktop infrastructure, built Solana mobile protocol integrations, and deployed production Telegram bot microservices.
