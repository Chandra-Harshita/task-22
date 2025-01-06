// PhotoList.js
import React from 'react'
import useFetch from './useFetch'

const PhotoList = () => {
  const { data, isLoading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/photos'
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="photo-list">
      {data &&
        data.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
    </div>
  )
}

export default PhotoList
