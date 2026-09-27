import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { SubmissionRepository } from './submission-repository.js';

export const ENQUIRY_STATUSES = ['New', 'Contacted', 'Quoted', 'Won', 'Lost', 'Archived'];

export class JsonlSubmissionRepository extends SubmissionRepository {
  constructor(filePath) { super(); this.filePath = filePath; }

  async create(submission) {
    await mkdir(dirname(this.filePath), { recursive: true });
    await appendFile(this.filePath, `${JSON.stringify(submission)}\n`, { mode: 0o600 });
    return submission;
  }

  async list() {
    try {
      return (await readFile(this.filePath, 'utf8')).trim().split('\n').filter(Boolean).map(JSON.parse).reverse();
    } catch (error) {
      if (error.code === 'ENOENT') return [];
      throw error;
    }
  }

  async findByReference(reference) {
    return (await this.list()).find(item => item.id === reference) || null;
  }

  async updateStatus(reference, status) {
    if (!ENQUIRY_STATUSES.includes(status)) throw new Error('invalid_status');
    const records = (await this.list()).reverse();
    const record = records.find(item => item.id === reference);
    if (!record) return null;
    record.status = status;
    record.updatedAt = new Date().toISOString();
    await writeFile(this.filePath, `${records.map(JSON.stringify).join('\n')}\n`, { mode: 0o600 });
    return record;
  }
}
