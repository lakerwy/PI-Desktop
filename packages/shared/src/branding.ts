/**
 * User-visible product identity.
 *
 * Kept out of `protocol.ts` on purpose: that file carries `APP_VERSION`, which
 * every upstream release commit edits, so anything placed beside it conflicts
 * on each version bump. `APP_NAME` stays the installation identity — it names
 * the data directory, the single-instance lock, crash dumps, and the update
 * feed — so only the display string is ever rebranded here.
 */
export const APP_DISPLAY_NAME = "芯博agent";
