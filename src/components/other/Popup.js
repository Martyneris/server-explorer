import React from 'react';
import Button from '../buttons/Button'

const Popup = ({ active, toggle, logout, history, noToken }) => {
    return (
        <div className={active ? "popup active" : "popup"}>
            <p className="h2">{noToken ? "You need to log back in" : "Are you sure you want to logout?"}</p>
            <Button
                label={noToken ? 'GO BACK' : 'YES'}
                onPress={() => {
                    console.log('yes pressed')
                    toggle();
                    logout();
                    history.push('/')
                }}
            />
            {!noToken &&
                <Button label={'NO'} onPress={toggle} />}
        </div>
    )
}

export default Popup