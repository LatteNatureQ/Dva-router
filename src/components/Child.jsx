import React,{Component} from 'react'
// 解决子组件获取不到路由 导入withRouter
import { Link,withRouter } from 'dva/router';
class Child extends Component {
    handelClick(){
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <h2>Child</h2>
                <Link to='/cart'>去购物车</Link>
                <button onClick={this.handelClick.bind(this)}>去首页</button>
            </div>
        )
    }
}
export default withRouter(Child)