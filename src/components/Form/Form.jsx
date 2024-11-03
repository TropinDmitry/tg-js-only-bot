import React, { useCallback, useEffect, useState } from 'react'
import './Form.css'
import {useTelegram} from '../../hooks/useTelegram';


const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [entity, setEntity] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            entity
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, entity])
    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [])
    
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить'
        })
    }, [tg])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [tg, street, country])

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
        <form className={"form"}>
            <h3>Введите данные</h3>
            <input className='input' type='text' placeholder={'Страна'} value={country} onChange={onChangeCountry} />
            <input className='input' type='text' placeholder={'Улица'} value={street} onChange={onChangeStreet} />
            <select className='select' value={entity} onChange={onChangeEntity}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </form>
  )
}

export default Form;