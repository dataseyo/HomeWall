import React from 'react'

type Props = {
  routes: {
    hold: string;
    id: number;
}[]
}

const Route = ({routes}: Props) => {

  const onShowRoute = () => {

  }

  return (
    <div className='card m-2'>
      <h3 className='text-dark'>Name</h3>
      <p className='text-dark m-2'>
      {
        routes.map(route => {
          return route.id
        })
      }
      </p>

      <button className='btn btn-outline-primary' onClick={() => onShowRoute()}>
        Show Route
      </button>
      
      {/* when button is clicked, needs to replace anything on board with selected route */}
    </div>
  )
}

export default Route