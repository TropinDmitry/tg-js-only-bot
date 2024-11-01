import React, { useState } from 'react'
import './Form.css'


const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [entity, setEntity] = useState('physical');

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const onChangeEntity = (e) => {
        setEntity(e.target.value);
    }
  
    return (
    <div className={"form"}>
        <h3>Введите данные</h3>
        <input className='input' type='text' placeholder={'Страна'} value={country} onChange={onChangeCountry} />
        <input className='input' type='text' placeholder={'Улица'} value={street} onChange={onChangeStreet} />
        <select className='select' value={entity} onChange={onChangeEntity}>
            <option value={'physical'}>Физ. лицо</option>
            <option value={'legal'}>Юр. лицо</option>
        </select>
    </div>
  )
}

export default Form