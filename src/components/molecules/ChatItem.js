import React from 'react';
import {StyleSheet} from 'react-native';
import {ChatItemItme, ChatItemOther} from '../molecules';
// import {ChatItemItme, ChatItemOther} from '.'; //Warning

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <ChatItemItme />;
  }
  return <ChatItemOther />;
};

export default ChatItem;

const styles = StyleSheet.create({});
