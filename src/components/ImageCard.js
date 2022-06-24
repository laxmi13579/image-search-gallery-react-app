import React from 'react'

function ImageCard({ image }) {
    const tags = image.tags.split(',');
  return (
    <div className='max-w-sm  rounded overflow-hidden shadow-lg'>
        <img src={image.webformatURL} alt='' className='h-60 w-60' />
        <div className='px-6 py-4'>
            <div className='font-bold text-purple-400 text-xl mb-2'>
                photo by {image.user}
            </div>
        </div>
        <ul className='px-6'>
            <li>
                <strong>Views:</strong>{image.views}
            </li>
            <li>
                <strong>Downloads:</strong>{image.downloads}
            </li>
            <li>
                <strong>Likes:</strong>{image.likes}
            </li>
        </ul>
        <div className='px-6 py-4'>
            {tags.map((tag,index) => (
                <span key={index} className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>#{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default ImageCard