"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

function ThemeProvider({children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted , setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  console.log("THeme Provier before mounted >> " + theme);

  if( mounted ){
    console.log("THeme PRovier after mounted is >> " + mounted);
    console.log("THeme PRovier Wrapper >> " + theme);
    return (
      <div className={theme}>{children }</div>
    )
  }
}

export default ThemeProvider