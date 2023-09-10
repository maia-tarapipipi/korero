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

  //TO DO: DB call - request drop down information for Iwi names including Tauiwi and Tangata Tiriti

  return (
    <div className="h-full flex flex-col justify-center items-center text-[#607923] p-y-2">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-lg">
          {props.profile ? 'Your Profile' : 'Introduce yourself'}
        </h1>
        <div>
          <label htmlFor="name" className="mr-4">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
            defaultValue={props.profile?.name}
          />
        </div>
        <div>
          <label htmlFor="username" className="mr-4">
            username
          </label>
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
          <label htmlFor="level" className="mr-4">
            proficiency level
          </label>
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
          <label htmlFor="level" className="mr-4">
            Iwi
          </label>
          <input
            type="text"
            name="level"
            id="level"
            placeholder="level"
            required
            defaultValue={props.profile?.level}
          />
        </div>
        {/* add photo */}
        <div>
          <button className="bg-[#95B93C] text-white p-2 w-48 rounded-lg translate-x-1/4">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
