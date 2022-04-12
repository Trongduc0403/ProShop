import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Chào mừng bạn đến với ProShop",
    description: "ban san pham gia tot",
    keywords: 'noi that, ban do noi that'
}

export default Meta