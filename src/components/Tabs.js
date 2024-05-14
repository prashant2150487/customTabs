import React, { useState } from 'react'

const Tabs = ({ tab }) => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex)

    function handleClick(index) {
        setTabIndex(index)
    }
    return (
        <div >
            <div style={{ display: 'flex', gap: '1rem' }}>
                {tab.map((item, index) => {
                    return (

                        <div key={index} style={{ backgroundColor:`${index===tabIndex ? "#000" : "#f2f2f2" }`, color: 'red', padding: '8px 15px', cursor: 'pointer', }} onClick={() => handleClick(index)}>{item.titile}</div>
                    )
                })}
            </div>
            <div>
                {tab[tabIndex].content}

            </div>


        </div>
    )
}

export default Tabs