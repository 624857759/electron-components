import React from 'react'

import {
  LoadingScreen,
} from '@obsidians/ui-components'

export default function ({ loading, modelSession, updateTabPath }) {
  if (loading) {
    return <div className='custom-tab bg2'><LoadingScreen /></div>
  } else if (!modelSession.CustomTab) {
    return null
  } else {
    return <modelSession.CustomTab
      updateTabPath={updateTabPath}
      modelSession={modelSession} />
  }
}
