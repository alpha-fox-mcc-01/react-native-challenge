import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
export default function SearchBar(props) {
    const [value, onChangeText] = useState('')
    useEffect(() => {
        props.searchChar(value)
    }, [value])

    return (
        <TextInput 
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 6 }}
        onChangeText={ text => onChangeText(text)} value={value}
        />
    )
}