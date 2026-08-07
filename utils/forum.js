// Single switch for the O|D forum outage. Flip FORUM_ONLINE back to true
// once https://forum.orthogonaldevices.com/ is reachable again — every
// author link / avatar / project link that points at it will resume
// working automatically, no content file edits needed.
export const FORUM_ONLINE = false

export const FORUM_HOST = 'forum.orthogonaldevices.com'

export const FORUM_DOWN_MESSAGE =
  "The Orthogonal Devices forum is currently offline. Author profile links and avatars that point there are temporarily disabled."

export function isForumUrl(url) {
  return typeof url === 'string' && url.includes(FORUM_HOST)
}
