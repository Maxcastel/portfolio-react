import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/home/HomePage"
import { Layout } from "./components/layout/Layout"
import { ThemeProvider } from "@/components/theme-provider"
import { CreateProject } from "./components/admin/project/editor/CreateProject"
import { Login } from "./components/admin/Login"
import { Formm } from "./components/admin/Formm"
import { ShowProject } from "./components/home/project/ShowProject"
import { LayoutAdmin } from "./components/admin/layout/LayoutAdmin"
import { Projects } from "./components/admin/project/Projects"
import { ShowProjectAdmin } from "./components/admin/project/ShowProjectAdmin"
import { EditProject } from "./components/admin/project/editor/EditProject"
import { Emails } from "./components/admin/email/Emails"
import { ShowEmail } from "./components/admin/email/ShowEmail"
import { useEffect } from "react"
import { useUserContext } from "./components/UserContextProvider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projets/:url" element={<ShowProject />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route index element={<HomePage />} />
              <Route path="projets" element={<Projects />} />
              <Route path="projets/:id" element={<ShowProjectAdmin />} />
              <Route path="projets/edit/:id" element={<EditProject />} />
              <Route path="projets/create" element={<CreateProject />} />
              <Route path="emails" element={<Emails />} />
              <Route path="emails/:id" element={<ShowEmail />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
