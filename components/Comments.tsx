'use client'

import React from 'react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export function Comments() {
  const { resolvedTheme } = useTheme()
  
  return (
    <div style={{ marginTop: '3rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>💬 评论区</h2>
      <Giscus
        repo="你的用户名/FDU-Sharing"  // TODO: 替换为你的仓库
        repoId=""                        // TODO: 替换为你的仓库ID
        category="Comments"
        categoryId=""                    // TODO: 替换为你的分类ID
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  )
}

export default Comments
