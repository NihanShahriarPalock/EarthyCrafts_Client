import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
      <div>
        <Helmet>
          <title>Earthly | Error</title>
        </Helmet>
        <h2>Error</h2>
      </div>
    );
};

export default ErrorPage;