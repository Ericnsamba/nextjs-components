import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid">
          <div className="card">
            <div className="info">
              <div className="cardTitle">Bulk Communication</div>
              <hr className="lineBreak" />
              <div className="buttonCon">
              <button className="button">Users Completed</button>
              <button className="button active">Users Incompleted</button>
              </div>
              <p className="cardTitle"> <strong>640 Users</strong> has not completed this course, send them a reminder by typing in the box below.</p>
            </div>
            <form className="form">
              <input type="text" id="titleInput" name="title" placeholder="Add Title"></input>
              <textarea id="textArea" name="textArea" placeholder="Type something.."></textarea>
            </form>
            <button className="button">Send Via</button>
          </div>
        </div>
      </main>

      <footer>
      <Link href="/filter">
          <a>Filter Component</a>
        </Link>
      </footer>

      <style jsx>{`
        * {
          font-family: Arial, Helvetica, sans-serif;
          text-decoration: none;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        cardTitle {
          font-size: 22px;
        }
        hr.lineBreak {
          border-top: #f3f4f6 solid;
          border-width: 1px 0 0;
        }
        .buttonCon {
          justify-content: space-between;
          flex-direction: row;
          display: flex;
          margin: 20px 0;
        }
        .button {
          text-decoration: none;
          color: #333;
          background-color: #00EEBA;
          padding: 8px 15px;
          border-radius: 30px;
          font-size: 12px;
          border: none;
          min-width: 116px;
        }
        .button.active {
          background-color: #C16B75;
          color: #fff;
        }
        .form{
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
        }
        input#titleInput {
          border: none;
          padding: 10px;
          background-color: #F3F4F6;
          border-radius: 10px;
          margin: 20px 0 10px;
        }
        textarea#textArea {
          border: none;
          padding: 10px;
          background-color: #F3F4F6;
          border-radius: 10px;
          margin: 0 0 0px;
          height: 126px;
          resize: none;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          padding: 3rem;
          padding: 20px;
          border-radius: 10px;
          box-shadow: rgb(0 0 0 / 8%) 1.95px 1.95px 5.6px;
        }

        .card {
          width: 266px;
          text-align: left;
          color: inherit;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 12px;
          line-height: 1.5;
          width: 266px;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
