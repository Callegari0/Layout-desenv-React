import loading from '../img/loading.svg';

import './Loading.modules.css';

function Loading() {

    return (
        <div className='loader_container'>
            <img className='loader' src={loading} alt='loading' />
        </div>
    )
}

export default Loading;