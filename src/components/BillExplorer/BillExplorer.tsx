import React from 'react';
import {BillType} from "../../types";


type BillExplorerProps = {
  bill: BillType[];
  headers: string[];
  factKeys: string[];
}

const BillExplorer: React.FC<BillExplorerProps> = (props) => {
  return (
    <div>BillExplorer</div>
  );
};

export default BillExplorer;
