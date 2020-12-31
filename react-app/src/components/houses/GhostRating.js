import React, { useState } from 'react'

function GhostyBoy({ onClick, id, on }) {
  return (<i onClick={onClick} id={id} className={`fas fa-ghost ${on ? " ghost--on" : " ghost--off"}`}></i>
  )
}

export default function GhostRating({ onChange, value }) {
  const maxRating = 5

  const [rate, setRate] = useState(0)

  const ghosts = []

  for (let i = 0; i < maxRating; i++) {
    ghosts.push(<GhostyBoy key={`ghost${i}`} onClick={(e) => { e.stopPropagation(); setRate(i + 1) }} id={`ghosty-boy-${i}`} on={i + 1 <= rate} />)
  }

  return (
    <>
      <div className="ghost-rating__container">
        {ghosts.map(ghost => {
          return ghost
        })}
      </div>
    </>

  )
}
