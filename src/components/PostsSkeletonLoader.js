import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { getScreenHeight, getScreenWidth } from '../utils/Helpers';

function PostsSkeletonLoader() {
  return (
    <ContentLoader
      speed={1}
      width={getScreenWidth()}
      height={getScreenHeight()}
      viewBox={`0 0 ${getScreenWidth()} ${getScreenHeight()}`}
      backgroundColor="#d1d1d1"
      foregroundColor="#ecebeb"
    >
      <Rect x="15" y="10" rx="3" ry="3" width="88" height="6" />
      <Rect x="15" y="25" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="40" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="80" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="95" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="110" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="125" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="140" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="155" rx="3" ry="3" width="150" height="6" />

      <Rect x="210" y="10" rx="3" ry="3" width="88" height="6" />
      <Rect x="210" y="25" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="40" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="80" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="95" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="110" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="125" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="140" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="155" rx="3" ry="3" width="150" height="6" />

      <Rect x="15" y="200" rx="3" ry="3" width="88" height="6" />
      <Rect x="15" y="215" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="230" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="270" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="285" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="300" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="315" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="330" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="345" rx="3" ry="3" width="150" height="6" />

      <Rect x="210" y="200" rx="3" ry="3" width="88" height="6" />
      <Rect x="210" y="215" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="230" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="270" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="285" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="300" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="315" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="330" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="345" rx="3" ry="3" width="150" height="6" />

      <Rect x="15" y="390" rx="3" ry="3" width="88" height="6" />
      <Rect x="15" y="405" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="420" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="460" rx="3" ry="3" width="52" height="6" />
      <Rect x="15" y="475" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="490" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="505" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="520" rx="3" ry="3" width="150" height="6" />
      <Rect x="15" y="535" rx="3" ry="3" width="150" height="6" />

      <Rect x="210" y="390" rx="3" ry="3" width="88" height="6" />
      <Rect x="210" y="405" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="420" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="460" rx="3" ry="3" width="52" height="6" />
      <Rect x="210" y="475" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="490" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="505" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="520" rx="3" ry="3" width="150" height="6" />
      <Rect x="210" y="535" rx="3" ry="3" width="150" height="6" />
    </ContentLoader>
  );
}

export default PostsSkeletonLoader;
