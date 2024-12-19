import Link from 'next/link'

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-xs text-blue-500">
          See All
        </Link>
      </div>
    </div>
  )
}

export default UserMediaCard
