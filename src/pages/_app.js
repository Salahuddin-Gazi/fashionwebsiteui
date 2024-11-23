import Layout from '@/components/Layout';
import "@/styles/globals.css";
import { wrapper } from '@/lib/store/store';
import { Provider } from 'react-redux';
import { useMemo } from 'react';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps, layoutData } = props;
  const stableLayoutData = useMemo(() => layoutData, [layoutData]);

  return (
    <Provider store={store}>
      <Layout data={stableLayoutData}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

App.getInitialProps = async (appContext) => {
  const { ctx } = appContext;

  // Check if we're on the server
  if (ctx.req) {
    const baseUrl = ctx.req
      ? `http://${ctx.req.headers.host}` // Server-side absolute URL
      : ''; // Client-side (shouldn't run here)

    // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000'}/data/products.json`);
    const res = await fetch(`${baseUrl}/api/products`);
    const products = await res.json();

    return {
      layoutData: { products }, // Pass products to Layout
    };
  }

  return { layoutData: {} }; // Return an empty layoutData on the client
};
