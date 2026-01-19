import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
 
// Image metadata
export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20%',
        }}
      >
        NB
      </div>
    ),
    {
      ...size,
    }
  )
}
