import { useParams, useLocation, useNavigate } from 'react-router-dom'

const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  return {
    loadingpathname: location.pathname,
    query: {
      ...params,
    },
    location,
    navigate,
  }
}

export default useRouter
