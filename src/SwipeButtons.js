import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import IconButton from '@mui/material/IconButton'

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton>
            <ReplayIcon fontSize="large" className="swipeButtons-repeat" />
        </IconButton>

        <IconButton>
            <CloseIcon fontSize="large" className="swipeButtons-left" />
        </IconButton>

        <IconButton>
            <StarRateIcon fontSize="large" className="swipeButtons-star" />
        </IconButton>

        <IconButton>
            <FavoriteIcon fontSize="large" className="swipeButtons-right" />
        </IconButton>

        <IconButton>
            <FlashOnIcon fontSize="large" className="swipeButtons-lightning" />
        </IconButton>

    </div>
  )
}

export default SwipeButtons