import { Grid } from '@mui/material'
import {
  query,
  orderBy,
  collectionGroup,
  onSnapshot,
  limit,
  DocumentReference,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import './Ranking.css'
import RankingPostTimeline from './RankingTimeline'

type PostType = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likeCount: number
  postId: string
}

const Ranking = () => {
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    // postのいいね数順に並び替える
    const q: any = query(collectionGroup(db, 'posts'), orderBy('likeCount', 'desc'), limit(10))
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const postsArray = posts

  return (
    <div className='ranking--body'>
      <Header title='Ranking' />
      <Grid container justifyContent='space-between' alignItems='center'>
        <GridItem colRatio={5.95} label='いいね数' height={2} cName=' hover-text' />
        <GridItem colRatio={5.95} label='返信数' height={2} cName=' hover-text' />
      </Grid>
      <div className='ranking--block'>
        <RankingPostTimeline postsArray={postsArray} />
      </div>
    </div>
  )
}

export default Ranking
