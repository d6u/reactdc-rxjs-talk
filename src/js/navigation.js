import { createHashHistory } from 'history';

const HASH_REGEX = /^#\/(\d+)$/;

export const history = createHashHistory({
  queryKey: false
});

export function currentIndex() {
  let match;
  if ((match = window.location.hash.match(HASH_REGEX))) {
    return parseInt(match[1]);
  } else {
    null;
  }
}
