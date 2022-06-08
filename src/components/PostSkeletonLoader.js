import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

function PostSkeletonLoader() {
  return (
    <ContentLoader
      speed={0}
      width={476}
      height={1000}
      viewBox="0 0 476 1000"
      backgroundColor="#d1d1d1"
      foregroundColor="#ecebeb"
    >
      <Rect x="30" y="65" rx="3" ry="3" width="88" height="6" />
      <Rect x="30" y="80" rx="3" ry="3" width="52" height="6" />
      <Rect x="30" y="105" rx="3" ry="3" width="252" height="6" />
      <Rect x="30" y="120" rx="3" ry="3" width="152" height="6" />
      <Rect x="30" y="135" rx="3" ry="3" width="182" height="6" />
      <Rect x="30" y="150" rx="3" ry="3" width="242" height="6" />
      <Rect x="30" y="165" rx="3" ry="3" width="312" height="6" />

      <Rect x="30" y="220" rx="3" ry="3" width="252" height="6" />
      <Rect x="30" y="235" rx="3" ry="3" width="332" height="6" />

      <Circle cx="45" cy="325" r="17" />
      <Rect x="70" y="315" rx="3" ry="3" width="88" height="6" />
      <Rect x="70" y="330" rx="3" ry="3" width="52" height="6" />
      <Rect x="30" y="355" rx="3" ry="3" width="252" height="6" />
      <Rect x="30" y="370" rx="3" ry="3" width="152" height="6" />
      <Rect x="30" y="385" rx="3" ry="3" width="182" height="6" />

      <Circle cx="45" cy="455" r="17" />
      <Rect x="70" y="445" rx="3" ry="3" width="88" height="6" />
      <Rect x="70" y="460" rx="3" ry="3" width="52" height="6" />
      <Rect x="30" y="485" rx="3" ry="3" width="252" height="6" />
      <Rect x="30" y="500" rx="3" ry="3" width="152" height="6" />
      <Rect x="30" y="515" rx="3" ry="3" width="182" height="6" />

      <Circle cx="45" cy="585" r="17" />
      <Rect x="70" y="575" rx="3" ry="3" width="88" height="6" />
      <Rect x="70" y="590" rx="3" ry="3" width="52" height="6" />
      <Rect x="30" y="615" rx="3" ry="3" width="252" height="6" />
      <Rect x="30" y="630" rx="3" ry="3" width="152" height="6" />
      <Rect x="30" y="645" rx="3" ry="3" width="182" height="6" />
    </ContentLoader>
  );
}

export default PostSkeletonLoader;
