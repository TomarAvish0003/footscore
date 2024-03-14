import { matchesType } from '@/types'
import Competition from './Competition'
import Matches from './Matches'
import React from 'react'

const LeagueTable = ({data}:{data:matchesType}) => {
  return (
    <div className='px-2 py-3 md:px-3 rounded-md flex flex-col bg-[rgb(40,46,58)] mb-2'>
        <Competition data={data}/>
        <Matches data={data}/>
    </div>
  )
}

export default LeagueTable