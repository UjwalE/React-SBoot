import React,{Component} from 'react';
import UserService from '../service/UserService';

class ListUsersComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            users: [],
            msg: null
        }
        this.refreshUsers = this.refreshUsers.bind(this);
        this.getCartFor = this.getCartFor.bind(this);
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserService.getAllUsers()
            .then(
                response => {
                    console.log(response);
                    this.setState({users: response.data})
                }
            )
    }

    getCartFor(id){
        this.props.history.push('/'+id+'/cart');
    }

    render() {
        return (
            <div align={'center'} className={'container'}>
                <h3>Users available</h3>
                <div className={'container'} style={{"width" : "50%"}} >
                    <table className={'table'} >
                        <thead className={'thead-light'}>
                        <tr>
                            <th >Id</th>
                            <th>Name</th>
                            <th>Cart</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user=>
                                    <tr key={user.userId}>
                                        <td>{user.userId}</td>
                                        <td>{user.userName}</td>
                                        <td>
                                            <button className={'btn btn-primary custom-btn'} onClick={()=> this.getCartFor(user.userId)}>
                                                Go
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
export default ListUsersComponent