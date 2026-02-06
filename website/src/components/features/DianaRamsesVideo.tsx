"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface DianaRamsesVideoProps {
  variant?: "homepage" | "ueber-mich"
}

export function DianaRamsesVideo({ variant = "ueber-mich" }: DianaRamsesVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [isPlaying])

  const handlePlay = () => {
    setIsPlaying(true)
    setIsPaused(false)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPaused(false)
      } else {
        videoRef.current.pause()
        setIsPaused(true)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false
        setIsMuted(false)
      } else {
        videoRef.current.muted = true
        setIsMuted(true)
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const paddingClass = variant === "homepage"
    ? "py-10 sm:py-12 md:py-16"
    : "py-12 sm:py-16 md:py-24"

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <section className={`${paddingClass} bg-loam`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Headline */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
            Tiefe Verbindung. Vertrauen. <span className="text-gold italic">Freundschaft.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT: Video Container */}
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg group">
            {/* Thumbnail with Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 z-10 group/btn cursor-pointer"
                aria-label="Video abspielen"
              >
                {/* Thumbnail Image */}
                <Image
                  src="/images/diana-ramses-thumbnail.jpg"
                  alt="Diana und Ramses"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 group-hover/btn:bg-black/30 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold/90 group-hover/btn:bg-gold group-hover/btn:scale-105 transition-all flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-loam ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}

            {/* Video Element */}
            <video
              ref={videoRef}
              className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
              poster="/images/diana-ramses-thumbnail.jpg"
              preload="none"
              playsInline
              muted={false}
              onEnded={() => setIsPaused(true)}
            >
              <source src="/videos/diana-ramses-web.mp4" type="video/mp4" />
              Dein Browser unterstützt das Video-Format nicht.
            </video>

            {/* Custom Controls - only visible when playing */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-3 px-3 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity">

                {/* Progress Bar */}
                <div className="relative w-full h-1 mb-3 group/progress">
                  <div className="absolute inset-0 bg-white/30 rounded-full" />
                  <div
                    className="absolute left-0 top-0 h-full bg-gold rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label="Video-Fortschritt"
                  />
                </div>

                <div className="flex items-center gap-3 sm:gap-4">

                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center transition-colors flex-shrink-0"
                    aria-label={isPaused ? "Abspielen" : "Pause"}
                  >
                    {isPaused ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-loam ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-loam" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    )}
                  </button>

                  {/* Time Display */}
                  <span className="text-white/80 font-sans text-xs sm:text-sm tabular-nums">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* Volume Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                      aria-label={isMuted ? "Ton an" : "Ton aus"}
                    >
                      {isMuted || volume === 0 ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>

                    {/* Volume Slider */}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 sm:w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold"
                      aria-label="Lautstärke"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Quote Section */}
          <div className="flex flex-col justify-center py-4 lg:py-0">

            {/* Gold Quotation Mark */}
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 text-gold/60 mb-4 sm:mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Quote Text */}
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[1.65rem] text-white/90 leading-relaxed mb-6">
              Ramses. Seit 20 Jahren an meiner Seite. Mein Lehrmeister,
              Seelengefährte und Spiegel meiner Seele. Er hat mich mehr
              gelehrt als alle Experten, mit denen ich mich ausgetauscht habe,
              Kurse, die ich gemacht, und Bücher, die ich gewälzt habe — zusammen.
            </blockquote>

            {/* Attribution */}
            <p className="text-gold font-sans text-sm tracking-wide mb-8">
              — Diana
            </p>

            {/* Subtext */}
            <p className="text-sage/80 font-sans text-sm sm:text-base leading-relaxed">
              Echte Partnerschaft entsteht, wenn das Pferd wählt zu bleiben —
              nicht weil es muss, sondern weil es will.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
