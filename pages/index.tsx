import type { NextPage } from 'next'
import Head from 'next/head'
import LoginForm from '../components/login-form'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <main>
        <LoginForm></LoginForm>
      </main>
    </div>
  )
}

export default Home