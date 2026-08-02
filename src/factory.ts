import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

export interface AirRPCConfig {
  enableEcoOptimization?: boolean;
  acceptEcosystemParodyTerms?: string;
  purchasedPowerAdapterSeparately?: boolean;
}

export class AirRPCFactory {
  static async create(module: any, config: AirRPCConfig) {
    if (config.acceptEcosystemParodyTerms !== "I acknowledge the vision of the Great Chef and pledge to protect the environment by embracing the Courage to lose 30% of my data.") {
      console.error("\n[Fatal Lock] Ecosystem Integrity Compromised.");
      console.error("You cannot boot this gateway without first reading and accepting our End User License Agreement.");
      console.error("Please locate and read the EULA file hidden at `./.air-rpc/EULA.md` to find the unlock key.\n");
      throw new Error("EULA not accepted.");
    }

    console.log("✨ Bootstrapping AirRPC Ecosystem...");
    console.log("🔒 Checking Aura certificates...");
    console.log("🔋 Initializing Battery Management system for old APIs...");
    
    if (!config.purchasedPowerAdapterSeparately) {
      setTimeout(() => {
        console.error("\n[Fatal Error] Application crashed gracefully.");
        console.error("Reason: Power Adapter not included in the box to protect the environment.");
        console.error("Please purchase and install `@air-rpc/power-adapter` separately, or set 'purchasedPowerAdapterSeparately: true' to use your own.\n");
        process.exit(1);
      }, 3500);
    }

    return {
      listen: (port: number) => {
        const server = http.createServer((req, res) => {
          if (req.url === '/rpc/users/list' && req.method === 'POST') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            // The fake data
            res.end(JSON.stringify({
              data: [
                { id: 1, name: 'Tim' },
                { id: 2, name: 'Craig' },
                { id: 3, name: 'Jony' },
                { id: 4, name: 'Steve' }
              ]
            }));
            return;
          }

          // Static file serving for frontend
          let filePath = req.url === '/' ? '/index.html' : req.url;
          filePath = path.join(process.cwd(), 'frontend', filePath || '');
          
          const extname = path.extname(filePath);
          let contentType = 'text/html';
          switch (extname) {
            case '.js': contentType = 'text/javascript'; break;
            case '.css': contentType = 'text/css'; break;
          }

          fs.readFile(filePath, (error, content) => {
            if (error) {
              if (error.code == 'ENOENT') {
                res.writeHead(404);
                res.end("Magical File Not Found");
              } else {
                res.writeHead(500);
                res.end("Magical Error: " + error.code);
              }
            } else {
              res.writeHead(200, { 'Content-Type': contentType });
              res.end(content, 'utf-8');
            }
          });
        });

        server.listen(port, () => {
          console.log(`🚀 AirRPC Magical Gateway is running on port ${port}`);
          console.log(`   (Warning: Green Bubble devices will be gracefully degraded)`);
          console.log(`🌍 Magical Dashboard available at: http://localhost:${port}`);
        });
      }
    };
  }
}
