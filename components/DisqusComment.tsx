import React, { useEffect } from 'react'

import { DiscussionEmbed, Recommendations } from 'disqus-react'

import { useDarkMode } from '@/lib/use-dark-mode'

const DisqusComments = ({ pageId, title }) => {
  const disqusShortname = 'jang-inspiration'
  const disqusConfig = {
    url: `https://jang-inspiration.com/${pageId}`,
    identifier: pageId, // Single post id
    title: title, // Single post title
    language: 'ko',
    apiKey: ''
  }
  // dark mode 될 때마다 disqus 재로드
  const { isDarkMode } = useDarkMode()
  useEffect(() => {
    const disqusScript = document.createElement('script')
    disqusScript.src = `https://${disqusShortname}.disqus.com/embed.js`
    disqusScript.setAttribute('data-timestamp', Date.now().toString())
    document.body.appendChild(disqusScript)
    return () => {
      document.body.removeChild(disqusScript)
    }
  }, [isDarkMode])
  return (
    <>
      <Recommendations shortname={disqusShortname} config={disqusConfig} />
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </>
  )
}

export default DisqusComments
