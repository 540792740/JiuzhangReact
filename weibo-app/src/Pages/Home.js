import React, { useEffect } from 'react';
import ajax from '../utils/ajax'

function Home(props) {
    useEffect(() => {
        ajax.get('/proxy/2/statuses/public_timeline.json')
        return () => {
        }
    }, [])
    return (
        <div>
            Hone
        </div>
    );
}

export default Home;