import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const NavStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD'
}

const TopNav = () => (
    <div style={NavStyle}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default TopNav