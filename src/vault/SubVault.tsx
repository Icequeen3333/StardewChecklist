import BundleObject from '../bundle_Part.tsx'
import React, {useState, useEffect} from 'react'

const Vault = () => {
    const [VaultBundle, changeState] = useState([
        {
            key: 0,
            id: 0,
            number: 2500,
            name: "Gold",
            obtain: "Sell Items",
            isOwned: false
        },
        {
            key: 1,
            id: 0,
            number: 5000,
            name: "Gold",
            obtain: "Sell Items",
            isOwned: false
        },
        {
            key: 2,
            id: 0,
            number: 10000,
            name: "Gold",
            obtain: "Sell Items",
            isOwned: false
    
        },
        {
            key: 3,
            id: 0,
            number: 25000,
            name: "Gold",
            obtain: "Sell Items",
            isOwned: false
        },
    ])
    
    
    const modifyVaultOwned = (key) => {
        const updatedBundle = VaultBundle.map((item) => {
            if (item.key === key) {
              const updatedItem = {
                ...item,
                isOwned: !item.isOwned,
              };
      
              return updatedItem;
            }
      
            return item;
          });

        changeState(updatedBundle);
    }
    

    const bundles = VaultBundle.map(bundle =>
        <BundleObject bundle = {bundle} setOwnedState = {modifyVaultOwned}/>)
    console.log(bundles)
        return(
        <div>
            Vault Bundle
            <>
                {bundles}
            </>
        </div>
        
    );
}

export default Vault;