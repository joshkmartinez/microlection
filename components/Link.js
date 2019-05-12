import Link from 'next/link'
import { withRouter } from 'next/router'

export default withRouter(
  ({ href = '#', children, color = 'black', className }) => (
    <Link href={href}>
      <a className={className}>
        {children}
        <style jsx>{`
          color: ${color};
          transition: all 0.3s ease;
          text-decoration: none; //removes link underline
          display: inline-block;

          :hover {
            font-weight: bold;
            color: '#123456';
          }

          .icon {
            position: relative;
            top: 5px;
          }
        `}</style>
      </a>
    </Link>
  )
)
