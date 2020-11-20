import React, { useEffect, useRef, useState } from "react"
import { arrayOf, bool, func, number, string } from "prop-types"
import classNames from "classnames"

/**
 * https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 */

import "./video.css"

const PlayOrPauseButton = ({ isPaused, onClick }) => {
  const playOrPauseButtonRef = useRef(null)
  return (
    <button
      aria-label="Play"
      className={classNames("video__controls__button", {
        video__controls__play: isPaused,
        video__controls__pause: !isPaused,
      })}
      onClick={onClick}
      ref={playOrPauseButtonRef}
    />
  )
}

PlayOrPauseButton.propTypes = {
  isPaused: bool,
  onClick: func,
}

const StopButton = ({ onClick, onFocus }) => {
  return (
    <button
      aria-label="Stop"
      className="video__controls__button video__controls__stop"
      onClick={onClick}
      onFocus={onFocus}
    />
  )
}

StopButton.propTypes = {
  onClick: func,
  onFocus: func,
}

const RewindButton = ({ onClick, onFocus, rewindSeconds = 10 }) => {
  return (
    <button
      aria-label={`Rewind ${rewindSeconds} seconds`}
      className="video__controls__button video__controls__rewind"
      onClick={() => onClick(rewindSeconds)}
      onFocus={onFocus}
    />
  )
}

RewindButton.propTypes = {
  onClick: func,
  onFocus: func,
  rewindSeconds: number,
}

const ForwardButton = ({ onClick, onFocus, forwardSeconds = 10 }) => {
  return (
    <button
      aria-label={`Forward ${forwardSeconds} seconds`}
      className="video__controls__button video__controls__forward"
      onClick={() => onClick(forwardSeconds)}
      onFocus={onFocus}
    />
  )
}

ForwardButton.propTypes = {
  onClick: func,
  onFocus: func,
  forwardSeconds: number,
}

const ClosedCaptionsButton = ({ onClick, onFocus }) => (
  <button
    aria-label={`Toggle closed captions`}
    className="video__controls__button video__controls__closed-captions"
    onClick={onClick}
    onFocus={onFocus}
  >
    CC
  </button>
)

ClosedCaptionsButton.propTypes = {
  onClick: func,
  onFocus: func,
}

const convertNumberToStringWith0Prefix = valueAsNumber => {
  if (valueAsNumber < 10) {
    return `0${valueAsNumber}`
  } else {
    return `${valueAsNumber}`
  }
}

const getTimestamp = time => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)
  const minutesAsString = convertNumberToStringWith0Prefix(minutes)
  const secondsAsString = convertNumberToStringWith0Prefix(seconds)
  return `${minutesAsString}:${secondsAsString}`
}

const VideoTime = ({ currentTime, duration, onFocus, setTime }) => {
  return (
    <div className="video__controls__time">
      <input
        aria-label="Timestamp"
        className="video__controls__time__range"
        type="range"
        min={0}
        max={duration}
        onChange={event => setTime(event.target.value)}
        onFocus={onFocus}
        value={currentTime}
      />
      <span className="video__controls__time__value">
        {getTimestamp(currentTime)} / {getTimestamp(duration)}
      </span>
    </div>
  )
}

VideoTime.propTypes = {
  currentTime: number,
  duration: number,
  onFocus: func,
  setTime: func,
}

