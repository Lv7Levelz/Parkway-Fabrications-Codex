/**
 * Persistence contract used by the HTTP layer. Production can replace this
 * adapter with Supabase without changing validation or page rendering.
 */
export class SubmissionRepository {
  async create(_submission) { throw new Error('Not implemented'); }
  async list() { throw new Error('Not implemented'); }
  async findByReference(_reference) { throw new Error('Not implemented'); }
  async updateStatus(_reference, _status) { throw new Error('Not implemented'); }
}
