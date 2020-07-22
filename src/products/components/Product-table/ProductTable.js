import React from 'react';
import './ProductTable.css'
import Card from "../../../shard/components/UIElements/Card";
import Button from "../../../shard/components/FormElements/Button";
import Status from "../Status/Status";


function ProductTable(props) {
    const products=props.products;
    const renderProducts= products.map(p=>(<tr key={p.id}>
            <td>{p.name}</td>
        <td><div className="product-table-main-status">
            <Status status={p.status_provider}
            ></Status>{p.status_progress}</div></td>
            <td>{p.resources}</td>
            <td>{p.price} $</td>
            <td>{p.complicity} %</td>
            <td>{p.startDate}</td>
            <td>{p.endDate}</td>
            <td>{p.offers} %</td>
        </tr>))

    return (
        <div>
            <div className='product-table-container'>
                <Card>
                    <div className='product-table-card-header'>
                        <h4>Projects</h4>
                        <Button type='button' size={'small'}>Create Projects</Button>
                    </div>
                    <div className="product-table-main">
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Resources</th>
                                <th>price</th>
                                <th>complicity</th>
                                <th>startDate</th>
                                <th>endDate</th>
                                <th>offers</th>
                            </tr>
                            </thead>
                          <tbody>
                          {renderProducts}
                          </tbody>
                        </table>
                    </div>
                </Card>
            </div>

        </div>
    );
}

export default ProductTable;
