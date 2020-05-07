import { getQueryString } from '@/utils';

/**
 * @returns {Boolean}
 */
export function deBug() {
  let params = getQueryString();
  // URL的路径部分，从根路径/开始
  let isActivity = /\/activity\//g.test(location.pathname);
  if (isActivity) {
    return params.debug ? true : false;
  }
}
