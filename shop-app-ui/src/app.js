import React from 'react';
import './app.css';
import ShoppingApp from './components/ShoppingApp';

class Sample extends React.Component{
    render() {
        return(
            <div align={"center"} className={'container'}>
                <ShoppingApp/>
            </div>
        );
    }
}
export default Sample;