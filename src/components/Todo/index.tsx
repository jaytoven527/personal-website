import { TodoItemData } from "./List/Item/Item";
import {List} from './List';
import { useEffect, useCallback, useState, useMemo } from 'react'

const initialState: TodoItemData[] = [{ status: 'DONE', text: 'Make a todo list' }];


const createItem = (text: string): TodoItemData => {
  return { status: 'NOT DONE', text };
}


function PendingItem({ addItem }: { addItem: (text: string) => void }) {
  const [itemToAdd, setItemToAdd] = useState<string | null>(null);

  return (
    <>
      <textarea onChange={e => setItemToAdd(e.target.value)}>{itemToAdd}</textarea>
      <button onClick={() => itemToAdd && addItem(itemToAdd)}>Add Item</button>
    </>
  );
}

export function Todo() {
  const [items, setItems] = useState(initialState);
  const addItem = useCallback( (text) => setItems([createItem(text), ...items]), [items]);
  return (
    <div>
      <h2>Things I'm working on</h2>
      <PendingItem addItem={addItem} />
      <List items={items} />
    </div>
  )
}
