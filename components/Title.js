const Title = ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      font-weight: 300;
      font-size: 1.2em;
      margin: 0;

      @media only screen and (max-height: 650px) {
        font-size: 2.6em;
      }
    `}</style>
  </h1>
)

export default Title