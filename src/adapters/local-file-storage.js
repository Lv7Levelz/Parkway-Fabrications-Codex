import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { randomBytes } from 'node:crypto';

/** Development-only private storage adapter. It deliberately exposes no URL. */
export class LocalPrivateFileStorage {
  constructor(directory) { this.directory = directory; }
  async put({ reference, extension, bytes }) {
    await mkdir(this.directory, { recursive: true, mode: 0o700 });
    const key = `${reference}-${randomBytes(8).toString('hex')}${extension}`;
    await writeFile(join(this.directory, key), bytes, { mode: 0o600 });
    return { key };
  }
}