const Video = ({
  captions = [],
  className,
  descriptions = [],
  height,
  onClick = () => {},
  sources = [],
  textAlternative = () => {},
  width,
}) => {
  const [shouldShowControls, setShouldShowControls] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [closedCaptionsMode, setClosedCaptionsMode] = useState(true)
  const [shouldShowTextAlternative, setShouldShowTextAlternative] = useState(
    false
  )
  const videoRef = useRef(null)
  const toggleClosedCaptions = currentMode => {
    console.log("Showing captions? ", currentMode !== "showing")
    setClosedCaptionsMode(currentMode !== "showing")
  }
  useEffect(() => {
    setIsPlaying(videoRef.current && !videoRef.current.paused)
  }, [videoRef.current && !videoRef.current.paused])
  useEffect(() => {
    if (captions.length > 0) {
      videoRef.current.textTracks[0].line = 1
      videoRef.current.textTracks[0].mode = closedCaptionsMode
        ? "showing"
        : "hidden"
    }
  }, [closedCaptionsMode])
  const play = () => {
    videoRef.current.play()
    setIsPlaying(true)
  }
  const pause = () => {
    videoRef.current.pause()
    setIsPlaying(false)
  }
  const stop = () => {
    pause()
    videoRef.current.currentTime = 0
  }
  const togglePlaying = () => (isPlaying ? pause() : play())
  const rewind = rewindSeconds => {
    if (currentTime - rewindSeconds < 0) {
      videoRef.current.currentTime = 0
    } else {
      videoRef.current.currentTime -= rewindSeconds
    }
  }
  const forward = seconds => {
    if (currentTime + seconds >= duration || !isPlaying) {
      stop()
    } else {
      videoRef.current.currentTime += seconds
    }
  }
  return (
    <>
      <section
        className={classNames("video__section", className, {
          "video--is-playing": isPlaying,
          "video--is-controls-active": isPlaying || shouldShowControls,
        })}
        onFocus={() => setShouldShowControls(true)}
        onBlur={() => setShouldShowControls(false)}
        onMouseOver={event => {
          if (event.target === videoRef.current) {
            setShouldShowControls(videoRef.current && !videoRef.current.paused)
          }
        }}
        onMouseOut={event => {
          if (event.target === videoRef.current) {
            console.log("Hiding controls")
            setShouldShowControls(false)
          } else {
            console.log(event.target)
            console.log(videoRef.current)
          }
        }}
      >
        <video
          className="video"
          height={height}
          width={width}
          onClick={togglePlaying}
          onLoadedMetadata={event => {
            setDuration(event.target.duration)
          }}
          onDurationChange={event => setDuration(event.target.duration)}
          onEnded={stop}
          onPlay={onClick}
          onPause={onClick}
          onTimeUpdate={event => setCurrentTime(event.target.currentTime)}
          preload="auto"
          ref={videoRef}
        >
          {sources.map(source => (
            <source src={source} key={source} type="video/mp4" />
          ))}
          {captions.map(caption => (
            <track
              kind="captions"
              src={caption}
              key={caption}
              srcLang="en"
              onLoad={() => {
                videoRef.current.textTracks[0].mode = closedCaptionsMode
                  ? "showing"
                  : "hidden"
              }}
            />
          ))}
          {descriptions.map(description => (
            <track
              kind="description"
              src={description}
              key={description}
              srcLang="en"
            />
          ))}
          {textAlternative()}
        </video>
        <div
          className={classNames("video__controls", {
            "video__controls--hidden": !isPlaying && !shouldShowControls,
          })}
        >
          <VideoTime
            currentTime={currentTime}
            duration={duration}
            setTime={newTime => (videoRef.current.currentTime = newTime)}
          />
          <StopButton onClick={stop} />
          <RewindButton rewindSeconds={10} onClick={rewind} />
          <PlayOrPauseButton onClick={togglePlaying} isPaused={!isPlaying} />
          <ForwardButton forwardSeconds={10} onClick={forward} />
          {captions.length > 0 && (
            <ClosedCaptionsButton
              onClick={() =>
                toggleClosedCaptions(videoRef.current.textTracks[0].mode)
              }
            />
          )}
          {textAlternative() && (
            <button
              onClick={() =>
                setShouldShowTextAlternative(!shouldShowTextAlternative)
              }
              className="video__controls__button video__controls__text-alternative"
            >
              Tekstversjon
            </button>
          )}
        </div>
      </section>
      {shouldShowTextAlternative && textAlternative()}
    </>
  )
}

Video.propTypes = {
  /** Video files */
  sources: arrayOf(string),
  /** Audio descriptions (.vtt) */
  descriptions: arrayOf(string),
  /** Closed-captions (.vtt) */
  captions: arrayOf(string),
  height: number,
  onClick: func,
  className: string,
  textAlternative: func,
  width: number,
}

export default Video
