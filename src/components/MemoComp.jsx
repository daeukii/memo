import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoRedux, deleteMemoRedux,toggleHeart } from '../slices/memoSlice';
import './MemoComp.css';



export default function MemoComp() {
    
    const memo = useSelector((state) => (state.memo));
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const like = (id) => {
        dispatch(toggleHeart(id));
      };
    

    
    return (
        
        <div className='font'>
            <h1>메모장</h1>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => { dispatch(addMemoRedux({ text: input, date: "20-05-15" })) }}>
                추가
            </button>
            {
                memo.map((m) => (
                    <div key={m.id} >
                        <h3>{m.text}</h3> <p>{m.date} <button onClick={() => like(m.id)}>{m.liked ? "🧡" : "🤍"}</button><button onClick={() => { dispatch(deleteMemoRedux(m.id)) }}>
                            X
                        </button></p>
                    </div>
                ))
            }
            
        </div>
    )
}