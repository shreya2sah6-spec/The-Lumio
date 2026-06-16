'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityProvider() {
  useEffect(() => {
    Clarity.init('x7zgwy6p0s');
  }, []);

  return null;
}