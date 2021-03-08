import * as React from "react";
import { Container, Table } from "react-bootstrap";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <>
      <Layout />
      <Container>
        <h1>You can contact me via:</h1>
        <Table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td>
                <a href='mailto:kalyakusumadi@gmail.com'>
                  kalyakusumadi@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>
                <a href='https://www.linkedin.com/in/kalyakusumadi/'>
                  linkedin.com/in/kalyakusumadi/
                </a>
              </td>
            </tr>
            <tr>
              <td>or view my projects on Github</td>
              <td>
                <a href='https://github.com/kalyak'>github.com/kalyak</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Contact;
