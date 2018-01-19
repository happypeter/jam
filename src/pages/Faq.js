import React, { PropTypes } from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;


class Faq extends React.Component {
  render () {
    return (
      <Anchor affix={false} offsetTop={150}>
        <Link href="#what" title="什么是 JAMstack? →" />
        <Link href="#why" title="为何选择 JAMstack? →" />
        <Link href="#how" title="如何上手？ →" />
      </Anchor>
    )
  }
}

export default Faq;
