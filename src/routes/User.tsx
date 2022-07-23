import { useParams } from "react-router-dom"

const User = () => {
  const { userId } = useParams()
  // TODO: ked cavo zada url takeho usera, ktory neni v contexte, redirect na 404
  // s pripadnou hlaskou ze kkd pouzivaj search bar
  return <div>{userId}</div>
}

export default User
