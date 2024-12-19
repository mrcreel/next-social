import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
      <div className="bg-violet-300">X</div>
      <div className="bg-blue-300">X</div>
    </div>
  )
}

export default RightMenu
