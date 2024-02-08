import { cookies } from 'next/headers'

import { createClient } from '@/utils/supabase/server'

const Profile = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  return (
    <div>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  )
}

export default Profile
