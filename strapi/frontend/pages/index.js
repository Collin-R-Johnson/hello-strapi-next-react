/* /pages/index.js */
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";
export default () => {
  return (
    <Layout>
      <div>
        <Alert color="primary">
          Hello next is strapi-next-react starter with Bootstrap
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  );
};