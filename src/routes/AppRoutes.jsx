import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details, Home, Login } from '../pages'
import { Layout } from '../common/components'

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='*' element={
              <Layout>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/details/:id' element={<Details />} />s
                </Routes>
              </Layout>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
