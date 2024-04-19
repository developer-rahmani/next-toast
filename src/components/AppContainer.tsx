
// !! Types
import { ChildrenType } from './Toast/index.types'

// !! Components
import { ContextToast } from './Toast'


const AppContainer = ({children}  : ChildrenType) => {
  return (
    <ContextToast>{children}</ContextToast>
  )
}

export default AppContainer