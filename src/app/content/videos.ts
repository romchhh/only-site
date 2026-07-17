import { CREATOR_NAME } from './creator'

export { CREATOR_NAME }

export type MomentVideo = {
  id: string
  src: string
  poster: string
  caption: string
  locked: boolean
}

export const MOMENT_VIDEOS: MomentVideo[] = [
  {
    id: 'morning-pool',
    src: '/content/videos/preview/morning-by-the-pool.mp4',
    poster: '/content/videos/posters/morning-by-the-pool.jpg',
    caption: 'Pre-con calm before the chaos ☕',
    locked: false,
  },
  {
    id: 'sunset-balcony',
    src: '/content/videos/preview/sunset-on-the-balcony.mp4',
    poster: '/content/videos/posters/sunset-on-the-balcony.jpg',
    caption: 'Golden hour, out of costume 🌅',
    locked: false,
  },
  {
    id: 'bedroom-mirror',
    src: '/content/videos/locked/bedroom-mirror-teaser.mp4',
    poster: '/content/videos/posters/bedroom-mirror-teaser.jpg',
    caption: 'Character fitting — members only',
    locked: true,
  },
  {
    id: 'cosplay-bts',
    src: '/content/videos/locked/cosplay-behind-the-scenes.mp4',
    poster: '/content/videos/posters/cosplay-behind-the-scenes.jpg',
    caption: 'Cosplay BTS: props & paint 👀',
    locked: true,
  },
  {
    id: 'late-night',
    src: '/content/videos/locked/late-night-private.mp4',
    poster: '/content/videos/posters/late-night-private.jpg',
    caption: 'Late-night roleplay vibes',
    locked: true,
  },
  {
    id: 'members-clip',
    src: '/content/videos/locked/members-only-clip.mp4',
    poster: '/content/videos/posters/members-only-clip.jpg',
    caption: 'Full build reveal inside',
    locked: true,
  },
]
