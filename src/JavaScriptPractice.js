//type rafc  and the enter

import React from 'react';

const fruits = ['grape', 'orange', 'mango', 'melon'];

const JavaScriptPractice = () => {
  return (
    <div>
      <p>Welcome to Canada!</p>
      {/* {fruits.map((favourite)=>{return favourite})} */}
      {/* //another way work the same with no{} */}
      {/* + " " or .join(" ") make space or use  */}
      {/* {fruits.map((favourite)=>favourite + " ,")} */}

      {/* filter function --take mango out*/}
      {fruits.filter((selectFruits)=> selectFruits !== 'mango').join(' ,')}

      {/* {fruits.filter((x) => x !== 'mango').join(' ')} */}
    </div>
  );
};

export default JavaScriptPractice;
