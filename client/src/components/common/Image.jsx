import { Link } from 'react-router-dom'

const Image = ({ src, alt, href, className }) => {
  const imageElement = (
    <picture>
      <img className={className} src={src} alt={alt} />
    </picture>
  )

  if (href) {
    return <Link to={href}>{imageElement}</Link>
  }

  return imageElement
}

export default Image