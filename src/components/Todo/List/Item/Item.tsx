import{useState, useCallback} from 'react';


type TodoItemStatus = 'DONE' | 'NOT DONE';

export type TodoItemData = 
    {
        status: TodoItemStatus;
        text: string
    }


export function Item({item}:{item:TodoItemData}) {
    const {text} = item;
    const [status, setStatus] = useState(item.status);


    const changeStatus = useCallback(
        (active) => {
            setStatus(active ? 'DONE' : 'NOT DONE');            
        },
        [],
    );

    const toggleStatus = useCallback(
        () => {
            changeStatus(status === 'DONE' ? false : true)
        },
        [status]
    );


    return (
        <div>
            <input type="checkbox" checked={status === 'DONE' ? true : undefined} onChange={toggleStatus} />
            {text}
        </div>
    );
}