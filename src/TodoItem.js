import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }

    handleClick() {
        const {deleteme,index} = this.props;
        //调用父组件传过来的方法
        deleteme(index);
    }
}

export default TodoItem; 