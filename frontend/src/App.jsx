import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";
import NotFound from "./pages/NotFound";
import Header from "./components/ui/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import { Toaster } from "react-hot-toast";
function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER)



  console.log("loading", loading)
  console.log("data", data)
  console.log("error", error)
  return (
    <>
      {data?.authUser && <Header />}
      <Routes>
        <Route path='/' element={data?.authUser ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={!data?.authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/transaction/:id' element={<TransactionPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
