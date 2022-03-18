import React from 'react'

export const SearchCard = (
    {
        firstName,
        hInch,
        hMeters,
        lastName,
    }
) => {
    return (
        <div className='col-12'>
            <div className=' bg-light mb-3'>
                <div class="card-header text-right"> {firstName} {lastName}</div>
                <div className='card-body'>
                    <p className='card-text m-2'> Height (inch): {hInch}</p>
                    <p className='card-text m-2'> Height (meter): {hMeters}</p>
                </div>
            </div>
        </div>
    )
}
