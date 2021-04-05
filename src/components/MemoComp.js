import React from 'react';

function MemoComp({name}) {
  console.log('Rendering Memo Component');
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp); // React.memo() is used for making pure component for functional component. Pure Components are clas based though.
