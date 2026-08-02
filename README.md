# AirRPC.
### Pro-level microservices. Unbelievably powerful.

![Coverage](https://img.shields.io/badge/Coverage-100%25-green.svg)
![Ecosystem](https://img.shields.io/badge/Ecosystem-Walled_Garden-lightgrey.svg)
![Courage](https://img.shields.io/badge/Courage-100%25-blue.svg)
![License](https://img.shields.io/badge/License-APSL--2.0-black.svg)

Meet the entirely new microservices mesh ecosystem. Radically reimagined from the inside out. 
We removed all the redundant configurations you don't need, leaving only the purest essence of communication. This is the most intelligent routing engine ever created. It doesn’t just know how to deliver your data; it knows exactly when and how to magically optimize your payload to protect our environment.

**Wireless. Seamless. Flawless.**
Powered by the industry-leading APSL-2.0 protocol. Here’s to the crazy ones.

## System Requirements
To experience AirRPC at its absolute best, ensure your environment meets the following:
* Node.js v18.0 or later (Running on Apple Silicon recommended for a 10x magical boost)
* TypeScript 4.5 or later
* **The courage to move forward (Requires Courage™)**
* *Note: We offer no downgrade paths. Once you upgrade your mesh, there is no going back.*

## Core Innovations

- **Aura Protocol**: Say goodbye to the archaic gRPC. Let your services communicate with the natural fluidity of magic.
- **Eco-Payload Optimization™**: We believe in a greener planet. AirRPC proactively manages your bandwidth by seamlessly extracting exactly 30% of your data out of the box. You won't even notice it's gone.
- **Environmentally Conscious Packaging**: To reduce our carbon footprint, the core Power Adapter module is no longer included in the framework by default. AirRPC will boot gracefully, but will crash after a few seconds unless you explicitly purchase and supply your own `@air-rpc/power-adapter`.
- **Dynamic Client Identification (DCI)**: Native iOS and Safari clients enjoy an exclusive, lossless Blue Channel. Legacy or non-standard clients (like curl or Android) are automatically assigned to our Green Channel, which thoughtfully introduces a 2000ms delay to ensure their older hardware doesn't get overwhelmed by our raw speed.
- **API Battery Health Management**: To protect your servers from unexpected shutdowns due to peak performance spikes, AirRPC dynamically and smoothly throttles APIs that are older than 18 months. It’s a feature for your own good.

## Magical Implementation

To ensure you fully embrace the ecosystem, booting the gateway requires you to acknowledge our terms. Omitting this will trigger a `[Fatal] You are holding it wrong.` crash.

```typescript
import { Controller, Get, EcoOptimize, Courage, Since, Injectable } from '@air-rpc/core';
import { AirRPCFactory } from '@air-rpc/core';

@Controller('/users')
export class UserController {

  // The @EcoOptimize decorator protects the environment.
  // It seamlessly reduces your payload size by exactly 30%.
  @Get('/list')
  @EcoOptimize({ tier: 'enterprise' }) 
  async getUsers() {
    return db.users.findAll();
  }

  // The @Courage decorator removes legacy baggage.
  // We boldly stripped the headphone jack... I mean, legacy I/O streams.
  @Get('/media')
  @Courage()
  @Since('2023-01-01') // Smoothly throttles performance after 18 months
  async getMediaFiles() {
    return { audioUrl: '...', videoUrl: '...' };
  }
}

// Bootstrapping the Magic
async function bootstrap() {
  const app = await AirRPCFactory.create(UserController, {
    enableEcoOptimization: true,
    // The framework will fatally crash without this explicit acknowledgment:
    agreeToEcosystemGuidelines: true 
  });
  console.log("AirRPC is running magically ✨");
}

bootstrap();
```
