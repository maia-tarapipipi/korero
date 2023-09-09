import { User, UserDraft } from '../../../models/user_models'

interface Props {
  profile?: User
  handleSubmit: (profile: User | UserDraft) => void
}

function ProfileForm(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const username = formData.get('username') as string
    const level = formData.get('level') as string

    const form = {
      name: name,
      username: username,
      level: level,
    }

    props.handleSubmit(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{props.profile ? 'Your Profile' : 'Introduce Yourself'}</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            defaultValue={props.profile?.name}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            defaultValue={props.profile?.username}
          />
        </div>
        <div>
          <label htmlFor="level">Proficiency Level</label>
          <input
            type="text"
            name="level"
            id="level"
            placeholder="level"
            required
            defaultValue={props.profile?.level}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
