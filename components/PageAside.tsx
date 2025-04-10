import { type Block, type ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'
import { PageActions } from './PageActions'

export function PageAside({
  block,
  recordMap,
  isBlogPost
}: {
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}) {
  if (!block) {
    return null
  }

  // 페이지가 블로그 포스트일 경우, PageActions를 보여줍니다.
  if (isBlogPost) {
    const tweet = getPageTweet(block, recordMap)
    if (!tweet) {
      return null
    }

    return <PageActions tweet={tweet} />
  }

  // PageSocial을 제거하고, 콘텐츠를 가운데 정렬합니다.
  return (
    <div style={centeredStyle}>
      {/* 콘텐츠가 여기에 중앙 정렬됩니다 */}
    </div>
  )
}

// 중앙 정렬을 위한 스타일 추가
const centeredStyle = {
  display: 'flex',
  justifyContent: 'center', // 가로로 중앙 정렬
  alignItems: 'center',      // 세로로 중앙 정렬
  height: '100vh',           // 화면 전체 높이 사용
  padding: '20px',           // 필요에 따라 패딩 조정
}
