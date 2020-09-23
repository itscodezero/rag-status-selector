import React from 'react'

import { RAGStatus } from 'rag-status-selector'
import 'rag-status-selector/dist/index.css'

const App = () => {
  const defaultOption = { key: 'Green', value: '#418600' };
  const handleSelect = (o) => {
    console.log(o);
  }
  return <RAGStatus defaultOption={defaultOption} onSelect={handleSelect} />
}

export default App
