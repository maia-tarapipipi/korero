import { UserDraft, User } from '../../../models/user_models'
import ProfileForm from './ProfileForm'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import useFetchUser from '../../hooks/useFetchProfile'
import { insertProfile } from '../../apis/user'
import Loading from '../../utilities/Loading'
import Error from '../../utilities/Error'

function UserProfilePage() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const userQuery = useFetchUser()
  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: UserDraft | User; token: string }) =>
      insertProfile(form, token),
    onSuccess: () => {
      navigate('/')
    },
  })

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated && !user) {
    return <Error />
  }

  async function handleSubmit(form: UserDraft | User) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
    // TO DO: check path
    navigate('/')
  }

  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} profile={userQuery.data} />
    </div>
  )
}

export default UserProfilePage
