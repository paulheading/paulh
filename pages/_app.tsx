import 'styles/globals/index.scss'
import type { AppProps } from 'next/app'
import { Layout } from 'components'
import 'focus-visible/dist/focus-visible.min.js'
import { Provider } from 'react-redux'
import { store } from 'state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
