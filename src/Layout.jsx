import Header from './common/Header'

function Layout({children}) {
  return (
    <>
        <Header/>
    <main>{children}</main>
    </>
  )
}

export default Layout