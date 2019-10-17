import React,{Component} from 'react';
import { connect } from 'dva';
import Child from '../components/Child'
import { Link } from 'dva/router';
class User extends Component {
  handelToIndex = () => {
    this.props.history.push('/')
  }
  handelToCart = () => {
    this.props.history.push('/cart')
  }
  render(){
    return (
      <div>
        User
        <button onClick={this.handelToIndex}>去首页</button>
        <button onClick={this.handelToCart}>去购物车页</button>
        <Child></Child>
        <Link to='/'>去首页</Link>
      </div>
    )
  }
}
export default connect()(User);
