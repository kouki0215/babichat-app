import React from 'react'
import { Grid } from '@mui/material'
import GridItem from '../../ui/gridItem/GridItem'
//import Sidebar from '../sidebar/Sidebar'
import './Profile.css'

const profile = () => {
  return (
    // <div className='profile-screen'>
    //   <div className='profile-logo'>Profile</div>
    //   <Grid container spacing={1} className='box'>
    //     <img className='icon' src='https://iconbu.com/wp-content/uploads/2020/01/%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'></img>
    //     <ul>
    //       <li className='box1-list user-name'>ユーザ名</li>
    //       <li className='box1-list'>ID</li>
    //     </ul>
    //     <div className='self-introduction'>自己紹介</div>
    //     <div className='box1-1'></div>
    //   </Grid>
    //   <Grid container spacing={1} className='box'>
    //     <ul className='post-list'>
    //       <li className='box2-list'>全ての投稿</li>
    //       <li className='box2-list'>返信</li>
    //     </ul>
    //   </Grid>
    // </div>

    <div className='profile-screen'>
      <Grid container direction='column' justifyContent='space-between' alignItems='center'>
        <Grid item xs={12}>
          <div className='box'>
            <img className='icon' src='https://iconbu.com/wp-content/uploads/2020/01/%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'></img>
              <ul>
                <li className='box1-list user-name'>ユーザ名</li>
                <li className='box1-list'>ID</li>
              </ul>
            <div className='self-introduction'>自己紹介</div>
            <div className='box1-1'></div>
          </div>
        </Grid>
      </Grid>
      {/* <Grid container direction='column' justifyContent='space-between' alignItems='center'>
        <Grid item xs={12} spacing={3} className='box'>
          <ul>
            <li className='box1-list user-name'>ユーザ名</li>
            <li className='box1-list'>ID</li>
          </ul>
        </Grid>
      </Grid> */}

    </div>
  )
}

export default profile
