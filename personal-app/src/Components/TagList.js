import React, { useState } from 'react';
import styles from '../styles/tagList.module.less';
import { Input, Tag } from 'antd'
import { PlusOutlined } from '@ant-design/icons';


function TagList({ tags }) {
    const [inputVisable, setInputVisable] = useState(false);
    const [newTags, setNewTags] = useState([])
    const [inputValue, setInputValue] = useState('');

    const showInput = () => {
        setInputVisable(true)
    }
    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }
    const inputConfirm = () => {
        let temptags = [...newTags]
        console.log(temptags.map(({ label }) => label));


        if (inputValue && (!temptags.map(({ label }) => label).includes(inputValue))) {
            temptags.push({ key: `new-${temptags.length}`, label: inputValue })
        }
        setNewTags(temptags);
        setInputValue('')
        setInputVisable(false)
    }
    return (
        <div className={styles.tags}>
            <div className={styles.tagsTitle}>Tags</div>
            {(tags || []).concat(newTags).map((item) => (
                <Tag key={item.key}>{item.label}</Tag>
            ))}
            {inputVisable &&
                <Input
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={inputHandler}
                    onBlur={inputConfirm}
                    onPressEnter={inputConfirm}
                >

                </Input>}

            <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
                <PlusOutlined />
            </Tag>
        </div>
    );
}

export default TagList;