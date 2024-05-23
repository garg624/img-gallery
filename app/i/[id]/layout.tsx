import { ReactNode } from "react"
import CustomCursor from '@/components/CustomCursor'
const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="image-page">
      {/* <CustomCursor /> */}
      {children}</div>
  )
}

export default layout