import React, {useEffect, useState} from 'react'

const AnchorTAgs = ({datatest}) => {
    const [detall, setDetall] = useState(datatest)
    useEffect(() => {
     if(datatest) {
        setDetall(JSON.parse(detall.substring(detall.indexOf('{'), detall.lastIndexOf('}') + 1)))
       // setDetall(JSON.parse(String(detall.split('metaanchorlinktag: ')?.[1]))?.[0])
     }
    }, [])
    
    return (
        <div className="anchortag">
            <h1>{detall.title}</h1>
            <h3>{detall.text}</h3>
            <img style={{width: '100%'}} src={detall.image} alt="" />
            <p>{detall.description}</p>
        </div>
    )
}
export default AnchorTAgs
