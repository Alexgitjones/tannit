import React from 'react'

export default function Newsgrid({index}) {
  return (
    <div className="col-lg-3 col-sm-12 rounded-4 shadow-lg">
        <img className='rounded-top-4' src={index.img} alt="img" />
        <div className="post-detail p-4">
            <h3>{index.title}</h3>
            <p>{index.desc}</p>
        </div>
    </div>
  )
}
