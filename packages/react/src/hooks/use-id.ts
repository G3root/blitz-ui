/* eslint-disable react-hooks/rules-of-hooks */
// https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts

import {
  useId as _useReactId,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
import { __DEV__, canUseDOM } from '../utils';

/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side.
 */
export const useSafeLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const useReactId = typeof _useReactId === 'function' ? _useReactId : undefined;

/**
 * Generates a unique ID. Uses React's useId if available.
 */
export function useId(defaultId?: string): string | undefined {
  if (useReactId) {
    const reactId = useReactId();
    if (defaultId) return defaultId;
    return reactId;
  }
  const [id, setId] = useState(defaultId);
  useSafeLayoutEffect(() => {
    if (defaultId || id) return;
    const random = Math.random().toString(36).substr(2, 6);
    setId(`id-${random}`);
  }, [defaultId, id]);
  return defaultId || id;
}
