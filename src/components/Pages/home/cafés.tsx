 import { Minus, Plus } from 'phosphor-react';
import { QuantityControl } from './ListaDeCafés'



import React from 'react';

export function AdicionarItem() {
    return (
  <QuantityControl>
              <button type="button"><Minus size={17} weight='bold' /></button>
              <span>1</span>
              <button type="button"><Plus size={17} weight='bold'/></button>
    </QuantityControl>
 )
}

