import React from 'react'
import { memo } from "react";
function MemoComp({name}) {
    console.log('rendering memo component')
  return (
    <div>
      {name}
    </div>
  )
}

export default memo(MemoComp);
