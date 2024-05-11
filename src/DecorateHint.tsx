import { Card } from './model/card'
import React from 'react';
import { tsxUtils } from './utils/tsx/txs.utils'

export const decorateHint = ({ hint, front }: Card): React.ReactNode => tsxUtils.decorateWords(front, hint)