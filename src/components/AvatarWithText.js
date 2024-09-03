import React from 'react'
import ContentLoader from 'react-content-loader'

const AvatarWithText = props => (
  <ContentLoader viewBox="-10 0 400 80" height={80} width={400} {...props}>
    <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
    <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
    <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
    <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
    <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
    <circle cx="38" cy="38" r="38" />
  </ContentLoader>
);

export default AvatarWithText;