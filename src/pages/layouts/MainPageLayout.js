import React from 'react'
import Title from '../../components/Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <Title
            title="Movie House"
            subtitle="Are you looking for a movie or webseries"
        />
        {children}
    </div>
  )
}

export default MainPageLayout