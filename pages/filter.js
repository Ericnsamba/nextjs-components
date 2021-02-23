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
              <div className="buttonCon">
              <input type="text" id="titleInput" name="title" placeholder="Add Title"></input>
              <button className="button">Clear Filter</button>
              <button className="button active">Apply Filters</button>
              </div>
          </div>
        </div>
      </main>

      <footer>
      <Link href="http://localhost:3000/">
          <a>Back</a>
        </Link>
      </footer>

      <style jsx>{`
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
          align-self: center;
          background-color: #fff;
        }
        .button {
          text-decoration: none;
          color: #333;
          background-color: #00EEBA;
          padding: 8px 15px;
          border-radius: 10px;
          font-size: 12px;
          border: none;
          min-width: 104px;
        }
        .button.active {
          background-color: #21283A;
          color: #fff;
          margin-left: 10px;
        }
        input#titleInput {
          border: none;
          padding: 10px;
          background-color: #F3F4F6;
          border-radius: 10px;
          width: 460px;
          margin-right: 10px;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          flex-direction: row;
          
        }
        
        .card {
            box-shadow: rgb(0 0 0 / 8%) 0.95px 0.95px 15.6px;
            background-color: #fff;
            width: 740px;
            height: 88px;
            border-radius: 10px;
            text-align: left;
            color: inherit;
            justify-content: center;
            display: flex;  
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          text-decoration: none;
          
        }

        * {
          font-family: Arial, Helvetica, sans-serif;
          text-decoration: none;
          box-sizing: border-box;
          background-color: #F5F5FD;
        }
      `}</style>
    </div>
  )
}
