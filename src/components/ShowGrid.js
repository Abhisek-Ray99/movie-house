import React from 'react'

import ShowCard from './ShowCard'
import { FlexGrid } from './styled'
import IMAGE_NOT_FOUND from '../assets/not-found.png'

const ShowGrid = ({ data }) => {

  return (
    <FlexGrid>
      {data.map(({ show }) => {

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
          />
        )
      })}
    </FlexGrid>
  )
}

export default ShowGrid