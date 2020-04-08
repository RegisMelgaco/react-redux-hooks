import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createArticle } from '../../../../redux/actions/actions'


function NewArticleForm() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    function onSubmitArticle(event) {
        event.preventDefault()

        dispatch(createArticle({title: title}))

        setTitle('')
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    return (
        <form onSubmit={onSubmitArticle}>
            <input value={title} onChange={onChangeTitle}/>

            <button type='submit'>
                Adicionar
            </button>
        </form>
    )
}

export default NewArticleForm