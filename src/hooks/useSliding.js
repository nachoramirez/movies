import React, { useState } from 'react'

const useSlibing = (children, clones, width) => {
  const getWindowWidth = () => window.innerWidth

  const ItemWidth =
    getWindowWidth() >= 768 ? 250 + 20 : width ? 160 + 20 : 150 + 20
  const initialTranslate = (clones - 1) * ItemWidth
  const [viewed, setViewed] = useState(0)
  const [transition, setTransition] = useState(300)
  const [activeDot, setActiveDot] = useState(0)
  const [translate, setTranslate] = useState(initialTranslate)

  const totalInViewport = Math.floor(getWindowWidth() / ItemWidth)
  const totalItems = React.Children.count(children)
  const totalSlides =
    (totalItems / totalInViewport) % 1 === 0
      ? totalItems / totalInViewport - 1
      : Math.floor(totalItems / totalInViewport)

  //creates an array with total transitions made by the slider
  const dotsToShow = []
  for (let i = 0; i <= totalSlides; i++) {
    dotsToShow.push(i)
  }

  const handleNext = () => {
    if (viewed + totalInViewport < totalItems) {
      setTransition(300)
      setTranslate(translate + ItemWidth * totalInViewport)
      setViewed(viewed + totalInViewport)
      setActiveDot(activeDot + 1)
    } else {
      //if the total viewed is higher than total items,
      //the slider slides to the element after the last slide
      setTranslate(translate + ItemWidth * (totalItems - viewed))
      setViewed(viewed + totalInViewport)
      setTransition(300)
      setActiveDot(0)
      //and then slices to the first item without transition
      setTimeout(() => {
        setTransition(0)
        setTranslate(initialTranslate)
        setViewed(0)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (viewed > 0) {
      setTransition(300)
      setTranslate(translate - ItemWidth * totalInViewport)
      setViewed(viewed - totalInViewport)
      setActiveDot(activeDot - 1)
    } else {
      //if the viewed items is lower than 0
      //the slider slides to the previus slide (clone)
      setTransition(300)
      setTranslate(
        translate - ItemWidth * (totalItems - totalSlides * totalInViewport)
      )
      setActiveDot(dotsToShow.length - 1)
      //and then slides to the real childen without transition
      setTimeout(() => {
        setTransition(0)
        setTranslate(
          initialTranslate + totalInViewport * ItemWidth * totalSlides
        )
        setViewed((totalItems / totalInViewport - 1) * totalInViewport)
      }, 300)
    }
  }

  const handleDots = (index) => {
    setActiveDot(index)
    setTransition(300)
    setTranslate(index * totalInViewport * ItemWidth + initialTranslate)
    setViewed(index * totalInViewport)
  }

  return {
    handleNext,
    handlePrev,
    translate,
    transition,
    dotsToShow,
    activeDot,
    handleDots,
  }
}

export default useSlibing
