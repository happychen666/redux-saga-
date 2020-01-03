import React ,{Fragment} from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI =(props) => {
    return (
        <Fragment>
        <div style={{ margin: '10px' }}>
            <Input placeholder="Basic usage" value={props.inputValue} style={{ width: '300px', marginRight: '10px' }} onChange={props.handleInputChange} />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
        <List
            style={{ margin: '10px', width: '300px' }}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
                <List.Item onClick={()=>{props.handleItemDelete(index)}}>{item.id}
                </List.Item>
            )}
        />
    </Fragment>
    );
}

export default TodoListUI;