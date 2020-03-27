import React, {Component} from 'react'
import UserService from '../service/UserService';

class ListCartComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.userId,
            products: [],
            userName: '',
            total: ''
        }
        this.refreshCart = this.refreshCart.bind(this)
        this.updateQuantity = this.updateQuantity.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.refreshCart(this.state.id);
    }

    updateQuantity(count) {
        alert(count);
    }



    handleChange(e) {
        let count = e.target.value;
        if(count > 10){
            alert("Cannot add more that 10");
            this.refreshCart(this.state.id);
            return;
        }
        let index = e.target.id ;
        let prod = this.state.products;
        prod[index].quantity = count;
        prod[index].sum = prod[index].quantity * prod[index].price;
        let newTotal = 0;
        prod.forEach(
            p => newTotal+=p.sum
        )
        this.setState({products: prod,total: newTotal});
    }

    refreshCart(id) {
        UserService.getCartForUser(id)
            .then(
                response => {
                    console.log(response.data);
                    this.setState({
                        products: response.data.products,
                        userName: response.data.user,
                        total: response.data.total
                    });
                }
            );
    }

    getRowClass(quantity) {

        if(quantity === 0) {
            return "tr-empty-row"
        }
    }

    render() {
        return (
            <div>
                <h4>Cart for {this.state.userName}</h4>
                <div>
                    <table className={'table table-bordered table-hover'}>
                        <thead className={'thead-dark'}>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sum</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                (product,index) =>
                                    <tr key={index} className={this.getRowClass(product.quantity)}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                        <input id={index} type={'number'} min={0} max={10}
                                               className={'form-group form-control'}
                                               value={product.quantity} onChange={this.handleChange}/>
                                               {/*<CounterInput value={product.quantity} onChange={this.handleChange}/>*/}
                                        </td>
                                        <td>{product.sum}</td>
                                    </tr>
                            )
                        }
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td>{this.state.total}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCartComponent;