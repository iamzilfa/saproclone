import Link from "next/link"

const Button = ({children, style,link}) => {
  return (
    <Link href={`${link}`} target="_blank">
    <div
      className={`py-[10px] px-[25px]  font-semibold leading-6 text-[15px] ${style}`}
    >
      {children}
    </div>
  </Link>
  )
}

export default Button