// Type definitions for muri
// Project: muri
// Definitions by: Jarom Loveridge https://github.com/jloveridge
export = Muri;

declare function Muri(uri: string): Muri.ParsedUri;

declare namespace Muri {
    interface ParsedUri {
        db: string;
        hosts: Host[];
        auth?: {user: string; pass?: string;};
        options?: any;
    }

    interface DefaultHost {
        host: string;
        port: number;
    }

    interface SocketHost {
        ipc: string;
    }

    type Host = DefaultHost | SocketHost;
}
