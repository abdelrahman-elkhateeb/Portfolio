type ButtonProps = {
  className?: string,
  id?: string,
  href?: string,
  text?: string,
}
import image from "../../public/images/arrow-down.svg";

const Button = ({ className, id, href, text }: ButtonProps) => {
  return (
    <a id={id} href={href} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={image} alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button
