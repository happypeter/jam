import React, { PropTypes } from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;


class Faq extends React.Component {
  render () {
    return (
      <Anchor affix={false} offsetTop={150}>
        <Link href="#what" title="What is the JAMstack? →" />
        <Link href="#why" title="Why the JAMstack? →" />
        <Link href="#how" title="How do I get started? →" />
      </Anchor>
    )
  }
}

export default Faq;
