import React from "react";

export default function BlockRender({ blocks }) {
  console.log(blocks);
  return {blocks.map(block => {
    switch(block.name){
      case "core/paragraph":{
      <div>core paragraph</div>
      }
      default: 
      return null;
    }
  })};
}
