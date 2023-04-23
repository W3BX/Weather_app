import React from 'react'
import ContentLoader from 'react-content-loader';
const Loader = (props) => {
    return (
        <div className='my-2'>
            {props.search && <ContentLoader viewBox="0 0 400 20">
                <rect x="0" y="0" rx="3" ry="3" width="400" height="200" />
            </ContentLoader>}
            {props.forecast && <ContentLoader viewBox="0 0 400 100">
                <rect x="0" y="0" rx="3" ry="3" width="400" height="200" />
            </ContentLoader>}
            {props.currentDay && <ContentLoader viewBox="0 0 400 160">
                <rect x="0" y="0" rx="3" ry="3" width="400" height="200" />
            </ContentLoader>}
        </div>
    )
}

export default Loader