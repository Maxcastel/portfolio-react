import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/HomePage"
import { Layout } from "./components/layout/Layout"
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
