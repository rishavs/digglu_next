import TopNav from './TopNav'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <TopNav />
    {props.children}
  </div>
)

export default Layout