import fallback from '../assets/thumbnail.png'

const CardThumbnail = ({type, src, alt = "", ...otherProps}) => {
  return (
    <div className="-mx-6 -mt-2">
      {!src ? (
        <img src={fallback} alt="" className="rounded-t-default" />
      ) : (
        <>
          {(type === 'image' || type === 'svg') && <img src={src} alt={alt} {...otherProps} className="rounded-t-default" />}
          {type === 'video' && <video src={src} {...otherProps} className="rounded-t-default" />}
        </>
      )}
    </div>
  )
}

export default CardThumbnail
