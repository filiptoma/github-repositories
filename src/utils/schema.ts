import * as Yup from "yup"

export const userSearchSchema = Yup.object().shape({
  user: Yup.string().matches(
    /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
    "This is not a valid GitHub username. 😳"
  )
})
