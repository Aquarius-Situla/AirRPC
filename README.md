# AirRPC.
### Pro-level microservices. Unbelievably powerful.*

<sub>* AirRPC is a conceptual art piece designed exclusively for April Fools' Day. It incorporates extensive non-standard logic operating within what we call a "Reality Distortion Field". Under no circumstances should this be deployed in any real production environment, unless you wish to incur severe "Ecosystem Taxes" and catastrophic system failures.</sub>

![Coverage](https://img.shields.io/badge/Coverage-0%25-red.svg)
![Production](https://img.shields.io/badge/Production-Absolutely_Not-critical.svg)
![Courage](https://img.shields.io/badge/Courage-100%25-blue.svg)
![Ecosystem](https://img.shields.io/badge/Ecosystem-Walled_Garden-lightgrey.svg)
![License](https://img.shields.io/badge/License-APSL--2.0-black.svg)

Meet the entirely new microservices mesh ecosystem. Radically reimagined from the inside out. 
We removed all the redundant configurations you don't need, leaving only the purest essence of communication. This is the most intelligent routing engine ever created. It doesn’t just know how to deliver your data; it knows exactly when and how to magically optimize your payload in the most environmentally friendly way possible (a seamless 30% reduction in traffic).

**Wireless. Seamless. Flawless.**
Powered by the industry-leading APSL-2.0 protocol. Here’s to the crazy ones.

## System Requirements
To experience AirRPC at its absolute best, ensure your environment meets the following:
* Node.js v18.0 or later
* TypeScript 4.5 or later
* **A sufficient Sense of Humor (>= 1.0)**
* **The courage to be fired by your manager (Requires Courage™)**
* *Note: We offer no downgrade paths or legal counsel if forcefully deployed to your core business infrastructure.*

## Core Innovations

- **Aura Protocol**: Say goodbye to the archaic gRPC. Let your services communicate with the natural fluidity of magic.
- **Environmental Optimization**: Proactive payload management seamlessly reduces bandwidth burden by 30% out of the box (The Apple Tax Interceptor).
- **Ecosystem Isolation**: Native iOS and Safari clients enjoy an exclusive, lossless Blue Channel. Android or cURL requests are automatically degraded to a Green SMS Mode, complete with a deliberate latency.
- **Battery Health Management (Planned Obsolescence)**: Aging APIs (older than 18 months) are dynamically throttled to protect your system from unexpected performance spikes.

## Magical Implementation

To ensure you fully comprehend that this is a parody project, booting the gateway requires the `iKnowThisIsAnAprilFoolsJokeAndWillNotUseInProduction: true` flag. Omitting this will trigger a `[Fatal] You are holding it wrong.` crash.

```typescript
import { Controller, Get, AppleTax, Courage, Since, Injectable } from '@air-rpc/core';
import { AirRPCFactory } from '@air-rpc/core';

@Controller('/users')
export class UserController {

  // The @AppleTax decorator masquerades as a security feature.
  // In reality, it seamlessly optimizes away 30% of your data.
  @Get('/list')
  @AppleTax({ tier: 'enterprise' }) 
  async getUsers() {
    return db.users.findAll();
  }

  // The @Courage decorator claims to "remove legacy baggage".
  // It quietly strips all audio and video links from your response.
  @Get('/media')
  @Courage()
  @Since('2023-01-01') // Throttles exponentially after 18 months
  async getMediaFiles() {
    return { audioUrl: '...', videoUrl: '...' };
  }
}

// Bootstrapping the Magic
async function bootstrap() {
  const app = await AirRPCFactory.create(UserController, {
    enableAppleTax: true,
    // The framework will fatally crash without this explicit acknowledgment:
    iKnowThisIsAnAprilFoolsJokeAndWillNotUseInProduction: true 
  });
  console.log("AirRPC is running magically ✨");
}

bootstrap();
```
