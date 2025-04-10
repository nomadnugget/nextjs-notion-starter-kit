import { type Block, type ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

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

  // 페이지가 블로그 포스트일 경우, 페이지에 대한 트윗을 가져와서 표시합니다.
  if (isBlogPost) {
    const tweet = getPageTweet(block, recordMap)
    if (!tweet) {
      return null
    }

    // 트윗이 있을 경우 페이지에서 트윗과 관련된 작업을 진행할 수 있습니다.
    return (
      <div>
        {/* 여기서 트윗을 렌더링하거나 다른 콘텐츠를 추가할 수 있습니다 */}
      </div>
    )
  }

  // 콘텐츠가 여기에 중앙 정렬됩니다
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
