import React, { useState} from 'react';
import Search from "../components/Search/Search";
import ProductTable from "../components/Product-table/ProductTable";
import productsData from "../../Data/Products";

function Products(props) {
    const [value,setValue]=useState("");
    let fProducts=productsData.filter(item => {
        if (!value) return true
        if (item.name.toLowerCase().includes(value.toLowerCase())
            ||item.status_progress.toLowerCase().includes(value.toLowerCase())
            ||item.price.toString()===value || item.resources.toString()===value ||item.complicity.toString()===value
        ) {
            return true
        }

    });

    // let ItemsTable=()=>(<ProductTable products={fProducts}></ProductTable>)
    // search by input
    const onChangeSearch=(e)=>{
         setValue(e.target.value)
        fProducts=productsData.filter(item => {
            if (!value) return true
            if (item.name.includes(e.target.value) ) {
                return true
            }

        })
    }


    return (
        <div>
            <div className="products-header">
                <Search
                    onChange={onChangeSearch}></Search>
            </div>
            <div className="products-table">
                <ProductTable products={fProducts}></ProductTable>
            </div>
        </div>
    );
}

export default Products;
