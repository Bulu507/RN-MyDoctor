import IsMe from './IsMe';
import Other from './Other';
import React from 'react';

export default function ChatItem({isMe, chat, date, photo}) {
  if (isMe) {
    return <IsMe chat={chat} date={date} />;
  }
  return <Other chat={chat} date={date} photo={photo} />;
}
