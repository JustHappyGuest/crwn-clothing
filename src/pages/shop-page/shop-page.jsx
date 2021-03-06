import React, {Component} from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview";

class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...rest}) => (<CollectionPreview key={id} {...rest}/>))
                }
            </div>
        );
    }
}

export default ShopPage;