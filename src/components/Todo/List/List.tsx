import { Item, TodoItemData } from "./Item/Item";
import React from 'react';
export const List = React.memo(({items}: {items: TodoItemData[]}) => {
    return (
        <div>
            {
                items.map((item) => <Item key={item.text} item={item} />)
            }
        </div>
    );
});