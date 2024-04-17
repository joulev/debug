"use client";

import { useEffect } from 'react';
import { refresh } from './refresh-action';

export function Refresh() {
  useEffect(() => {
    const interval = setInterval(() => refresh(), 5 * 1000);
    return () => clearInterval(interval);
  }, []);
  return null;
}
